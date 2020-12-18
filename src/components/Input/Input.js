import React from 'react'
import './Input.css'

const Input = ({type,placeholder,value,onChange}) =>{
    return (
        <div>
            <input type={type} value={value} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default Input