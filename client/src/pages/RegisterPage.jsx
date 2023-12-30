import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [redirect,setDirect]=useState(false);
    async function register(ev)
    {
        ev.preventDefault();
           const response= await fetch('http://localhost:4000/register',
            {
                method:'POST',
                body:JSON.stringify({username,password}),
                headers:{'Content-Type':'application/json'}
            });
                console.log(response)
                if(response.ok===false)
                alert('registration failed');
               else{
                setDirect(true);
               }
          
        }
            if(redirect){
              return <Navigate to={'/login'}></Navigate>
            }
      
  return (
    <div>
    <form className='register' onSubmit={register}>
        <h1>Register</h1>
      <input type="text" placeholder='username'  
      value={username} 
      onChange={ev=>setUsername(ev.target.value)} />
      <input type="password" placeholder='password'
      value={password}
      onChange={ev=>setPassword(ev.target.value)} />
      <button >Register</button>
    </form>
  
  </div>
  )
}

export default RegisterPage
