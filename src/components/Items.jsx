import  { useState } from 'react';
import StarRatings from 'react-star-ratings';
import style from '../styles/Items.module.css';
import React from 'react';
// import style from '../src/styles/services.module.css';
// import style from '../src/styles/services.module.css';
import PropTypes from 'prop-types';
import { useAddDataMutation,useGetDataQuery } from '../AppState/CartSlice';

// import {Link} from 'react-router-dom'
// import {GlobalContext } from '../context/Provider';




const Items = (props) => {
  const [addData] = useAddDataMutation();
  const { type,img,category,name,price,rating,qty,id} = props.data; 
  const { data} = useGetDataQuery();
    
  const [rating1, setRating1] = useState(rating);

  // const {name1} = GlobalContext();
const handleSubmit =(data)=>{
        console.log("helo")
        addData(data);
       
}
  const changeRating = (newRating) => {
    setRating1(newRating);
  };
  // const { name1 , pure} = GlobalContext();
  // console.log(name1)
    
  return (
        //  pure.map((data , index)=>{
        // const { img , name ,des , git , live} = data;
        // border: '2px solid aqua'
     <div className={style.card}>
     <div className={style.innerCard} style={{width:"90%", color:"white",padding:"10px 0",}}>
      <img src={img} alt="" />
       <h3 style={{textAlign:"left",width:"100%",paddingTop:"10px ",color:"gray"}} >{category}</h3>
       <h2 style={{textAlign:"left",width:"100%",padding:"10px 0 ",color:"black"}} >{name}</h2>
       <StarRatings
        rating={rating1}
        starRatedColor="#ffb21d"
        changeRating={changeRating}
        numberOfStars={5}
        name='rating'
        starDimension="2rem" 
        starSpacing="0.1rem" 
      />
      {/* <p style={{textAlign:"left",width:"100%",paddingTop:"10px",fontSize:"1rem"}}>{des}</p> */}
      <div className={style.visite}>
      <h3 style={{color:"blue"}}>${price}</h3>
      <button onClick={()=>handleSubmit({type,img,name,price,qty,id})} className={style.btn}> <i className="fa-solid fa-cart-shopping"></i>Add To Cart</button>
       

</div>

      {/* <Link className={style.link}to="/service"> <i className="fa-solid fa-cart-shopping"></i>Add To Cart</Link> */}
        {/* <div style={{fontSize:"2rem" }}>
        <Link to={git} style={{padding:"0 1rem",color:"aqua"}}><i className="fa-brands fa-gitlab"></i></Link>
        <Link to={live} style={{padding:"0 1rem",color:"aqua"}}><i className="fa-solid fa-globe"></i></Link>
       </div> */}
       
      
    </div>
    </div>

        
      ) 
}
Items.propTypes = {
    data: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
};

export default Items
