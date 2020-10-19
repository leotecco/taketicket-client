import React from 'react'

import EmojiHappy from './../images/emoji-happy.svg'
import EmojiTicket from './../images/emoji-ticket.svg'

const Event = ({ date, title, category, ticket, image, className }) => {
  return <div className={`rounded-2xl h-48 shadow-xl relative overflow-hidden ${className}`} style={{ backgroundImage: `url(${image})` }}>
    <div className="bg-blue-600 bg-opacity-75 py-2 px-4 absolute bottom-0 left-0 right-0">
      <p className="uppercase text-xs text-gray-800 font-bold">{date}</p>

      <p className="text-white font-semibold mb-1">{title}</p>

      <div className="flex justify-between">
        <p className="flex text-white font-semibold">
          <img src={EmojiHappy} className="mr-1" alt="Ícone de categoria" />
          {category}
        </p>

        <p className="flex text-white font-semibold">
          <img src={EmojiTicket} className="mr-1" alt="Ícone de ingresso" />
          {ticket}
        </p>

        <p></p>
      </div>
    </div>
  </div>
}

export default Event
