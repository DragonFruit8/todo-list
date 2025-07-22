

function TextInputWithLabel({
    elementId, 
    label,
    ref, 
    onChange,
    value}) {
  return (
    <>
        <label htmlFor={elementId}>{label}</label>
            <input 
                id={elementId} 
                type="text"
                ref={ref}
                value={value}
                onChange={onChange}
                />
    </>
  )
}

export default TextInputWithLabel