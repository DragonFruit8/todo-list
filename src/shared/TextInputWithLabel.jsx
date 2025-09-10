
function TextInputWithLabel({
    elementId,
    label,
    ref,
    value,
    onChange,
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