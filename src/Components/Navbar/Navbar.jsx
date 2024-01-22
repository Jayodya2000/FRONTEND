import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import bodim_logo from '../Assests/bodim_logo.png'

export default function Navbar() {

  const [menu, setMenu]= useState("home");
  return (
    <div className='navbar'>
     <div className="nav-logo">
       <img src={bodim_logo} alt=''/>
       <p>BODIM HUB</p>
     </div>
     <ul className = "nav-menu" >  
       <li onClick={()=>{setMenu("home")}}> <Link style = {{ textDecoration: 'none'}} to='/'> Home</Link>{menu==="home"?<hr/>:<></>} </li>
       <li onClick={()=>{setMenu("universities")}}><Link style={{ textDecoration: 'none'}}to='/universities'>Universities</Link>{menu==="universities"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("services")}}><Link style={{ textDecoration: 'none'}} to='/services'>Services</Link>{menu==="services"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("about Us")}}><Link style={{ textDecoration: 'none'}}to='/about us'>About Us</Link>{menu==="about us"?<hr/>:<></>}</li>
       
     </ul>
     <div className="nav-login">
      <Link to='/login'> <button>Login</button></Link>

     </div>
    </div>
  )
}
