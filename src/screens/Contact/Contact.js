import React,{useState} from 'react'
import './Contact.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

function Contact() {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="content"> 
        <div className="title">Bize Yazın</div>
        <div className="row"><Input placeholder="Ad Soyad" value={name} onChange={(e)=>setName(e.target.value)}/></div>
        <div className="row"><Input placeholder="Konu" value={topic} onChange={(e)=>setTopic(e.target.value)}/></div>
        <div><textarea placeholder="Mesajınızı Yazın.." value={message} onChange={(e)=>setMessage(e.target.value)} name="w3review" row= "10" cols="50"/></div>
        <div><Button onClick={()=>alert(`Sayın ${name} mesajınız alınmıştır`)}/></div>
    </div>
  )
}

export default Contact
