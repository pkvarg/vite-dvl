import React from 'react'
import { Page, Gdpr, TradeRules } from './Pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/gdpr' element={<Gdpr />} />
          <Route exact path='/trade-rules' element={<TradeRules />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
