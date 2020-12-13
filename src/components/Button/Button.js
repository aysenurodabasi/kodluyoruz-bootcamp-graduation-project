import React from 'react'
import './Button.css'

const Button = ({onClick}) =>{
    return (
        <div>
            <button onClick={onClick}> Gönder </button>
        </div>
    )
}

export default Button