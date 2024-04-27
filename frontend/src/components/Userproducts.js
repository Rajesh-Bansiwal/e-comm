import React, { useEffect, useState } from 'react'

const Userproducts = () => {
    let auth=JSON.parse(localStorage.getItem("user"))._id
    let name=JSON.parse(localStorage.getItem("user")).name
    const[data,setdata]=useState([])
    useEffect(()=>{
        fun()
    },[])
    const fun=async()=>{
        let res=await fetch(`http://localhost:5000/userproducts/${auth}`)
        let result=await res.json()
        setdata(result)
        // console.log(data)
    }
  return (
 <center style={{marginTop:"30px"}}>
 <h1 style={{marginTop:"10px"}}>UserName : <span>{name.toUpperCase()}</span></h1>
<table className="table" style={{width:"50%"}}>
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope='col'>Company</th>
    </tr>
  </thead>
  <tbody>
    {data.length>0&&data.map((ele,i)=>{
        return <tr>
      <th scope="row">{i+1}</th>
      <td >{ele.name}</td>
      <td>{ele.price}</td>
      <td>{ele.category}</td>
      <td>{ele.company}</td>
    </tr>
    })
        }
  </tbody>
</table>
{data.length===0&&<h2>User have no products</h2>}
 </center>   
  )
}

export default Userproducts
