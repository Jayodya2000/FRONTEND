import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get New Updates On Your Email</h1>
        <p>Follow us and stay updated</p>
        <div>
            <input type="email" placeholder='Your email address'/>
            <button>Follow</button>
        </div>

    </div>
  )
}

export default Newsletter