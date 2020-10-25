import React from 'react'

const Button = ({ className, children, color = 'white', textColor = 'gray-700', disabled = false, ...rest }) => {
  return <button type="button" className={`inline-flex justify-center w-full rounded-md border border-gray-300 py-2 px-4 leading-6 font-medium shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 ${className} ${disabled ? 'bg-gray-400 text-white' : `bg-${color} text-${textColor}`}`} disabled={disabled} {...rest}>
    {children}
  </button>
}

export default Button
