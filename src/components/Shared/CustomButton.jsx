import React from 'react'

const CustomButton = ({onClick, text, type, disabled}) => {
    return (
        <button type={type} disabled={disabled} onClick={onClick} className='uppercase border-b border-green-500 md:text-[20px] text-[16px]'>
            {text}
        </button>
    )
}

export default CustomButton