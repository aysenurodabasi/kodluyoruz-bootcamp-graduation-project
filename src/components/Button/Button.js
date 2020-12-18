import React,{useState} from 'react'
import './Button.css'

const Button = ({onClick,role}) =>{
    return (
        <div>
            <button role={role} onClick={onClick}> Gönder </button>
        </div>
    )
}

export default Button