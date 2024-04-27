import React from 'react'
import {Link, useNavigate} from "react-router-dom"
const Userrcompo = ({ele,i}) => {
  const navigate=useNavigate()
    let auth=JSON.parse(localStorage.getItem("user")).name
  return (
    <tr>
      <th scope="row">{i+1}</th>
      <td>{ele.name}</td>
      <td>{ele.email}</td>
      <td style={{color:ele.name===auth?"green":"red"}}>{ele.name===auth?"Active":"Unactive"}</td>
      <td>{auth===ele.name&&<Link onClick={()=>navigate('/usersproduct')} style={{color:"black",marginLeft:"60px"}}>Click</Link>}</td>
    </tr>
  )
}

export default Userrcompo
