import {Link } from 'react-router-dom'
// import '../styles/button.css';
import style from '../styles/HomeSection.module.css';
import { Typewriter } from 'react-simple-typewriter'
// import { useSelector,dispatch } from 'react-redux';
import React from 'react';






const HomeSection = () => {
  
  return (
   
     <div className={ style.grid_tow_colum}>
      <div className={style.home_data}>
      <div className={style.home_content}>
        <h3 className={style.home_top_para}>Starting at <span style={{color:"blue"}}>$99.00</span></h3>
        <h1 className={style.home_heading}>The Best Products <br /> Collection {new Date().getFullYear()}</h1>
        <h3 className={style.home_top_para}>The Best Online Shop of <span style={{ color: 'blue',  }}>
          <Typewriter
            words={['Laptops', 'Tablets ', 'Mobiles ' , 'HeadPhones ']}
            loop={0}
            cursor
            // cursorStyle='|'
            typeSpeed={20}
            deleteSpeed={30}
            // delaySpeed={2000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span></h3>
        
        <p className={style.home_para}>Exclusive offer <span style={{color:"red"}}>-10%</span> off this week. </p>
  
        
         {/* <div className={style.email}><i className="fa-solid fa-envelope"></i> : <span>HassanIhsan349@gmail.com</span></div>
         <div className={style.whatsapp}><i className="fa-brands fa-square-whatsapp"></i> : <span>+923005076705</span></div> */}
         <Link className={style.link}to="/product">Shop Now</Link>
         {/* <link rel="stylesheet" href="" /> */}
         
        {/* <button className={style.btn}>
        <Link to="/contact">HIRE ME</Link>
        </button> */}
        
      </div>
      </div>
      
    <div className={style.home_img} >
    <div className={style.circle}>
    <img src="image/main.jpg" alt="" style={{width:"100%", display:"flex",alignItems:"center",justifyContent:"center" }}/>
    </div>
    </div>
      </div>
      
  )
}

export default HomeSection
