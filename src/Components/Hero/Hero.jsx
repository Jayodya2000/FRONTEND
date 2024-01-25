import React from 'react'
import './Hero.css'
import '../Navbar/Navbar'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="design">
    <div className='hero'>
      <div className='hero-body'>
         <h2>Welcome to our Boarding Solution Hub! </h2>
            <p>Discover an optimized housing experience tailored to your needs.Our platform simplifies the search for accommodations near your university,
             offering a centralized information hub.Explore budget-friendly options, streamlined applications,
             and a vibrant community.
            Empower your university journey with secure and informed decisions.
            Your ideal boarding solution starts here!</p>
      </div>
          <div className='hero-latest'>
            <Link style={{ textDecoration: 'none'}}to='/universities'><button>Explore</button></Link>  
          </div>
      
   </div>
    
</section>
  )
}

export default Hero