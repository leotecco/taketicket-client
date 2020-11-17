import React from 'react'

import LogoTackTicket from './../images/logo-take-ticket.svg'

import { Link, useHistory } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Form, Button, Box } from './../components'
import services from './../services'

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
  name: yup.string().required('Campo obrigatório')
})

const Register = () => {
  const history = useHistory()
  const [error, setError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      companyName: '',
      email: '',
      cpf: '',
      cnpj: '',
      password: ''
    }
  })


  const onSubmit = async ({ name, companyName, email, cpf, cnpj, type, password }) => {
    setIsLoading(true)

    try {
      await services.modules.auth.register({ name: name, companyName: companyName, email: email, cpf: cpf, cnpj: cnpj, type: type, password: password })
      alert('Cadastro realizado com sucesso')
      history.push('/login')

      setIsLoading(false)
    } catch (error) {
      console.log(error.response);
      setError(error?.response?.data?.message || 'Erro ao realizar registro! Tente novamente!')
      setIsLoading(false)
    }
  }


  return <div className="flex flex-col justify-between pt-20 pb-2 px-10 h-full">
    <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <img src={LogoTackTicket} className="w-60 mb-16" alt="Logo TakeTicket" />

        <Controller name="name" label="Nome" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.name?.message} />

        <Controller name="companyName" label="Razão Social" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.companyName?.message} />

        <Controller name="email" label="E-mail" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.email?.message} />

        <Controller name="cpf" label="CPF" className="mb-2" control={form.control} as={Form.InputCPF} error={form.errors?.cpf?.message} />

        <Controller name="cnpj" label="CNPJ" className="mb-2" control={form.control} as={Form.InputCNPJ} error={form.errors?.cnpj?.message} />

        <Controller name="type" label="Tipo de usuário" className="mb-2" control={form.control} as={Form.Select} error={form.errors?.type?.message}>
          <option value=""></option>
          <option value="P">Pariticipante</option>
          <option value="C">Empresa</option>
        </Controller>

        <Controller name="password" type="password" label="Senha" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.password?.message} />

        {error ? <Box.Error className="my-2">{error}</Box.Error> : null}

        <Button type="submit" color="blue-600" textColor="white" className="mt-12 mb-2" disabled={isLoading}>{isLoading ? 'Carregando...' : 'Increver-se'}</Button>

        <Link to="/login" className="mb-12">
          <Button>Voltar</Button>
        </Link>
      </div>

      <p className="text-sm text-gray-500 mb-4">Todos os diretos reservados © TakeTicket 2020</p>
    </form>
  </div>

}


export default Register
