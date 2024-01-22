import React from 'react'
import './Footer.css'
import bodim_logo from '../Assests/bodim_logo.png'
import facebook from '../Assests/facebook.png'
import insta from '../Assests/insta.png'
import whatsapp from '../Assests/whatsapp-icon.png'
import email from '../Assests/email.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
          <img src={bodim_logo} alt=''/>
            <p>BODIM HUB</p>
        </div>
         <ul className="footer-links">
             <li>Universities</li>
             <li>About</li>
             <li>Contact</li>
         </ul>
         <div className="footer-social-icon">
           <div className="footer-icons-container">
             <img src={whatsapp} alt=''/>
           </div>
           <div className="footer-icons-container">
             <img src={facebook} alt=''/>
           </div>
           <div className="footer-icons-container">
             <img src={insta} alt=''/>
           </div>
           <div className="footer-icons-container">
             <img src={email} alt=''/>
           </div>
         </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer