import React, { forwardRef } from 'react'



const Input = ({...props}) => {
  return (
    <>
      <input className="outline-none block rounded-sm px-2 py-1 focus:outline-none" {...props} type="text" />
    </>
  )
}

export default forwardRef(Input)
