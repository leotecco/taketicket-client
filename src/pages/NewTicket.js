import React from 'react'

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AuthContext } from '../contexts';
import { Button, Form, Box } from './../components'
import { Link, useHistory } from 'react-router-dom'
import services from './../services'

const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    value: yup.string().required('Campo obrigatório'),
  })

const NewTicket = () => {
  const history = useHistory()
  const authContext = React.useContext(AuthContext.Context)
  const [error, setError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
        name: '',
        value: '',
        event: ''
    }
  })

  const onSubmit = async ({name, value, event}) => {
    setIsLoading(true)

    try {
        
       await services.modules.ticket.ticket({ name: name, value: value, event: '5ebb3cb51017232443039d31' })

      console.log({name, value, event})
      alert('Cadastro realizado com sucesso')
      history.push('/dashboard')
  
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message || 'Erro ao realizar cadastro! Tente novamente!')
      setIsLoading(false)
    }
  }

  return <div className="py-2 px-10">
    <p className="text-2xl mb-1">Novo ingresso</p>
    <p className="text-sm text-gray-600 leading-4 mb-4">Informe o tipo do seu ingresso e também defina um valor para ele</p>

    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Controller name="name" label="Tipo" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.name?.message} />
      <Controller name="value"  label="Valor do Ingresso" type="number" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.value?.message} />
      {error ? <Box.Error className="my-2">{error}</Box.Error> : null}
      <Button type="submit" color="blue-600" textColor="white" className="mt-12 mb-2" disabled={isLoading}>{ isLoading ? 'Carregando...' : 'Criar ingresso'}</Button>

      <Link to="/dashboard">
        <Button type="submit" className="mb-4">Voltar</Button>
      </Link>
    

    <p className="text-sm text-gray-500">Todos os diretos reservados © TakeTicket 2020</p>
    </form>
  </div>
}

export default NewTicket
