import React from 'react'
import './../admin.css'
import getDate from '../date'
import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'

const AdminDashboard = ({
  title,
  name,
  address,
  date,
  phone,
  description,
  orderIndex,
  id,
  edit,
  deleteOrder,
}) => {
  const formatDate = new Date(date)
  const dashboardDate = getDate(formatDate)

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
          {dashboardDate.month}
          {'.'} {dashboardDate.year}
          {','}{' '}
        </p>

        <p>
          {phone}
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
      </div>
    </div>
  )
}

export default AdminDashboard
