import React from 'react'
import { AiOutlineDelete, AiOutlineFile } from 'react-icons/ai'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const AdminFilesComponent = ({
  showAdminFiles,
  setShowAdminFiles,
  displayOrders,
  currentOrderId,
  getOrders,
}) => {
  const currentOrder = displayOrders.find(
    (order) => order._id === currentOrderId && order
  )

  const deleteFile = async (i) => {
    try {
      const index = i

      const { data } = await axios.patch(
        `http://localhost:2000/api/admin/dvl/files/${currentOrderId}`,
        {
          index,
        }
      )
      if (data === 'OK') {
        toast.success('Vymazané')
        setShowAdminFiles(false)
        getOrders()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    showAdminFiles && (
      <div className='files-modal'>
        {currentOrder.files.map((file, i) => (
          <div key={file.fileName}>
            <AiOutlineFile className='file-icon' />
            <AiOutlineDelete
              className='delete '
              onClick={() => deleteFile(i)}
            />
            <p className='edit'>{file.fileName}</p>
          </div>
        ))}
        <p className='files-close' onClick={() => setShowAdminFiles(false)}>
          x
        </p>
      </div>
    )
  )
}

export default AdminFilesComponent
