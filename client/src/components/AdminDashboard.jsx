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

  actionHandler,
}) => {
  const formatDate = new Date(date)
  const dashboardDate = getDate(formatDate)

  const editOrder = (orderId) => {
    actionHandler('edit', orderId)
  }

  const deleteOrder = (orderId) => {
    actionHandler('delete', orderId)
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
          {dashboardDate.month}
          {'.'} {dashboardDate.year}
          {','}{' '}
        </p>

        <p>
          {phone}
          {','}{' '}
        </p>

        <p>{description}</p>
        <BiEditAlt className='action-icon' onClick={() => editOrder(id)} />
        <AiOutlineDelete
          className='action-icon'
          onClick={() => deleteOrder(id)}
        />
      </div>
    </div>
  )
}

export default AdminDashboard
