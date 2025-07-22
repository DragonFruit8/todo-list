import React from 'react'

function TextInputWithLabel({
    elementId,
    label,
    onChange,
    ref,
    value,
}) {
  return (
    <>
        <label htmlFor={elementId}>{label}</label>
        <input  
            id={elementId}
            type='text'
            ref={ref}
            value={value}
            onChange={onChange}                
            />
    </>
  )
}

export default TextInputWithLabel