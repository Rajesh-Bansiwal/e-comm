import React, { useEffect, useState } from 'react'
import Userrcompo from './Userrcompo'

const User = () => {
    const[data,setdata]=useState([])
    // const[set,reset]=useState(false)
    let auth=JSON.parse(localStorage.getItem("user")).name
    // console.log(auth)
    useEffect(()=>{
fun()
// reset(true)
// check()
// console.log(check())
    },[])
//     useEffect(()=>{
// check()
//     },[set])
    const fun=async()=>{
        const res=await fetch("http://localhost:5000/users",{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
              }
        })
        const result=await res.json()
        setdata(result)
    }
    // const check=()=>{
    //     for(let i=0;i<data.length;i++){
    //         if(data[0].name===auth){
    //             reset(true)
    //         }
    //     }
    // }
  return (
   <center style={{marginTop:"30px"}}>
     <table style={{width:"50%"}} className="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
      <th>Click for user product details</th>
    </tr>
  </thead>
  <tbody>
    {data.map((ele,i)=>(
<Userrcompo key={i} ele={ele} i={i}/>
    ))
    }
  </tbody>
</table>
   </center>
  )
}

export default User
