import React from 'react'
import { AiOutlineDelete, AiOutlineFile } from 'react-icons/ai'

const AdminFilesComponent = ({
  showAdminFiles,
  setShowAdminFiles,
  displayOrders,
  currentOrderId,
}) => {
  console.log(displayOrders, currentOrderId)

  const currentOrder = displayOrders.find(
    (order) => order._id === currentOrderId && order
  )

  console.log(currentOrder)

  return (
    showAdminFiles && (
      <div className='files-modal'>
        {currentOrder.files.map((file) => (
          <div key={file.fileName}>
            <AiOutlineFile className='file-icon' />
            <p>{file.fileName}</p>
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
