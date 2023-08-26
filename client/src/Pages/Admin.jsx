import React, { useState, useEffect } from 'react'
import { auth, provider, xauth } from './../App'
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import getDate from '../date'
import {
  AdminDashboard,
  AdminFilesComponent,
  AdminModal,
  AdminSearch,
} from '../components'
import axios from 'axios'
import './../admin.css'
import { RiLogoutBoxRLine } from 'react-icons/ri'

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
  const [price, setPrice] = useState()
  const [description, setDescription] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [actionType, setActionType] = useState('')
  const [currentOrderId, setCurrentOrderId] = useState()
  const [showOderList, setShowOrderList] = useState(true)
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [showAdminFiles, setShowAdminFiles] = useState(false)

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

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const formData = new FormData()
  const appendFormData = () => {
    formData.append('title', title)
    formData.append('name', name)
    formData.append('address', address)
    formData.append('phone', phone)
    formData.append('price', price)
    formData.append('date', date)
    formData.append('description', description)
  }

  const clearModal = () => {
    setTitle('')
    setName('')
    setAddress('')
    setPhone('')
    setDate()
    setPrice()
    setDescription('')
    setUploadedFiles([])
    getOrders()
  }

  const createOrder = async () => {
    try {
      appendFormData()

      for (let i = 0; i < uploadedFiles.length; i++) {
        formData.append('images', uploadedFiles[i])
      }
      const { data } = await axios.post(
        // 'https://pictusweb.online/api/admin/dvl/orders',
        'http://localhost:2000/api/admin/dvl/orders',
        formData
      )

      if (data === 'OK') toast.success('Vytvorené')
      clearModal()
    } catch (error) {
      console.log(error)
      toast.error('error')
    }
  }

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        'http://localhost:2000/api/admin/dvl/orders',
        // 'https://pictusweb.online/api/admin/dvl/orders',
        config
      )

      setDisplayOrders(data)
    } catch (error) {
      console.log(error)
      toast.error('error')
    }
  }

  const getSingleOrder = async (orderId) => {
    try {
      const { data } = await axios.get(
        // `https://pictusweb.online/api/admin/dvl/orders/${orderId}`,
        `http://localhost:2000/api/admin/dvl/orders/${orderId}`,

        config
      )
      setTitle(data.title)
      setName(data.name)
      setAddress(data.address)
      setPhone(data.phone)
      setDescription(data.description)
      setPrice(data.price)
      setDate(data.date)
      setUploadedFiles(data.files)
    } catch (error) {
      console.log(error)
      toast.error('error')
    }
  }
  const editOrder = async (orderId) => {
    try {
      appendFormData()

      for (let i = 0; i < uploadedFiles.length; i++) {
        formData.append('images', uploadedFiles[i])
      }
      const { data } = await axios.patch(
        // `https://pictusweb.online/api/admin/dvl/orders/${orderId}`,
        `http://localhost:2000/api/admin/dvl/orders/${orderId}`,
        formData
      )
      if (data) setShowModal(false)
      getOrders()
      clearModal()
    } catch (error) {
      console.log(error)
      toast.error('error')
    }
  }
  const deleteOrder = async (orderId) => {
    if (window.confirm('Skutočne vymazať zákazku?')) {
      try {
        const { data } = await axios.delete(
          `https://pictusweb.online/api/admin/dvl/orders/${orderId}`

          // `http://localhost:2000/api/admin/dvl/orders/${orderId}`
        )
        if (data === 'OK') toast.success('Vymazané')
        getOrders()
      } catch (error) {
        console.log(error)
        toast.error('error')
      }
    } else {
      alert('Nič sa nebude mazať :-)')
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

  const openGoogleDrive = () => {
    window.open('https://drive.google.com', '_blank')
  }

  return (
    <>
      <div className='admin'>
        <div className='first'>
          <img
            src='/img/home.webp'
            alt='home'
            className='home'
            onClick={() => navigate('/')}
          ></img>
          <h2>
            {displayDay} {displayDayOfMonth}. {displayMonth} {displayYear}
          </h2>
          {isAuth === xauth ? (
            <div className='out-and-drive'>
              <img
                className='google-drive'
                src='/img/drive.webp'
                alt='Google-Drive'
                onClick={openGoogleDrive}
              />
              <RiLogoutBoxRLine className='logout-icon' onClick={signUserOut} />
            </div>
          ) : (
            <>
              <img
                className='google-sign-in'
                src='/img/google.webp'
                alt='google'
                onClick={signInWithGoogle}
              />
            </>
          )}
        </div>
        <div className='admin-1'>
          {isAuth === xauth && (
            <>
              <div className='admin-buttons'>
                <div className='order-buttons'>
                  <button
                    onClick={() => modalAction('create')}
                    className='admin-button'
                  >
                    Vytvoriť zákazku
                  </button>
                  <button onClick={getOrders} className='admin-button'>
                    Zobraziť Zákazky
                  </button>
                </div>
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
                price={price}
                setPrice={setPrice}
                description={description}
                setDescription={setDescription}
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
                actionType={actionType}
                actionHandler={actionHandler}
                currentOrderId={currentOrderId}
                editOrder={editOrder}
                clearModal={clearModal}
              />
              <AdminFilesComponent
                showAdminFiles={showAdminFiles}
                setShowAdminFiles={setShowAdminFiles}
                displayOrders={displayOrders}
                currentOrderId={currentOrderId}
                getOrders={getOrders}
              />
              {showOderList &&
                displayOrders.map((order, i) => (
                  <AdminDashboard
                    key={order._id}
                    title={order.title}
                    name={order.name}
                    address={order.address}
                    date={order.date}
                    price={order.price}
                    phone={order.phone}
                    description={order.description}
                    orderIndex={i + 1}
                    id={order._id}
                    edit={edit}
                    deleteOrder={deleteOrder}
                    files={order.files}
                    setShowAdminFiles={setShowAdminFiles}
                    setCurrentOrderId={setCurrentOrderId}
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
