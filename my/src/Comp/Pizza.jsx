import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Pizza.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import logo from '../logo/logo.png'
import {Link} from 'react-router-dom'
import '../Comp/Hstyles.css'
import { faHouse,faUser, faCartShopping,faHeart,faFileInvoice,faBell } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import p from '../assets/images/p0.jpg'
import b from '../assets/images/b4.jpg'
import s from '../assets/images/s3.jpg'
import discount from '../images/qwerty.jpg'


export default function Pizza() {     
    const [data, setData] = useState([]);    
    useEffect(()=>{ 
        const fetchData=async()=>{
            try{
                const response= await axios.get("http://127.0.0.1:5000/product")
                setData([...data, ...response.data])
                console.log(response.data)

            }catch(err){  
                console.log('error occur',err)   
            }
        } 
        fetchData()
    },[])
    const click=async(product_id)=>{
        try{
            const response=await axios.post("http://127.0.0.1:5000/cart",{id:product_id})
        console.log(response.data)
        }catch(err){
            console.log('error occur',err)  
         
        }

    }

    return (
       <>
        <div >
      {/* <h2>NO ADS</h2> */}
      <img className='q' src={discount} />
     </div>
        <div className='iimg'><img src={logo} /> </div>
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
        <div>
        <div className='inp'>
           <input type='text' name='name' placeholder='try here' />
           </div>  <br />
          <div className='user'>
          <Link to='/user'>
          <FontAwesomeIcon className='icon' icon={faUser} style={{color: "#fc5328",}} />
          </Link>
          </div>
          <br />
          <div className='shop'>
          <Link to="/cart">
          <FontAwesomeIcon className='icon' icon={faCartShopping} style={{ color: '#fc5328' }} />
          </Link> 
          </div>
          <br />
          <div className='bell'>
          <Link to="">
          <FontAwesomeIcon icon={faBell} style={{ color: "#fc5328" }} />
          </Link>
          </div>
        </div>
        <div className='menu-list'>
            <div className='bb1'>
            <Link to="/pizzas"> <img src={p} /> </Link>
            <h2>PIZZAS</h2>
            </div>
            <div className='bb1'>
            <Link to='/burgers'><img src={b} /></Link>
            <h2>BURGERS</h2>
            </div>
            <div className='bb1'>
            <Link to='/snacks'><img src={s} /></Link>
            <h2>SNACKS</h2>
            </div> </div>

        <div className='arrange'>
            <ul> 
               {data.map((d) => (
                  <li key={d._id}>
                     <div className='b1'>
                    <img className='mong' src={d.image} />
                    <h2 className='d-name'>{d.name}</h2>
                    <p className='d-price'>₹{d.price}</p>
                    <button className='ltn'><FontAwesomeIcon icon={regularHeart} style={{ color: "#fc5328" }} /></button>
                    <button className='rtn' onClick={()=>click(d._id)}>+</button>
                     </div>
                   </li>
                  
                ))}
            </ul>
        </div>
       </>
    );
}
