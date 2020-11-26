import React from 'react'
import './Navbar.css'
import Economy from '../../screens/Economy/Economy'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
function Navbar() {
  let history = useHistory();

  return (
    <div className="navbar">
      <div className="navbarTitle" onClick={()=>history.push('/')}>Haber Sitesi</div>
      {/* <div className="navbarTitle" onClick={()=>history.push('general')}>Genel</div> */}
      <div className="navbarTitle" onClick={()=>history.push('economy')}>Ekonomi</div>
      <div className="navbarTitle" onClick={()=>history.push('sport')}>Spor</div>
      <div className="navbarTitle" onClick={()=>history.push('technology')}>Teknoloji</div>
      <div className="navbarTitle" onClick={()=>history.push('magazine')}>Magazin</div>
      <div className="navbarTitle" onClick={()=>history.push('/cities')}>Şehir Haberleri</div>
    </div>
  )
}

export default Navbar
