import React from 'react'
import './Cards.css'
const Cards = (props) => {
  return (
    
    <div className="section1">
      <div className="card">
         <div className="card-body">
             <div className="card-image">
               <img src={props.img} alt=""/>
             </div>
           <div className="card-title">
            <h3>{props.title}</h3>
           </div>
       </div>
        <div className="card-btn">
          <button >VIEW MORE</button>
        </div>
     </div>
  
  </div>
  )
}

export default Cards


