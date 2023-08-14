import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const AdminCreate = ({ showCreateModal, setShowCreateModal }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Do something with formData (e.g., send to server)
    setShowCreateModal(false)
    setFormData({
      title: '',
      name: '',
      address: '',
      phone: '',
      date: new Date(),
      description: '',
    }) // Reset form data to empty values    toast.success('OK')
    toast.success('OK')
  }
  return (
    <div>
      {showCreateModal && (
        <div className='admin-modal'>
          <div className='admin-modal-content'>
            <form onSubmit={handleSubmit} className='admin-modal-form'>
              <div className='admin-modal-top'>
                <p>Vytvoriť zákazku</p>
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

              <button type='submit'>Vytvoriť</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminCreate
