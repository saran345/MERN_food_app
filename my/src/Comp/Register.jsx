import React, { useState } from 'react'
import logo from '../logo/logo.png'
import './Rstyle.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faUser, faCartShopping,faHeart,faFileInvoice,faBell } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

    

export default function Register() {
       
     const[uname,setUname]=useState()
     const[upass,setUpass]=useState()
     const[uemail,setUemail]=useState() 


      const tsend=async()=>{ 
        try{
          const response=await axios.post("http://127.0.0.1:5000/register",{
          username:setUname,
          email:setUemail,
          password:setUpass
        })
        alert('successfully register')
        console.log(response)
        setUname('') 
        setUpass('') 
        setUemail('')
        }catch(e){
          console.log('post error',e)
        }
        
      }

  return (
   <>
   <div className='menu'> 
    <nav className='navi'>
      <Link to='/'>
      <FontAwesomeIcon className='icon' icon={faHouse} style={{ color: '#fc5328' }} />
      </Link><br />
      <Link to='/user'>
      <FontAwesomeIcon className='icon' icon={faUser} style={{color: "#fc5328",}} />
      </Link><br />
      <Link to='/cart'>
      <FontAwesomeIcon className='icon' icon={faCartShopping} style={{ color: '#fc5328' }} />
      </Link><br />
      <Link to='#'>
      <FontAwesomeIcon className='icon'  icon={faHeart} style={{ color: '#fc5328' }} />
      </Link><br />
     <Link to='#'>
      <FontAwesomeIcon className='icon' icon={faFileInvoice} style={{ color: '#fc5328' }} />
      </Link> <br />
    </nav>
    </div>

      <div className='container'> 
      <form  method='post'  onSubmit={tsend}> 
      <div>
       <img src={logo}/>
      </div>
        <label className='label'>Username:</label> <br />
        <input type='text' name='uname'  onChange={(e)=> setUname(e.target.value)}
         placeholder='username'
         required  />
          <br />
         <label className='label'>Email:</label> <br />
        <input type='email' name='uemail'  onChange={(e)=> setUemail(e.target.value)}
         placeholder='email'  /> 
         <br />
         <label className='label'>Password:</label> <br />
        <input type='password' name='upass'  onChange={(e)=> setUpass(e.target.value)}
         placeholder='password'  /> <br />
          <br />

         <button className='bn'  type='submit' onClick={()=> alert('successfully')}>REGISTER</button>
      </form>
      </div>
      

    
      </> 
  )
  }


