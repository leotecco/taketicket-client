import React from 'react'

import { Link, useHistory } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button, Form, Box } from './../components'
import services from './../services'

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  initialDate: yup.string().required('Campo obrigatório'),
  state: yup.string().required('Campo obrigatório'),
  city: yup.string().required('Campo obrigatório'),
  street: yup.string().required('Campo obrigatório'),
  number: yup.string().required('Campo obrigatório'),
})

const NewEvent = () => {
  const history = useHistory()
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const form = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      initialDate: '',
      state: '',
      city: '',
      street: '',
      number: '',
      image: null
    }
  })

  const onSubmit = async ({ name, initialDate, state, city, street, number, image }) => {
    if (!image.length) {
      form.setError('image', {
        type: 'required',
        message: 'Campo obrigatório'
      })

      return
    }

    setIsLoading(true)

    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('initialDate', initialDate)
      formData.append('state', state)
      formData.append('street', street)
      formData.append('city', city)
      formData.append('number', number)
      formData.append('image', image[0])

      const response = await services.modules.events.create(formData)

      alert('Evento criado com sucesso!')

      setIsLoading(false)

      history.push(`/events/${response.data.event._id}/tickets/new`)
    } catch (error) {
      setError(error?.response?.data?.message || 'Erro ao realizar login! Tente novamente!')
      setIsLoading(false)
    }
  }

  return <div className="py-2 px-10">
    <p className="text-2xl mb-1">Novo evento</p>
    <p className="text-sm text-gray-600 leading-4 mb-4">Informe todas as informações do seu evento e também defina um banner para ele</p>

    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Controller name="name" label="Nome" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.name?.message} />
      <Controller name="initialDate" label="Data do evento" type="date" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.initialDate?.message} />
      <Controller name="state" label="Estado" className="mb-2" control={form.control} as={Form.Select} error={form.errors?.state?.message}>
        <option value=""></option>
        <option value="Acre">Acre</option>
        <option value="Alagoas">Alagoas</option>
        <option value="Amapá">Amapá</option>
        <option value="Amazonas">Amazonas</option>
        <option value="Bahia">Bahia</option>
        <option value="Ceará">Ceará</option>
        <option value="Distrito Federal">Distrito Federal</option>
        <option value="Espírito Santo">Espírito Santo</option>
        <option value="Goiás">Goiás</option>
        <option value="Maranhão">Maranhão</option>
        <option value="Mato Grosso">Mato Grosso</option>
        <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
        <option value="Minas Gerais">Minas Gerais</option>
        <option value="Pará">Pará</option>
        <option value="Paraíba">Paraíba</option>
        <option value="Paraná">Paraná</option>
        <option value="Pernambuco">Pernambuco</option>
        <option value="Piauí">Piauí</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
        <option value="Rio Grande do Sul">Rio Grande do Sul</option>
        <option value="Rio Grande do Norte">Rio Grande do Norte</option>
        <option value="Rondônia">Rondônia</option>
        <option value="Roraima">Roraima</option>
        <option value="Santa Catarina">Santa Catarina</option>
        <option value="São Paulo">São Paulo</option>
        <option value="Sergipe">Sergipe</option>
        <option value="Tocantins">Tocantins</option>
      </Controller>
      <Controller name="city" label="Cidade" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.city?.message} />
      <Controller name="street" label="Rua" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.street?.message} />
      <Controller name="number" label="Número" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.number?.message} />
      <Form.Input name="image" label="Imagem" type="file" className="mb-4" inputRef={form.register} error={form.errors?.image?.message} />

      {error ? <Box.Error className="my-2">{error}</Box.Error> : null}

      <Button type="submit" color="blue-600" textColor="white" className="mb-2" disabled={isLoading}>{isLoading ? 'Carregando...' : 'Cadastrar evento'}</Button>

      <Link to="/">
        <Button type="submit" className="mb-4">Voltar</Button>
      </Link>
    </form>

    <p className="text-sm text-gray-500 text-center">Todos os diretos reservados © TakeTicket 2020</p>
  </div>
}

export default NewEvent
