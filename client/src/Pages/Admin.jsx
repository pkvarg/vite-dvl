import React, { useState, useEffect } from 'react'
import { auth, provider, xauth } from './../App'
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import getDate from '../date'
import useDrivePicker from 'react-google-drive-picker'
import { AdminDashboard, AdminModal, AdminSearch } from '../components'
import axios from 'axios'
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
  const [actionType, setActionType] = useState('')
  const [currentOrderId, setCurrentOrderId] = useState()
  const [showOderList, setShowOrderList] = useState(true)
  const [showSearchResults, setShowSearchResults] = useState(false)

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

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const createOrder = async () => {
    try {
      const { data } = await axios.post(
        'https://pictusweb.online/api/admin/dvl/orders',
        // 'http://localhost:2000/api/admin/dvl/orders',
        {
          title,
          name,
          address,
          description,
          phone,
        },
        config
      )
      if (data === 'OK') {
        toast.success('Vytvorené')
        setTitle('')
        setName('')
        setAddress('')
        setPhone('')
        setDescription('')
      }
    } catch (error) {
      console.log(error)
      toast.error('error')
    }
  }

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await axios.get(
          // 'http://localhost:2000/api/admin/dvl/orders',
          'https://pictusweb.online/api/admin/dvl/orders',
          config
        )

        setDisplayOrders(data)
      } catch (error) {
        console.log(error)
        toast.error('error')
      }
    }
    getOrders()
  }, [displayOrders])

  const getSingleOrder = async (orderId) => {
    try {
      const { data } = await axios.get(
        `https://pictusweb.online/api/admin/dvl/orders/${orderId}`,
        // `http://localhost:2000/api/admin/dvl/orders/${orderId}`,

        config
      )
      setTitle(data.title)
      setName(data.name)
      setAddress(data.address)
      setPhone(data.phone)
      setDescription(data.description)
    } catch (error) {
      console.log(error)
      toast.error('error')
    }
  }
  const editOrder = async (orderId) => {
    try {
      const { data } = await axios.patch(
        `https://pictusweb.online/api/admin/dvl/orders/${orderId}`,
        // `http://localhost:2000/api/admin/dvl/orders/${orderId}`,
        {
          title,
          name,
          address,
          description,
          phone,
        },
        config
      )
      if (data) setShowModal(false)
    } catch (error) {
      console.log(error)
      toast.error('error')
    }
  }
  const deleteOrder = async (orderId) => {
    alert('Skutočne vymazať zákazku?')
    try {
      const { data } = await axios.delete(
        `https://pictusweb.online/api/admin/dvl/orders/${orderId}`

        // `http://localhost:2000/api/admin/dvl/orders/${orderId}`
      )
      if (data === 'OK') toast.success('Vymazané')
    } catch (error) {
      console.log(error)
      toast.error('error')
    }
  }

  const actionHandler = () => {
    if (actionType === 'create') {
      createOrder()
      setShowModal(false)
    }
  }

  const modalAction = (action, id) => {
    if (action === 'create') {
      setActionType(action)
      setShowModal(true)
      setFormTitle('Vytvoriť zákazku')
      setFormAction('Vytvoriť')
    }
  }

  const edit = (id) => {
    setActionType('edit')
    setShowModal(true)
    setCurrentOrderId(id)
    setFormTitle('Upraviť zákazku')
    setFormAction('Upraviť')
    getSingleOrder(id)
  }

  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async (query) => {
    if (query !== '') {
      try {
        const response = await axios.get(
          `https://pictusweb.online/api/admin/dvl/orders/search/${query}`

          // `http://localhost:2000/api/admin/dvl/orders/search/${query}`
        )
        setSearchResults(response.data)
        setShowOrderList(false)
        setShowSearchResults(true)
      } catch (error) {
        console.error('Error searching:', error)
      }
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
                  onClick={() => modalAction('create')}
                  className='admin-button'
                >
                  Vytvoriť zákazku
                </button>
                {/* <button onClick={getOrders} className='admin-button'>
                  Zobraziť Zákazky
                </button> */}
                <img
                  className='google-drive'
                  src='/img/Google-Drive.webp'
                  alt='Google-Drive'
                  onClick={() => handleOpenPicker()}
                />
                <AdminSearch
                  handleSearch={handleSearch}
                  setShowOrderList={setShowOrderList}
                  setShowSearchResults={setShowSearchResults}
                />
              </div>
            </>
          )}
        </div>
        {isAuth === xauth && (
          <div className='admin-auth'>
            <>
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
                actionType={actionType}
                actionHandler={actionHandler}
                currentOrderId={currentOrderId}
                editOrder={editOrder}
              />
              {showOderList &&
                displayOrders.map((order, i) => (
                  <AdminDashboard
                    key={order._id}
                    title={order.title}
                    name={order.name}
                    address={order.address}
                    date={order.createdAt}
                    phone={order.phone}
                    description={order.description}
                    orderIndex={i + 1}
                    id={order._id}
                    edit={edit}
                    deleteOrder={deleteOrder}
                  />
                ))}
              {showSearchResults &&
                searchResults.map((order, i) => (
                  <AdminDashboard
                    key={order._id}
                    title={order.title}
                    name={order.name}
                    address={order.address}
                    date={order.createdAt}
                    phone={order.phone}
                    description={order.description}
                    orderIndex={i + 1}
                    id={order._id}
                    edit={edit}
                    deleteOrder={deleteOrder}
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
