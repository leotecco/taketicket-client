import React from 'react'

import services from './../services'

const Context = React.createContext()

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const loadUser = async () => {
      try {
        const token = window.localStorage.getItem('token')

        if (!token) {
          setIsLoading(false)
          return
        }

        const response = await services.modules.auth.me()

        setUser(response.data.person)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }

    loadUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <p className="p-2">Carregando...</p>
  }

  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
}

export default {
  Context,
  Provider
}
