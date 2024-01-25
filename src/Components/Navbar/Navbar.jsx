import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [menu, setMenu]= useState("home");
  const [color,setColor]=useState(false)
  const ChangeColor =() => {
    if (window.scrollY >= 60){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',ChangeColor)

  return (
    <div className={color? 'navbar navbar-bg' : 'navbar'}>
      <p>BODIM HUB</p>
     <ul className = "nav-menu" >  
       <li onClick={()=>{setMenu("home")}}> <Link style = {{ textDecoration: 'none', color:'white'}} to='/'> Home</Link>{menu==="home"?<hr/>:<></>} </li>
       <li onClick={()=>{setMenu("universities")}}><Link style={{ textDecoration: 'none', color:'white'}}to='/universities'>Universities</Link>{menu==="universities"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("services")}}><Link style={{ textDecoration: 'none', color:'white'}} to='/services'>Services</Link>{menu==="services"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("about Us")}}><Link style={{ textDecoration: 'none', color:'white'}}to='/about us'>About Us</Link>{menu==="about us"?<hr/>:<></>}</li>
     </ul>
     <div className="nav-login">
      <Link to='/login'> <button>Login</button></Link>

     </div>
    </div>
  )
}
