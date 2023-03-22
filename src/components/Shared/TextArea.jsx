import React from 'react'


const TextArea = ({type, label, required, name, onHandleInputChange, value}) => {
    return (
        <div className="wrapper">
            <div className="input-data">
                <textarea type={type} required={required} value={value} onChange={onHandleInputChange} name={name}></textarea>
                <div className="underline margin-adjust"></div>
                <label htmlFor={name} className="textarea-label">{label}</label>
            </div>
        </div>
    )
}

export default TextArea