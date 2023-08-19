import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { db } from '../App'
import { v4 as uuidv4 } from 'uuid'
import './../admin.css'

import {
  addDoc,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'

const AdminModal = ({
  showModal,
  setShowModal,
  formTitle,
  formAction,
  title,
  setTitle,
  name,
  setName,
  address,
  setAddress,
  phone,
  setPhone,
  date,
  setDate,
  description,
  setDescription,
}) => {
  const ordersCollectionRef = collection(db, 'orders')
  const uniqueId = uuidv4()
  const generateUniqueId = () => {
    return `${Math.random().toString(36).substring(2)}`
  }

  const createOrder = (formData) => {
    const { address, name, date, description, phone, title } = formData
    const id = generateUniqueId()
    try {
      addDoc(ordersCollectionRef, {
        address,
        name,
        date,
        description,
        phone,
        title,
        id,
      })
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(false)
    toast.success('OK')
  }

  return (
    <div>
      {showModal && (
        <div className='admin-modal'>
          <div className='admin-modal-content'>
            <form onSubmit={handleSubmit} className='admin-modal-form'>
              <div className='admin-modal-top'>
                <p>{formTitle}</p>
                <p
                  className='admin-modal-form-close'
                  onClick={() => setShowModal(false)}
                >
                  X
                </p>
              </div>
              <label>
                <input
                  type='text'
                  placeholder='Názov'
                  name='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label>
                <input
                  type='text'
                  placeholder='Meno'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                <input
                  type='text'
                  placeholder='Adresa'
                  name='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
              <label>
                <input
                  type='text'
                  placeholder='Telefón'
                  name='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              {date}

              <label>
                <textarea
                  name='description'
                  placeholder='Popis'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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

export default AdminModal
