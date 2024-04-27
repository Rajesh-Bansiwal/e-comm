import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const [set, reset] = useState(false);
  const handel = async (e) => {
    e.preventDefault();
    if(name&&price&&category&&company){
reset(false)
      let userId = JSON.parse(localStorage.getItem("user"))._id;
      let res = await fetch("http://localhost:5000/add", {
        method: "post",
        body: JSON.stringify({ name, price, category, userId, company }),
        headers: {
          "Content-Type": "application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        },
      });
      let data = await res.json();
      // console.log(data);
      if (data) {
        navigate("/");
        // localStorage.setItem("user",JSON.stringify(data))
      }
    }
    else{
      reset(true)
    }
  };
 
  return (
    <center style={{marginTop:"30px"}}>
      <main className="form-signin w-50 m-auto" >
        <form onSubmit={handel}>
          {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
          <h1 className="h3 mb-3 fw-normal">Add Data</h1>
          <div className="form-floating" style={{ marginTop: "10px" }}>
            <input
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
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter your name"
              onChange={(e) => setcompany(e.target.value)}
            />
            <label htmlFor="floatingInput">Enter Product Company</label>
          </div>
          {set&&<h3
            className="h3 mb-3 fw-normal"
            style={{ color: "red", marginTop: "10px", fontSize: "20px" }}
          >
            Please fill all fields
          </h3>}
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Add data
          </button>
        </form>
      </main>
    </center>
  );
};

export default Add;
