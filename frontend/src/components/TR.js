import React from 'react'
import { Link } from 'react-router-dom'
const TR = ({ele,i,del}) => {
  return (
    
    <tr  >
    <th  scope="row">{i+1}</th>
    <td>{ele.name}</td>
    <td>{ele.price}</td>
    <td>{ele.category}</td>
    <td>{ele.company}</td>
  <td><Link to={'/update/'+ele._id} style={{color:"black",border:"1px solid grey"}}>Update</Link></td>
  <td><button onClick={()=>del(ele._id)} style={{color:"black",border:"1px solid grey"}}>Delete</button></td>
  </tr>
  )
}

export default TR
