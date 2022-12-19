import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    let navigate = useNavigate()

    const  submitButton = async ()=>
    {
      await fetch("http://localhost:3001/backend/login",{
        method:'post',
        body:JSON.stringify({
          "emailId" : email,
          "password" : password
        }),
        headers:{
          'Content-Type' : 'application/json'
        }
      })
        .then(res => res.json()
          .then((response) => {
            console.log(response);
            if (response.status == "200") {
              alert("Login Successful")
              navigate("/home", {state: email})
            } else {
              alert(response.message)
            }
          }))
    }

  function submitAction(e) {
    e.preventDefault()
  }


  return (
      <div className="row">
          <div className="w-50 mx-auto mt-5">
              <h1>Login</h1>
                <form onSubmit={submitAction}>
                  <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}/>
                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" 
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  <button onClick={submitButton} type="submit" className="btn btn-primary">Submit</button>
              </form>
           </div>
    </div>
  )
}

export default Login;