import React from 'react'
import { Admin, Page, Gdpr, TradeRules, ErrorPage, Counter } from './Pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import { StateContext } from './context/StateContext'
import { Toaster } from 'react-hot-toast'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const xauth = import.meta.env.VITE_EMAIL_EXTRA_ONE

function App() {
  return (
    <BrowserRouter>
      <StateContext>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Page />} />
            <Route path='/gdpr' element={<Gdpr />} />
            <Route exact path='/trade-rules' element={<TradeRules />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
        <Toaster />
      </StateContext>
    </BrowserRouter>
  )
}

export default App
