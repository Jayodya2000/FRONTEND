import React, { useState } from 'react'
import './Registration.css'
import person from '../Assests/person.png'
import email from '../Assests/email.png'
import lock from '../Assests/lock.jpeg'


const Registration = () => {
   const [action,setAction] = useState("SIGN UP");

  return (
    <section className="form-hero">
 <div className='form-container'>
    <div className="header">
      <div className="text">{action}</div>
      <div className="underline"></div>
    </div>
    <div className="inputs">
      {action==="LOGIN"?<div></div>:<div className="input">
        <img src={person} alt=''/>
        <input type="text" placeholder="Name"/>
      </div>
      }
      {action==="LOGIN"?<div></div>:<div className="input">
        <img src={person} alt=''/>
        <select name="Select Catergory">
            <option value="Select Catergory">Select Catergory</option>
            <option value="Bodim Owener">Bodim Owner</option>
            <option value="User">User</option>
        </select>
      </div>}
      <div className="input">
        <img src={email} alt=''/>
        <input type="email" placeholder="Email"/>
      </div>
      <div className="input">
        <img src={lock} alt=''/>
        <input type="password" placeholder="Password"/>
      </div>
      
    </div>
    {action==="SIGN UP"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
    <div className="submit-container">
      <div className={action === "LOGIN"?"submit gray":"submit"} onClick={()=>{setAction("SIGN UP")}}>SIGN UP</div>
      <div className={action === "SIGN UP"?"submit gray":"submit"} onClick={()=>{setAction("LOGIN")}}>LOGIN</div>
    </div>
 </div>
 </section>
   
  )
}

export default Registration