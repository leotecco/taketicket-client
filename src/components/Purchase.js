import React from 'react'

import { Link } from 'react-router-dom'
import * as moment from 'moment';

import { Button } from './../components'

import EmojiTicketBlue from './../images/emoji-ticket-blue.svg'

const Event = ({ purchase }) => {
  return <div className="rounded w-full p-2 shadow mb-4">
    <div className="flex mb-2">
      <div className="flex items-center justify-center rounded bg-gray-200 w-24 h-24 mr-2">
        <img src={purchase.ticket.event.image} alt="Imagem do evento" className="bg-contain bg-center" />
      </div>

      <div>
        <p className="text-lg leading-tight text-blue-600 font-semibold mb-2">{purchase.ticket.event.name}</p>
        <p className="uppercase text-xs text-gray-800 font-bold mb-1">{moment(purchase.ticket.event.initialDate).format('LLLL')}</p>
        <p className="uppercase text-xs text-gray-800 font-bold mb-1">{purchase.ticket.name}</p>
        <p className="flex font-semibold">
          <img src={EmojiTicketBlue} className="uppercase text-xs text-gray-800 font-bold" alt="Ícone de ingresso" />
          {purchase.ticket.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>
    </div>

    <Link to="/">
      <Button color="blue-600" textColor="white">Detalhes</Button>
    </Link>
  </div>
}

export default Event
