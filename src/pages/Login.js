import React from 'react'
import { Link } from 'react-router-dom'

import { Form, Button } from './../components'

import LogoTackTicket from './../images/logo-take-ticket.svg'

const Login = () => {
    return <div className="flex flex-col justify-between py-20 px-10 h-full">

        <div className="flex flex-col">
            <img src={LogoTackTicket} className="w-60 mb-16" alt="Logo TakeTicket" />

            <Form.Input label="E-mail" className="mb-2" />

            <Form.Input label="Senha" className="mb-12" type="password" />

            <Button color="blue-600" textColor="white" className="mb-2">Entrar</Button>

            <Link to="/register">
                <Button>Inscrever-se</Button>
            </Link>
        </div>

        <p className="text-sm text-gray-500">Todos os diretos reservados © TakeTicket 2020</p>
    </div>
}

export default Login
