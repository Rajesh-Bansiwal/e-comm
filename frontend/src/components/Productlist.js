import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TR from './TR'
// import Add from './Add'

const Productlist = () => {
  // const [set,reset]=useState()
  const navigate=useNavigate()
const[data,setdata]=useState([])
useEffect(()=>{
  // console.log("use")
fun()
},[])
const fun=async()=>{
  let res=await fetch("http://localhost:5000/products",{
    headers:{
      authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
  })
  let rata=await res.json()
  // console.log(rata)
  // if(rata.length>0){                         
    

    setdata(rata)
  // }
  
  // else{
  //   alert("No products in the list")
  // }

}

const delt=async(id)=>{
let res=await fetch(`http://localhost:5000/delete/${id}`,{
  method:"delete",
  // headers:{
  //   authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
  // }
})
let ans=await res.json()
if(ans){
// navigate("/")
fun()
}
}
const gun=async(e)=>{
  let set=e.target.value
  // console.log(set)
  if(set){

    let res=await fetch(`http://localhost:5000/search/${set}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    let rata=await res.json()
    // console.log(rata)
    if(rata){
  
      setdata(rata)
    }
  }
  else{
    fun()
  }
}
  return (
  <center style={{marginTop:"10px"}}>
  <h1>E-Comm Dashboard </h1>
  {/* <form class="d-flex" role="search"> */}
        <input onChange={gun} style={{width:"35%",marginTop:"20px"}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      {/* </form> */}
    <table className="table" style={{width:"60%",marginTop:"20px"}}>
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">Company</th>
      <th scope='col'>Operation</th>
    </tr>
  </thead>
  <tbody>
    {data.length&&data.map((ele,i)=>(
     <>
     <tr  >
    <th  scope="row">{i+1}</th>
    <td>{ele.name}</td>
    <td>{ele.price}</td>
    <td>{ele.category}</td>
    <td>{ele.company}</td>
  <td><Link to={'/update/'+ele._id} style={{color:"black",border:"1px solid grey"}}>Update</Link></td>
  <td><button onClick={()=>delt(ele._id)} style={{color:"black",border:"1px solid grey"}}>Delete</button></td>
  </tr>
     </>
    
    ))
      }
  </tbody>
</table>
{data.length===0&&<h3 style={{margin:"20px",color:"blue"}}>No products found</h3>}
  </center>
  )
}

export default Productlist
