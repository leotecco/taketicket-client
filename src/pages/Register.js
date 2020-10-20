import React from 'react'

import { Link } from 'react-router-dom'

import { Form, Button } from './../components'

import LogoTackTicket from './../images/logo-take-ticket.svg'

const Register = () => {
  return <div className="flex flex-col justify-between py-20 px-10 h-full">

    <div className="flex flex-col">
      <img src={LogoTackTicket} className="w-60 mb-16" alt="Logo TakeTicket" />

      <Form.Input label="Nome" id="name" className="mb-2" />

      <Form.Input label="Razão Social" id="companyName" className="mb-2" />

      <Form.Input label="E-mail" id="email" className="mb-2" />

      <Form.Input label="CPF" id="cpf" className="mb-2" />

      <Form.Input label="CNPJ" id="cnpj" className="mb-2" />

      <Form.Input label="Senha" id="password" className="mb-12" type="password" />

      <Button color="blue-600" textColor="white" className="mb-2">Inscrever-se</Button>

      <Link to="/login" className="mb-12">
        <Button>Voltar</Button>
      </Link>
    </div>

    <p className="text-sm text-gray-500 mb-4">Todos os diretos reservados © TakeTicket 2020</p>
  </div>
}

export default Register
