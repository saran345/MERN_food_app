import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Cart.css'
import {Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faUser, faCartShopping,faHeart,faFileInvoice,faBell } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';


export default function Cart() {
       
       const [cat,setCat]=useState([])
       const [count,setCount]=useState(0)

       useEffect(()=>{
         const fetchData=async()=>{
          try{
            const response=await axios.get("https://mernfoodapp-production.up.railway.app/gcart")
            setCat([...cat,...response.data])
            console.log("data fetched successfully..!")
          }catch(err){
            console.log("error occur while fetching",err)
          }
         }
         fetchData()
 
       },[])
       const removed=async(id)=>{
        try{
          await axios.delete(`https://mernfoodapp-production.up.railway.app/delete/${id}`)
          const response = await axios.get('https://mernfoodapp-production.up.railway.app/gcart');
            setCat(response.data);
          console.log("data removed successfully")
        }catch(err){
        console.log('error occur while deleting...!',err)
       }
      }
     const measure=cat.length
      
  return (
    <>
    <div className='dblock'>
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
    <div className='block'>
             <ul>
             {cat.map((s) => (
                  <li key={s._id}>
                     <div className='c1'>
                    <img className='mong' src={s.image} />
                    <h2 className='d-name'>{s.name}</h2>
                    <p className='d-price'>₹{s.price}</p>
                    <div className='count'>
                      <button onClick={()=>setCount(count -1)}>-</button>{count}<button onClick={()=>setCount(count +1)}>+</button>
                    </div>
                     <div className='del'>
                     <button onClick={()=> removed(s._id)}>&#x1F5D1;</button>
                     </div>
                     </div>
                   </li>
                ))}
            </ul>
      </div>
      <div className='dark'>
        <h2 >TOTAL PRICE:</h2>
        <hr />
        <br />
      <h3 className='s1'>TOTAL QUANTITIY&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;{measure}</h3>
      <h3 className='s1'> AMOUNT&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;{cat.reduce((sum, s) => sum + (s.price), 0)}</h3>
      <h3 className='s1' >DELIVERY FEE:  0</h3> <br />
      <hr/>
      <h3 className='s1'>TOTAL AMOUNT&nbsp;&nbsp;:&nbsp;&nbsp;{cat.reduce((sum, s) => sum + (s.price), 0)}</h3>
      <hr />
    </div>
    <div>
    <button className='qwer'>Proceed To Pay</button>
    </div>
    </div>
    </>
  )
}
