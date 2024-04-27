import React,{useEffect, useState   } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Update = () => {
  const param=useParams()
  // console.log("update",param.id)
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  // const [set, reset] = useState(false);
  const fun=async()=>{
    let data=await fetch(`http://localhost:5000/update/${param.id}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    let res=await data.json()
    if(res){
// console.log(res.name)
setname(res.name)
setcategory(res.category)
setcompany(res.company)
setprice(res.price)
    }
  }
  useEffect(()=>{
    fun()
    // console.log("use")
  },[])
const handel=async(e)=>{
  e.preventDefault()
  let res = await fetch(`http://localhost:5000/updateproduct/${param.id}`, {
    method: "put",
    body: JSON.stringify({ name, price,category,company}),
    headers: {
      "Content-Type": "application/json",
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
  
    },
  });
  let data = await res.json();
  // console.log(data);
  if(data){
navigate("/")
// localStorage.setItem("user",JSON.stringify(data))
  }
  }
  return (
    <>
      <main className="form-signin w-50 m-auto">
        <form 
        onSubmit={handel}
        >
          {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
          <h1 className="h3 mb-3 fw-normal">Update Data</h1>
          <div className="form-floating" style={{ marginTop: "10px" }}>
            <input
            value={name}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter your name"
              onChange={(e) => setname(e.target.value)}
            />
            <label htmlFor="floatingInput">Enter Product Name</label>
          </div>
          <div className="form-floating" style={{ marginTop: "10px" }}>
            <input
            value={price}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter your name"
              onChange={(e) => setprice(e.target.value)}
            />
            <label htmlFor="floatingInput">Enter Product Price</label>
          </div>
          <div className="form-floating" style={{ marginTop: "10px" }}>
            <input
            value={category}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter your name"
              onChange={(e) => setcategory(e.target.value)}
            />
            <label htmlFor="floatingInput">Enter Product Category</label>
          </div>
          <div className="form-floating" style={{ marginTop: "10px" }}>
            <input
            value={company}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter your name"
              onChange={(e) => setcompany(e.target.value)}
            />
            <label htmlFor="floatingInput">Enter Product Company</label>
          </div>
          <button
          // onClick={handel}
            className="btn btn-primary w-100 py-2"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Update data
          </button>
        </form>
      </main>
    </>
  )
}

export default Update
