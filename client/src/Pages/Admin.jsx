import React, { useState, useEffect } from 'react'
import { auth, provider, xauth, db } from './../App'
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import getDate from '../date'
import useDrivePicker from 'react-google-drive-picker'
import { AdminCreate, AdminDashboard, AdminModal } from '../components'
import {
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from 'firebase/firestore'
import './../admin.css'

const Admin = () => {
  const navigate = useNavigate()
  const { isAuth, setIsAuth } = useStateContext()
  const [displayDay, setDisplayDay] = useState()
  const [displayDayOfMonth, setDisplayDayOfMonth] = useState()
  const [displayMonth, setDisplayMonth] = useState()
  const [displayYear, setDisplayYear] = useState()
  const [displayOrders, setDisplayOrders] = useState([])
  const [formTitle, setFormTitle] = useState('')
  const [formAction, setFormAction] = useState('')
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState()
  const [description, setDescription] = useState('')
  const [singleOrder, setSingleOrder] = useState()

  const ordersCollectionRef = collection(db, 'orders')

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      if (
        result.user.email === import.meta.env.VITE_AUTH_EMAIL_2 ||
        result.user.email === import.meta.env.VITE_AUTH_EMAIL_1
      ) {
        setIsAuth(xauth)
        toast.success('Prihlásený.')
      } else {
        navigate('/')
        toast.error('Unauthorised user.')
      }
    })
  }

  const signUserOut = () => {
    signOut(auth).then(() => {
      setIsAuth('non')
      toast.success('Odhlásený')
      //navigate('/')
    })
  }

  useEffect(() => {
    const todaysdate = new Date()
    const display = getDate(todaysdate)
    setDisplayDay(display.dayName)
    setDisplayDayOfMonth(display.dayOfMonth)
    setDisplayMonth(display.monthName)
    setDisplayYear(display.year)
  }, [])

  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const [openPicker] = useDrivePicker()

  const handleOpenPicker = () => {
    gapi.load('client:auth2', () => {
      gapi.client
        .init({
          apiKey: import.meta.env.VITE_NEW_API_KEY,
        })
        .then(() => {
          let tokenInfo = gapi.auth.getToken()
          const pickerConfig = {
            clientId: import.meta.env.VITE_NEW_OAUTH_CLIENT_ID,
            developerKey: import.meta.env.VITE_NEW_API_KEY,
            viewId: 'DOCS',
            viewMimeTypes: 'image/jpeg,image/png,image/gif',
            token: tokenInfo ? tokenInfo.access_token : null,
            // token: import.meta.env.VITE_NEW_TOKEN,
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            //setOrigin: 'http://localhost:5173',
            setOrigin: 'https://kvalitnamontaz.sk',

            callbackFunction: (data) => {
              const elements = Array.from(
                document.getElementsByClassName('picker-dialog')
              )
              for (let i = 0; i < elements.length; i++) {
                elements[i].style.zIndex = '2000'
              }
              if (data.action === 'picked') {
                //Add your desired workflow when choosing a file from the Google Picker popup
                //In this below code, I'm attempting to get the file's information.
                if (!tokenInfo) {
                  tokenInfo = gapi.auth.getToken()
                }
                const fetchOptions = {
                  headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_NEW_TOKEN}`,
                  },
                }
                const driveFileUrl = 'https://www.googleapis.com/drive/v3/files'
                data.docs.map(async (item) => {
                  const response = await fetch(
                    `${driveFileUrl}/${item.id}?alt=media`,
                    fetchOptions
                  )
                })
              }
            },
          }
          openPicker(pickerConfig)
        })
    })
  }

  const ordersArr = []
  const ordersData = []

  const getOrders = async () => {
    const data = await getDocs(ordersCollectionRef)
    data.docs.map((doc) => ordersArr.push(doc))
    ordersArr.map((order) => {
      ordersData.push(order._document.data.value.mapValue.fields)
    })
    setDisplayOrders(ordersData)
    console.log('oA', data)
  }

  const getSingleOrder = (orderId) => {
    return displayOrders.find((obj) => obj.id.stringValue === orderId)
  }

  const editOrder = async (orderId) => {
    console.log('editInModal', orderId)
    const docRef = doc(db, 'orders', orderId)

    const docSnap = await getDocs(ordersCollectionRef)

    //console.log(docSnap.docs.map((doc) => console.log(doc.ref.id)))
    docSnap.docs.map((doc) => console.log(doc.ref.id))

    //   updateDoc(docRef, {
    //     title,
    //     name,
    //     address,
    //     description,
    //     phone,
    //   })
    //   toast.success('Updated')
    // } catch (error) {
    //   toast.error(error)
    // }
  }
  const deleteOrder = async (orderId) => {
    console.log('deleteInModal', orderId)
  }

  const actionHandler = (actionType, orderId) => {
    if (actionType === 'edit') {
      editOrder(orderId)
      const data = getSingleOrder(orderId)
      setTitle(data.title.stringValue)
      setName(data.name.stringValue)
      setAddress(data.address.stringValue)
      setDate(data.date.timestampValue)
      setDescription(data.description.stringValue)
      setPhone(data.phone.stringValue)
      setShowModal(true)
      setFormTitle('Upraviť zákazku')
      setFormAction('Upraviť')
    } else {
      deleteOrder(orderId)
      setShowModal(true)
      setFormTitle('Vymazať zákazku')
      setFormAction('Vymazať')
    }
  }

  return (
    <>
      <div className='admin'>
        <div className='first'>
          <h1 onClick={() => navigate('/')}>Domov.</h1>
          <h2>
            Dnes je {displayDay} {displayDayOfMonth}. {displayMonth}{' '}
            {displayYear}
          </h2>
          {isAuth === xauth ? (
            <>
              <button onClick={signUserOut} className='admin-button'>
                Odhlásiť sa
              </button>
            </>
          ) : (
            <>
              <button onClick={signInWithGoogle} className='admin-button'>
                Prihlásenie cez Google
              </button>
            </>
          )}
        </div>
        <div className='admin-1'>
          {isAuth === xauth && (
            <>
              {/* <div className='greeting'>
                <h1>Vitaj Tomáš</h1>
              </div> */}
              <div className='admin-buttons'>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className='admin-button'
                >
                  Vytvoriť zákazku
                </button>
                <button onClick={getOrders} className='admin-button'>
                  Zobraziť Zákazky
                </button>
                <img
                  className='google-drive'
                  src='/img/Google-Drive.webp'
                  alt='Google-Drive'
                  onClick={() => handleOpenPicker()}
                />
              </div>
            </>
          )}
        </div>
        {isAuth === xauth && (
          <div className='admin-auth'>
            <>
              {/* <AdminCreate
                showCreateModal={showCreateModal}
                setShowCreateModal={setShowCreateModal}
                formTitle='Vytvoriť zákazku'
                formAction='Vytvoriť'
              /> */}
              <AdminModal
                showModal={showModal}
                setShowModal={setShowModal}
                formTitle={formTitle}
                formAction={formAction}
                title={title}
                setTitle={setTitle}
                name={name}
                setName={setName}
                address={address}
                setAddress={setAddress}
                date={date}
                setDate={setDate}
                phone={phone}
                setPhone={setPhone}
                description={description}
                setDescription={setDescription}
              />
              {displayOrders.map((order, i) => (
                <AdminDashboard
                  key={order.id.stringValue}
                  title={order.title.stringValue}
                  name={order.name.stringValue}
                  address={order.address.stringValue}
                  date={order.date.timestampValue}
                  phone={order.phone.stringValue}
                  description={order.description.stringValue}
                  orderIndex={i + 1}
                  id={order.id.stringValue}
                  actionHandler={actionHandler}
                />
              ))}
            </>
          </div>
        )}
      </div>
    </>
  )
}

export default Admin
