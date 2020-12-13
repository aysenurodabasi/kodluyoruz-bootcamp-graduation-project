import React from 'react'
import './Input.css'

const Input = ({placeholder,value,onChange}) =>{
    return (
        <div>
            <input type="text" value={value} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default Input