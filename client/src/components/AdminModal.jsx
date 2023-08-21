import React from 'react'
import { toast } from 'react-hot-toast'
import './../admin.css'

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
  description,
  setDescription,
  actionType,
  actionHandler,
  editOrder,
  currentOrderId,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (actionType === 'create') {
      actionHandler('create')
    } else if (actionType === 'edit') {
      editOrder(currentOrderId)
    }
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
