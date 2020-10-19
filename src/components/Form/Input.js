import React from 'react'

const Input = ({ label, className, ...rest }) => {

  return <div className="flex flex-col justify-left w-full">
    {label ? <label className="text-gray-900 font-medium">{label}</label> : null}

    <input className={`appearance-none rounded w-full border-2 px-3 py-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 ${className}`} {...rest} />
  </div>
}

export default Input
