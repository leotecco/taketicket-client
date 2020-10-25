import React from 'react'

const Error = ({ className, children }) => {
  return <div className={`bg-red-200 border-red-400 text-red-600 rounded p-4 ${className}`}>
    {children}
  </div>
}

export default Error
