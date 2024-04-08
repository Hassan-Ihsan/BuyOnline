// npx json-server --watch ./src/DATA/db.json --port 8000

import style from '../src/styles/header.module.css';
import  { useEffect, useState } from 'react';
import {useGetDataQuery } from './AppState/CartSlice.jsx';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from './AppState/SearchSlice.jsx';


const Header = () => {
const dispath = useDispatch()
  const [user,setUser]=useState("")
  const [search1,setSearch1]=useState("")
  // console.log(search)
  
  const { data, isSuccess } = useGetDataQuery();
  const navigate = useNavigate();
  const logout =()=>{
    let result = confirm("Want to Logout?");
    if (result==true) {
      localStorage.clear("user")
      navigate("/login")
    } else {
     return false;
    }
    
  }
  const extractUserName = (email) => {
    if (!user || !user.email) {
      return ''; 
    }
    const splitEmail = email.split('@');
    var username = splitEmail[0];
    username = username.replace(/\d+/g, '');
    // console.log(username)
    return username;
    
  }
  useEffect(()=>{
    let user =JSON.parse(localStorage.getItem("user"));
    setUser(user);
  },[navigate])
  const handleInput =(e)=>{
    dispath(setSearch(e.target.value))
    setSearch1(e.target.value)
  
  }
 
   
  return (
    
<div>
    <div className={style.header}>

     <div className={style.logo}> 
     <h1>BuyOnline</h1>
     </div> 


     {user ? 
      <div className={style.search} style={{position:'relative'}}>
       <input type="text"  placeholder="Search"  value={search1} onChange={handleInput}/>
       <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', top: '50%', right: '1rem', transform: 'translateY(-50%)', fontSize:"1.5rem",color: 'blue' }}></i>
     </div>:null}
     {user ? 
     <div className={style.right}>
     <h3 className={style.username}>Welcome ,  {extractUserName(user.email)} </h3>
     <button className={style.logoutBtn} onClick={logout} >Logout</button>
     <div className={style.cart}  onClick={()=>navigate('/cart') }>
     <i className="fa-solid fa-cart-shopping" ></i>
     {isSuccess ? <p>{data.length}</p> :null}
     </div>
    
     </div>:null}
     
    
    
    </div>
    </div>
  
    
  )
}

export default Header




