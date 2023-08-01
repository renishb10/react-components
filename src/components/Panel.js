import React from 'react'
import classNames from 'classnames'

function Panel({ children, className, ...props }) {
  const classes = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  )
  return (
    <div {...props} className={classes}>{children}</div>
  )
}

export default Panel