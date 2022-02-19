import './formInput.scss';
import React from 'react'

const FormInput = (props) => {
  const [focused, setFocused] = React.useState(false)
  const {id, label, handleChange, errorMsg, ...inputProps } = props;

  const handleFocused = (e) => {
    setFocused(true)
  }

  return (
    <div className="form-input">
        <label htmlFor="">{label}</label>
        <input 
        {...inputProps}
        onChange={handleChange}
        onBlur={handleFocused}
        focused={focused.toString()}
        onFocus={() => inputProps.name === 'comfirm' && setFocused(true)}
        />
        <span>{errorMsg}</span>
    </div>
  )
}

export default FormInput