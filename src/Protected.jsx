import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import React from 'react';


const Protected = (props) => {
    const navigate = useNavigate();
    const {Cmp} = props
    // const [show , setShow]=useState()
    useEffect(()=>{
      let user = localStorage.getItem('user')
    if (!user) {
      navigate("/login") 
  }
})
    
  return (
    
    <Cmp/>
    
  )
}

export default Protected
// "deploy": "gh-pages -d build",
//   "build": "vite build",