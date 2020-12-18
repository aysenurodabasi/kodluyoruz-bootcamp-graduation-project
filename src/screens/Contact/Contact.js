import React,{useState} from 'react'
import './Contact.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

function Contact() {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [clicked,setClicked] = useState(false);


  return (
    <div className="content"> 
        <div className="title">Bize Yazın</div>
        <div className="row"><Input type="text" placeholder="Ad Soyad" value={name} onChange={(e)=>setName(e.target.value)}/></div>
        <div className="row"><Input type="text"  placeholder="Konu" value={topic} onChange={(e)=>setTopic(e.target.value)}/></div>
        <div><textarea style={{height: 100}} placeholder="Mesajınızı Yazın.." name="message" row= "10" cols="50" value={message} onChange={(e)=>setMessage(e.target.value)}/></div>
        <div><Button role={"button"} name={name} onClick={()=>setClicked(true)} /></div> 
        {clicked && name && message && <div role="alert" id="alert">{name}, mesajınız alınmıştır.</div>}
    </div>
  )
}

export default Contact
