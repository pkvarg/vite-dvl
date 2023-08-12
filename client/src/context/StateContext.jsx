import React, { createContext, useContext, useState, useEffect } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState('non')

  useEffect(() => {
    const storeAuth = window.localStorage.getItem('blogging')
    if (storeAuth !== null) setIsAuth(JSON.parse(storeAuth))
  }, [])

  useEffect(() => {
    localStorage.setItem('blogging', JSON.stringify(isAuth))
  }, [isAuth])

  return (
    <Context.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </Context.Provider>
  )
}
export const useStateContext = () => useContext(Context)
