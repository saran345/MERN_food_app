import React, { useEffect, useState } from 'react'
import logo from '../logo/logo.png'
import axios from 'axios'
import './Lstyle.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faUser, faCartShopping,faHeart,faFileInvoice,faBell } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon


export default function Register() {
       
     const[uname,setUname]=useState()
     const[upass,setUpass]=useState()
      

            const tcheck=async()=>{
                const response=await axios.post('https://mernfoodapp-production.up.railway.app/login',{setUname,setUpass})
                
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
      <form method='post' onSubmit={tcheck}>
       <div>
        <img src={logo} />
       </div>
        <label>username:</label>
        <input type='text' name='uname'  onChange={(e)=> setUname(e.target.value)}
         placeholder='username' />
          <br />
         <label>password:</label>
        <input type='password' name='upass'  onChange={(e)=> setUpass(e.target.value)}
         placeholder='password' /> <br />
         <button className='lgn' type='submit'>Login</button> 
   
         <div className='wrt'>
         <h3>Not register yet? please<Link to="/register">&nbsp;register</Link></h3>
         </div>
      </form>
      </div>
   
 
   </> 
  )
}
