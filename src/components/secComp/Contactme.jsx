import React from "react";
import { useState , useRef } from "react";
import './Contactme.css'
import emailjs from 'emailjs-com'



export default function Contactme(){
  const form = useRef()
  const url =" https://smtpjs.com/v3/smtp.js"
const sendMail =(e)=>{
e.preventDefault()
emailjs.sendForm("service_mtkwl8j","template_iy19ibo",form.current,"fQulfzwIo07IHmgUz").then(res=>{
  alert("Email sent successfully, I will get back to you in 24 hours!");
})



setName("")
setMail("")
setMessage("")
 }





const [name,setName]=useState("")
const [mail,setMail]=useState("")
const [message,setMessage]=useState("")


return (
    <>
    <div className="contain">
    <div className="form">
        <span> Contact Me</span>
      <form ref={form}  onSubmit={(e)=>sendMail(e)}>
      <div className="fields">
      <div className="field">
      <label htmlFor="name" className="label">NAME</label><br /><br />
     <input type="text" placeholder="FULL NAME" className="input" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      
      <div className="field">
      <label htmlFor="name" className="label">EMAIL</label><br /><br />
      <input type="text" placeholder="EMAIL" className="input" id="email" value={mail} name="email" onChange={(e)=>setMail(e.target.value)}/>
      </div>
      <div className="field">
      <label htmlFor="name" className="label">MESSAGE</label><br /><br />
      <textarea placeholder="MESSAGE" rows="10" cols="34" className="input" id="message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
      </div>
      </div>
      <div className="button"> <button type="submit" id="submit" >Submit</button></div>
     
    </form>
    
    </div>
    </div>
    </>
);

}