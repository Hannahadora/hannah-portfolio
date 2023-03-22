import React from 'react'


const Input = ({type, label, required, name, onHandleInputChange, value}) => {
    return (
        <div className="wrapper">
            <div className="input-data">
                <input autoComplete="off" type={type} required={required} value={value} onChange={onHandleInputChange} name={name}/>
                <div className="underline"></div>
                <label htmlFor={name}>{label}</label>
            </div>
        </div>
    )
}

export default Input;