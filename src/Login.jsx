

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  return (
    <>
    <header><h1>Welcome to Our Page</h1></header>
    <div class="parent1">
            <form action={()=>{
              alert("hello!");
              navigate("/");
            }}>
            <div class="parent">
            <div class="child">
                <h1 id="one">Login</h1>
                <input type="email" id="inp" className='inp1' required placeholder="Email/ph-no"></input>
                <input type="password" id="inp" required placeholder="password"></input>
                <div class="rem">
                    <label><input type="checkbox"/>Remember Me</label>
                    <Link href="">Forgot password</Link>
                </div>
                <button id='h3'>Login</button>
                <p class="para">Are you create a new account?<a onClick={()=>{navigate("/register")}}><Link>sign up</Link></a></p>
            </div>
            </div>
            </form>
        </div>
    </>
  )
}
export default Login

