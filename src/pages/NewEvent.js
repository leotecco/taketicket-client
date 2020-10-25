import React from 'react'

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button, Form } from './../components'
import { Link } from 'react-router-dom'

const schema = yup.object().shape({})

const NewEvent = () => {
  const form = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
    }
  })

  const onSubmit = (data) => {
    console.log(data);
  }

  return <div className="py-2 px-10">
    <p className="text-2xl mb-1">Novo evento</p>
    <p className="text-sm text-gray-600 leading-4 mb-4">Informe todas as informações do seu evento e também defina um banner para ele</p>

    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Controller name="name" label="Nome" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.name?.message} />
      <Controller name="initialDate" label="Data do evento" type="datetime" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.initialDate?.message} />
      <Controller name="state" label="Estado" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.state?.message} />
      <Controller name="city" label="Cidade" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.city?.message} />
      <Controller name="street" label="Evento" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.street?.message} />
      <Controller name="number" label="Número" className="mb-2" control={form.control} as={Form.Input} error={form.errors?.number?.message} />
      <Controller name="image" label="Imagem" type="file" className="mb-4" control={form.control} as={Form.Input} error={form.errors?.number?.message} />

      <Button type="submit" color="blue-600" textColor="white" className="mb-2">Cadastrar evento</Button>

      <Link to="/">
        <Button type="submit" className="mb-4">Voltar</Button>
      </Link>
    </form>

    <p className="text-sm text-gray-500">Todos os diretos reservados © TakeTicket 2020</p>
  </div>
}

export default NewEvent
