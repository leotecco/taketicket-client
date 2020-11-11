import React from 'react'

import arrowDown from './../../images/arrow-down.svg'

const Select = ({ label, error, id, selectRef, className, children, ...rest }) => {
  return <div className={`flex flex-col justify-left w-full relative ${className}`}>
    {label ? <label htmlFor={id} className="text-gray-900 font-medium">{label}</label> : null}

    <select id={id} className={`relative appearance-none rounded w-full border-2 px-3 py-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5`} ref={selectRef} {...rest}>
      {children}
    </select>

    <img src={arrowDown} alt="Seta para baixo" className="absolute" style={{
      right: '10px',
      width: '20px',
      bottom: '15px',
      pointerEvents: 'none'
    }} />

    {error ? <p className="text-red-600 mt-1">{error}</p> : null}
  </div>
}

export default Select
