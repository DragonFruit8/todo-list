import styled from 'styled-components';
function TextInputWithLabel({
    elementId,
    label,
    onChange,
    ref,
    value,
}) {
  return (
    <>
        <label htmlFor={elementId}>{label}
        <StyledInput  
            id={elementId}
            type='text'
            ref={ref}
            value={value}
            onChange={onChange}                
            />
        </label>
    </>
  )
}

const StyledInput = styled.input`
color: darkgreen;
`;

export default TextInputWithLabel