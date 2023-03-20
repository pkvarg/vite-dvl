import React, { useState } from 'react'
import axios from 'axios'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [visitorsAgreed, setVisitorsAgreed] = useState(0)
  const [visitorsDeclined, setVisitorsDeclined] = useState(0)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const getBots = async () => {
    const { data } = await axios.get(
      `https://pictusweb.online/api/bots/dvl/counter`,
      // `http://localhost:2000/api/bots/dvl/counter`,

      config
    )
    setCount(data)
  }

  const getVisitors = async () => {
    const { data } = await axios.get(
      `https://pictusweb.online/api/visitors/dvl/counter`,

      // `http://localhost:2000/api/visitors/dvl/counter`,

      config
    )
    setVisitorsAgreed(data.agreed)
    setVisitorsDeclined(data.declined)
  }
  return (
    <div className='counter-page'>
      <button
        className=''
        onClick={() => {
          getBots()
          getVisitors()
        }}
      >
        Zobraziť
      </button>
      <div className='stats'>
        <p>Roboti: {count}</p>
        <p>Návštevy NES: {visitorsDeclined}</p>
        <p>Návštevy OK: {visitorsAgreed}</p>
        <p>
          Návštevy Total: {Number(visitorsAgreed) + Number(visitorsDeclined)}
        </p>
      </div>
    </div>
  )
}

export default Counter
