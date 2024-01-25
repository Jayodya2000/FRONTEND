import React from 'react'
import Cards from '../Cards/Cards'
import nsbm from '../Assests/campus/nsbm.jpg'
import cinec from '../Assests/campus/cinec.jpg'
import sliit from '../Assests/campus/sliit.jpg'
import horizon from '../Assests/campus/horizon.jpg'
import sltc from '../Assests/campus/sltc.jpeg'
import Esoft from '../Assests/campus/Esoft.jpg'
import './Table.css'

function Table() {
  return (
    <div>
      <table className="table-hero">
         <tr height="100">
              <td width={100}><Cards title = "NSBM Green University" img = {nsbm}/></td>
              <td width={100}><Cards title= "CINEC" img ={cinec}/></td>
              <td width={100}><Cards title = "SLIIT" img={sliit}/></td>
         </tr>
         <tr height="100">
              <td width={200}><Cards title = "HORIZON" img={horizon} /></td>
              <td width={200}><Cards title = "SLTC" img={sltc} /></td>
              <td width={200}><Cards title = "ESOFT" img={Esoft}/></td>
         </tr>
    </table>
    </div>
  )
}

export default Table