import React from 'react'
import { Page, Gdpr, TradeRules } from './Pages'
import { Footer } from './Components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/gdpr' element={<Gdpr />} />
          <Route path='/trade-rules' element={<TradeRules />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
