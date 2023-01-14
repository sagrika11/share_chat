import React from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import { useState } from 'react';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import ReactLoading from 'react-loading';
const Login = () => {

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const email = e.target[0].value;
    const password = e.target[1].value;
   
    try {
      
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/")
      setLoading(false)
      
    } catch (err) {
      setErr(true);
      setLoading(false)
    }


  }



  return (
    <div className='formContainer'>
    <div className='formWrapper'>
    <span className='logo'>Share Chat</span>
    <span className='title'>Login</span>
     <form onSubmit={handleSubmit}>
       
        <input type = 'email' placeholder='Email'/>
        <input type = 'password' placeholder='Password'/>
        <button> {
              loading ? <ReactLoading className='loader' type="spin" color="#ffffff" height={'8%'} width={'8%'} /> : "Sign in"
            }</button>
        {err && <span>Something went wrong</span>}
     </form>
    <p>You don't have an account ?<Link to ="/register">Register</Link></p>
    </div>
    </div>
  )
}

export default Login;

