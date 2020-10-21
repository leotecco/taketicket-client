import React from 'react'

const Button = ({ className, children, color = 'white', textColor = 'gray-700', ...rest }) => {

  return <button type="button" className={`inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-${color} leading-6 font-medium text-${textColor} shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 ${className}`} {...rest}>
    {children}
  </button>
}

export default Button
