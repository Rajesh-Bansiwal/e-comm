import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const auth=localStorage.getItem("user")
  const navigate=useNavigate()
  // const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  useEffect(()=>{
    if(auth){
      navigate('/')
    }
  },[])
  const handel = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    // console.log(data);
    if(data.auth){
localStorage.setItem("user",JSON.stringify(data.result))
localStorage.setItem("token",JSON.stringify(data.auth))
navigate("/")
    }
    else{
      alert("Please enetr correct details ")
    }
  };
  return (
    <>
      <main className="form-signin w-50 m-auto">
        <form onSubmit={handel}>
          {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          {/* <div className="form-floating" style={{ marginTop: "10px" }}>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter your name"
              onChange={(e) => setname(e.target.value)}
            />
            <label htmlFor="floatingInput">Name</label>
          </div> */}
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
          <div className="form-floating" style={{ marginTop: "10px" }}>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Enter your password"
              onChange={(e) => setpass(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Login
          </button>
        </form>
      </main>
    </>
  )
}

export default Login
