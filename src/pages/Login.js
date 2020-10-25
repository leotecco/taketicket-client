import React from 'react'

import { Link, useHistory } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthContext } from '../contexts';
import { Form, Button, Box } from './../components'
import services from './../services'
import LogoTackTicket from './../images/logo-take-ticket.svg'

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
})

const Login = () => {
  const history = useHistory()
  const authContext = React.useContext(AuthContext.Context)
  const [error, setError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async ({ email, password }) => {
    setIsLoading(true)

    try {
      const response = await services.modules.auth.login({ email, password })

      window.localStorage.setItem('token', response.data.token)

      authContext.setUser(response.data.person)

      history.push('/dashboard')

      setIsLoading(false)
    } catch (error) {
      console.log(error.response);
      setError(error?.response?.data?.message || 'Erro ao realizar login! Tente novamente!')
      setIsLoading(false)
    }
  }

  return <div className="flex flex-col justify-between py-20 px-10 h-full">
    <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
      <img src={LogoTackTicket} className="w-60 mb-16" alt="Logo TakeTicket" />

      <Controller name="email" label="E-mail" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.email?.message} />

      <Controller name="password" label="Senha" type="password" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.password?.message} />

      {error ? <Box.Error className="my-2">{error}</Box.Error> : null}

      <Button type="submit" color="blue-600" textColor="white" className="mt-12 mb-2" disabled={isLoading}>{ isLoading ? 'Carregando...' : 'Entrar'}</Button>

      <Link to="/register" className="mb-4">
        <Button type="button">Inscrever-se</Button>
      </Link>
    </form>

    <p className="text-sm text-gray-500">Todos os diretos reservados © TakeTicket 2020</p>
  </div>
}

export default Login
