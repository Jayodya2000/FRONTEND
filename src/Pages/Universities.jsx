import React from 'react'
import Cards from '../Components/Cards/Cards'
import nsbm from '../Components/Assests/campus/nsbm.jpg'
import cinec from '../Components/Assests/campus/cinec.jpg'
import sliit from '../Components/Assests/campus/sliit.jpg'
import horizon from '../Components/Assests/campus/horizon.jpg'
import sltc from '../Components/Assests/campus/sltc.jpeg'
import Esoft from '../Components/Assests/campus/Esoft.jpg'

function Universities () 
{
  return (
    <div>
       <table>
         <tr height="100">
              <td width={100}><Cards title = "NSBM Green University" img = {nsbm}/></td>
              <td width={100}><Cards title= "CINEC" img ={cinec}/></td>
              <td width={100}><Cards title = "SLIIT" img={sliit}/></td>
         </tr>
         <tr height="200">
              <td width={200}><Cards title = "HORIZON" img={horizon} /></td>
              <td width={200}><Cards title = "SLTC" img={sltc} /></td>
              <td width={200}><Cards title = "ESOFT" img={Esoft}/></td>
         </tr>
    </table>
    </div>
  )
}

export default Universities
