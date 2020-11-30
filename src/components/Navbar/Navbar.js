import React,{useState} from 'react'
import './Navbar.css'
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";

function Navbar() {
  let history = useHistory();

  return (
    <div className="navbar">
      <div className="navbarTitle" onClick={()=>history.push('/')}>Haberler</div>
      <div className="navbarTitle" onClick={()=>history.push('economy')}>Ekonomi</div>
      <div className="navbarTitle" onClick={()=>history.push('sport')}>Spor</div>
      <div className="navbarTitle" onClick={()=>history.push('technology')}>Teknoloji</div>
      <div className="navbarTitle" onClick={()=>history.push('magazine')}>Magazin</div>
    </div>
  )
}

export default Navbar
