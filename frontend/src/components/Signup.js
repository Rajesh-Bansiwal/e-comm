import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const Signup = () => {
  // console.log(param.fund)
  // const[set,reset]=useState(false)
  const[data,setdata]=useState([])
  const[pass,setpas]=useState(true)
  const auth=localStorage.getItem("user")
  const navigate=useNavigate()
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  useEffect(()=>{
    // check()
    if(auth){
      navigate('/')
    }
    fun()
  },[])
  const fun=async()=>{
    const res=await fetch("http://localhost:5000/users")
    const result=await res.json()
    setdata(result)
}
const check=()=>{
    for(let i=0;i<data.length;i++){
      if(data[i].email===email){
        return false;
        // reset(true)
      }
    }
    return true;
}
 
  const handel = async (e) => {
    e.preventDefault();
    // console.log(fun())
    if(check()){

      let res = await fetch("http://localhost:5000/register", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      // console.log(data);
      if(data.auth){
  navigate("/")
  localStorage.setItem("user",JSON.stringify(data.result))
  localStorage.setItem("token",JSON.stringify(data.auth))
      
    }
    }
    else{
      alert("User already exist")
    }
  };
  return (
    <div>
      <main className="form-signin w-50 m-auto">
        <form
         onSubmit={handel}
        >
          {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
          <h1 className="h3 mb-3 fw-normal">Register</h1>
          <div className="form-floating" style={{ marginTop: "10px" }}>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter your name"
              onChange={(e) => setname(e.target.value)}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating" style={{ marginTop: "10px" }}>
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>
          <div className="form-floating" style={{ marginTop: "10px" }} onClick={()=>setpas(!pass)}>
            <input
              type={pass?"password":"text"}
              className="form-control"
              id="floatingPassword"
              placeholder="Enter your password"
              onChange={(e) => setpass(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          {/* {m&&<h3 style={{marginTop:"20px",color:"blue"}}>Please provide unique email</h3>} */}
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
};

export default Signup;
