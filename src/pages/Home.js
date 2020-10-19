import React from 'react'
import { Link } from 'react-router-dom'

import { Badge, Form, Event } from './../components'

import LogoTackTicket from './../images/logo-take-ticket.svg'
import oAutoDaCompadecida from './../images/o-auto-da-compadecida.png'

const Login = () => {
  return <div className="flex flex-col justify-between p-4 h-full">

    <div className="w-full mb-4">
      <div className="flex justify-between items-end mb-4 py-2">
        <img src={LogoTackTicket} className="w-40" alt="Logo TakeTicket" />

        <Link to="/login" className="text-lg text-blue-600 font-bold">Login</Link>
      </div>

      <Form.Input placeholder="Pesquisar" className="mb-4" />

      <section className="mb-4">
        <h2 className="text-2xl text-blue-600 font-bold mb-2">Categorias</h2>

        <div className="flex overflow-y-auto py-4 -mt-2">
          <Badge className="mx-1">Músicas</Badge>
          <Badge className="mx-1">Esportes</Badge>
          <Badge className="mx-1">Teatro</Badge>
          <Badge className="mx-1">Cinema</Badge>
          <Badge className="mx-1">Corrida</Badge>
          <Badge className="mx-2">Festival</Badge>
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-blue-600 font-bold mb-2">Eventos</h2>

        <Event date="Sexta-feira, 24 de Outubro, 14 horas" title="Peça - O Auto da Compadecida" category="Teatro" ticket="R$ 80,00 - R$ 100,00" image={oAutoDaCompadecida} className="mb-4" />
        <Event date="Sexta-feira, 24 de Outubro, 14 horas" title="Peça - O Auto da Compadecida" category="Teatro" ticket="R$ 80,00 - R$ 100,00" image={oAutoDaCompadecida} className="mb-4" />
        <Event date="Sexta-feira, 24 de Outubro, 14 horas" title="Peça - O Auto da Compadecida" category="Teatro" ticket="R$ 80,00 - R$ 100,00" image={oAutoDaCompadecida} className="mb-4" />
        <Event date="Sexta-feira, 24 de Outubro, 14 horas" title="Peça - O Auto da Compadecida" category="Teatro" ticket="R$ 80,00 - R$ 100,00" image={oAutoDaCompadecida} />
      </section>
    </div>

    <p className="text-sm text-gray-500 text-center mb-4">Todos os diretos reservados © TakeTicket 2020</p>
  </div>
}

export default Login
