import React from 'react'
import './../admin.css'
import getDate from '../date'
import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineDelete, AiOutlineFile } from 'react-icons/ai'

const AdminDashboard = ({
  title,
  name,
  address,
  date,
  phone,
  price,
  description,
  orderIndex,
  id,
  edit,
  deleteOrder,
  files,
  setShowAdminFiles,
  setCurrentOrderId,
}) => {
  const formatDate = new Date(date)
  const dashboardDate = getDate(formatDate)

  const adminFiles = (id) => {
    setShowAdminFiles(true)
    setCurrentOrderId(id)
  }

  return (
    <div className='dashboard'>
      <div className='dashboard-1'>
        <p>
          {orderIndex}
          {'.'}{' '}
        </p>
        <p>
          {title}
          {','}{' '}
        </p>

        <p>
          {name}
          {','}{' '}
        </p>

        <p>
          {address}
          {','}{' '}
        </p>

        <p>
          {dashboardDate.dayOfMonth}
          {'.'}
          {dashboardDate.month + 1}
          {'.'} {dashboardDate.year}
          {','}{' '}
        </p>

        <p>
          {phone}
          {','}{' '}
        </p>

        <p>
          {price} &euro;
          {','}{' '}
        </p>

        <p>{description}</p>
        <div className='dashboard-icons'>
          <BiEditAlt className='action-icon' onClick={() => edit(id)} />
          <AiOutlineDelete
            className='action-icon'
            onClick={() => deleteOrder(id)}
          />
        </div>
        {files.length > 0 && (
          <AiOutlineFile
            className='action-icon-file'
            onClick={() => adminFiles(id)}
          />
        )}
        {/* {files &&
          files.map((file) => <p key={file.fileName}>{file.fileName}</p>)} */}
      </div>
    </div>
  )
}

export default AdminDashboard
