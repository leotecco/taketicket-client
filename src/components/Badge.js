import React from 'react'

const Badge = ({ component: Component = 'div', className, children, ...rest }) => {
  return <Component className={`inline-block text-sm rounded-full shadow-lg px-3 py-2 text-blue-400 font-medium uppercase ${className}`} {...rest}>{children}</Component>
}

export default Badge
