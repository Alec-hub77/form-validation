import './formInput.scss';
import React from 'react'

const FormInput = (props) => {
  return (
    <div className="form-input">
        <label htmlFor=""></label>
        <input 
        placeholder={props.placeholder}
        />
    </div>
  )
}

export default FormInput