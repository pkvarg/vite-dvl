import React from 'react'
import { Gdpr } from './components'
import { Page } from './Pages'
import { TradeRules } from './Components'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/gdpr' element={<Gdpr />} />
          <Route path='/trade-rules' element={<TradeRules />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
