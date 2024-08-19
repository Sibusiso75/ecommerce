// import axios from "axios"
// import {toast} from "react-toastify"
// import { Link, useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React, {useState} from "react"

function ResetPassword() {
   
    const [password, setPassword] = useState("")
    // let navigate = useNavigate()
    // let {token} = useParams()

  
    // function handleSubmit(e){
    //     e.preventDefault()
    //    axios.post(`http://localhost:5000/reset-password/${token}`, 
    //        {password}).then(response =>{
    //         if(response.data.status){
    //             toast.success("Password has been successfully updated")
    //             navigate("/login")
    //         }
    //     }).catch(err =>{
    //         console.log("Error")
    //     })
    // }
  return (
    <div style={{margin:"30px"}}>
        <h2>Reset Password</h2>
        {/* <form onSubmit={handleSubmit}> */}
       
             <label htmlFor="password">Password</label>
            <input type="password" 
            onChange={(e)=>setPassword(e.target.value)}

            placeholder='Password'/>

            <button type="submit" className="btn1">Reset</button>
            <p>Already have an account?<Link to ="/login">
                Login
            </Link></p>
        {/* </form> */}
    </div>
  )
}

export default ResetPassword