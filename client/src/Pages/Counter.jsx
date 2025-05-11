import React, { useState } from 'react'
import axios from 'axios'

const Counter = () => {
  // const [count, setCount] = useState(0)
  // const [visitorsAgreed, setVisitorsAgreed] = useState(0)
  // const [visitorsDeclined, setVisitorsDeclined] = useState(0)
  const [botsCount, setBotsCount] = useState(0)
  const [visitorsCount, setVisitorsCount] = useState(0)
  const [emailsCount, setEmailsCount] = useState(0)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const apiUrl = 'https://hono-api.pictusweb.com/api/stats/km'
  //const apiUrl = 'http://localhost:3013/api/stats/km'

  const getStats = async () => {
    try {
      const { data } = await axios.get(apiUrl, config)
      setBotsCount(data.bots)
      setVisitorsCount(data.visitors)
      setEmailsCount(data.emails)
    } catch (err) {
      setError('Failed to fetch bot statistics')
      console.error('Error fetching bots:', err)
    }
  }
  // const getBots = async () => {
  //   const { data } = await axios.get(
  //     `https://km.pictusweb.com/api/bots/dvl/counter`,
  //     // `http://localhost:7000/api/bots/dvl/counter`,

  //     config
  //   )
  //   setCount(data)
  // }

  // const getVisitors = async () => {
  //   const { data } = await axios.get(
  //     `https://km.pictusweb.com/api/visitors/dvl/counter`,

  //     // `http://localhost:7000/api/visitors/dvl/counter`,

  //     config
  //   )
  //   setVisitorsAgreed(data.agreed)
  //   setVisitorsDeclined(data.declined)
  // }

  const goBack = () => {
    window.history.back()
  }
  return (
    <div className="counter-page">
      <div className="counter-buttons">
        <button
          onClick={() => {
            goBack()
          }}
        >
          Naspäť
        </button>
        <button
          onClick={() => {
            // getBots()
            // getVisitors()
            getStats()
          }}
        >
          Zobraziť
        </button>
      </div>
      <div className="counter-stats">
        <p>Roboti: {botsCount}</p>
        <p>Emaily: {emailsCount}</p>
        <p>Návštevy: {visitorsCount}</p>
      </div>
    </div>
  )
}

export default Counter
