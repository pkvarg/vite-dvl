import React from 'react'
import './../admin.css'
import getDate from '../date'

import { AiOutlineFile } from 'react-icons/ai'

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
  price,
  setPrice,
  description,
  setDescription,
  uploadedFiles,
  setUploadedFiles,
  actionType,
  actionHandler,
  editOrder,
  currentOrderId,
  clearModal,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (actionType === 'create') {
      actionHandler('create')
    } else if (actionType === 'edit') {
      editOrder(currentOrderId)
    }
  }

  const closeModal = () => {
    setShowModal(false)
    clearModal()
  }
  const formatDate = new Date(date)
  const modalDate = getDate(formatDate)

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
                  onClick={() => closeModal()}
                >
                  X
                </p>
              </div>

              <input
                type='text'
                placeholder='Názov'
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type='text'
                placeholder='Meno'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type='text'
                placeholder='Adresa'
                name='address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <input
                type='text'
                placeholder='Telefón'
                name='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                type='text'
                placeholder='Suma'
                name='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <input
                className='date-field'
                type='date'
                name='date'
                // value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <p className='modal-date'>
                {modalDate.dayOfMonth || ''}
                {'.'}
                {modalDate.month + 1 || ''}
                {'.'} {modalDate.year || ''}
              </p>

              <textarea
                name='description'
                placeholder='Popis'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <input
                className='files-field'
                onChange={(e) => setUploadedFiles(e.target.files)}
                type='file'
                multiple
              />

              <button className='modal-button' type='submit'>
                {formAction}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminModal
