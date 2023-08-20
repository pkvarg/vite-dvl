import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { db } from '../App'
import { v4 as uuidv4 } from 'uuid'
import './../admin.css'
import axios from 'axios'

import {
  addDoc,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'

const AdminCreate = ({
  showCreateModal,
  setShowCreateModal,
  formTitle,
  formAction,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    address: '',
    phone: '',
    date: new Date(),
    description: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const ordersCollectionRef = collection(db, 'orders')
  const uniqueId = uuidv4()
  const generateUniqueId = () => {
    return `${Math.random().toString(36).substring(2)}`
  }

  const createOrder = async (formData) => {
    const { address, name, date, description, phone, title } = formData
    const id = generateUniqueId()
    try {
      await axios.post('http://localhost:2000/dvl/orders', {
        address,
        name,
        date,
        description,
        phone,
        title,
      })

      // addDoc(ordersCollectionRef, {
      //   address,
      //   name,
      //   date,
      //   description,
      //   phone,
      //   title,
      //   id,
      // })
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Do something with formData (e.g., send to server)
    createOrder(formData)
    setShowCreateModal(false)
    // setFormData({
    //   title: '',
    //   name: '',
    //   address: '',
    //   phone: '',
    //   date: new Date(),
    //   description: '',
    // }) // Reset form data to empty values    toast.success('OK')
    toast.success('OK')
  }

  return (
    <div>
      {showCreateModal && (
        <div className='admin-modal'>
          <div className='admin-modal-content'>
            <form onSubmit={handleSubmit} className='admin-modal-form'>
              <div className='admin-modal-top'>
                <p>{formTitle}</p>
                <p
                  className='admin-modal-form-close'
                  onClick={() => setShowCreateModal(false)}
                >
                  X
                </p>
              </div>
              <label>
                <input
                  type='text'
                  placeholder='Názov'
                  name='title'
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <input
                  type='text'
                  placeholder='Meno'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <input
                  type='text'
                  placeholder='Adresa'
                  name='address'
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <input
                  type='text'
                  placeholder='Telefón'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                <textarea
                  name='description'
                  placeholder='Popis'
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </label>

              <button type='submit'>{formAction}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminCreate
