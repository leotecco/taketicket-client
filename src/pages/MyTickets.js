import React from 'react'

import { Link } from 'react-router-dom'

import { Button, Purchase } from './../components'

import services from './../services'

const MyTickets = () => {
  const [purchases, setPurchases] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const loadPurchases = async () => {
      setIsLoading(true)

      const response = await services.modules.purchases.list()

      setPurchases(response.data.purchases)
      setIsLoading(false)
    }

    loadPurchases()
  }, [])

  if (isLoading) {
    return <div className="p-2">
      <p className="text-lg">Carregando ingressos...</p>
    </div>
  }

  if (purchases.length === 0) {
    return <div className="p-2">
      <p className="text-lg">Nenhum ingresso encontrado</p>
    </div>
  }

  return <div className="p-4">
    {purchases.map((purchase) => {
      return <Purchase purchase={purchase} />
    })}

    <Link to="/dashboard">
      <Button>Voltar</Button>
    </Link>
  </div>
}

export default MyTickets
