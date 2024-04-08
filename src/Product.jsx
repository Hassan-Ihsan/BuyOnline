import React, { useState } from 'react';
import style from "../src/styles/Product.module.css";
import Items from "./components/Items.jsx";
// import { trendingProduct } from "./DATA/db.json";
import { RotatingLines } from "react-loader-spinner";
import { useEffect } from 'react';
// import { GlobalContext } from './context/Provider';
import { useDispatch, useSelector } from "react-redux";
import { getTrendingData } from "./AppState/TrendingProductsSlice.jsx";
import { getNewArrivalData } from "./AppState/NewArrivalProductSlice.jsx";


const Product = () => {
  // const {dispatch,pureData} = GlobalContext();
  // const update =()=>{
  //   dispatch({
  //     type:"PURE-DATA",
  //     payload:services,
  //   })
  // };

  // useEffect(()=> update());
  const dispatch = useDispatch();
  const trendingProductData = useSelector((state) => state.trendProduct.trendingProduct);
  const error1 = useSelector((state) => state.trendProduct.error);
  const isLoading1 = useSelector((state) => state.trendProduct.isLoading);
  const {newArrivalProduct,error,isLoading}=useSelector((state)=>state.newArrivalPro)
  

  const initialState = useSelector((state) => state.search);

  // console.log("state",initialState )
  
  const [trendingData,setTrendingData]=useState([])
  const [newData,setNewData]=useState([])
  

const filter=(name)=>{
  const filterItem=trendingProductData.filter((item)=>{
    return item.category===name
  })
  setTrendingData(filterItem);

  const filterItem1=newArrivalProduct.filter((item)=>{
    return item.category===name
  })
  setNewData(filterItem1);

}
const searchFilter=(searchName)=>{
  const filterItem=trendingProductData.filter((item)=>{
    return(
     item.category.toLowerCase().includes(searchName.toLowerCase()),
     item.name.toLowerCase().includes(searchName.toLowerCase())
    )
  })
  setTrendingData(filterItem);

  const filterItem1=newArrivalProduct.filter((item)=>{
    return (
    item.category.toLowerCase().includes(searchName.toLowerCase()),
    item.name.toLowerCase().includes(searchName.toLowerCase())
    )
  })
  setNewData(filterItem1);

}

  useEffect(() => {
    setNewData(newArrivalProduct || []);
    setTrendingData(trendingProductData || []);
  }, [newArrivalProduct, trendingProductData]);

  useEffect(() => {
    // dispatch( setTrndingProduct(services));
    dispatch(getTrendingData());
    dispatch(getNewArrivalData());

  }, [dispatch]);
  useEffect(() => {
    searchFilter(initialState)
  },[initialState]);

  return (
    <div className={style.outerContainer}>
      <h1 style={{ textAlign: "center", paddingBottom: "3rem ", color: "black" }}>
        Our Products
      </h1>
      <div className={style.btn}>
      <button onClick={()=>filter("Laptop")}>Laptops</button>
      <button onClick={()=>filter("Tablet")}>Tablets</button>
      <button onClick={()=>filter("Mobile")}>Mobiles</button>
      <button onClick={()=>filter("HeadPhone")}>HeadPhoes</button>
      <button onClick={()=>{setTrendingData(trendingProductData);setNewData(newArrivalProduct)}}>All</button>
    
      
      </div>
      <h2 className={style.h2} style={{ fontSize: "3rem", color: "black" }}>
        Trending Products
      </h2>
      <div className={style.container}>
        {isLoading1 ? (
          <div style={{width:"100vw",textAlign:"center"}}>
           <RotatingLines visible={true} height="40" width="40" color="grey" strokeWidth="5" 
             animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} />
         </div>
        )
         : error1 ? (
          <h2 style={{width:"100vw",textAlign:"center",color :"red",padding:"0 3rem"}}>{error1} <br/><span style={{color:"gray"}}>Note:Sorry! this is dynamically data fatching useing rtk async-thunk and rtk query so plese <br/>clone this pro from github in your local system and run this command for runnig json server and seeing the products and carts <br/>"npm run dev" and "npx json-server --watch ./src/DATA/db.json "</span></h2>
          
        )
        : trendingData.length === 0 ? (
          <h2 style={{width:"100vw",textAlign:"center",color :"red"}}>Not Available</h2>
          
        )
         : (
          trendingData.map((data, index) => <Items data={data} key={index} />)
        )}
      </div>
      {/* ********************************** */}
      <h2 className={style.h2} style={{ fontSize: "3rem" }}>
        New Arrivals
      </h2>
      <div className={style.container}>
      {isLoading ? (
          <div style={{width:"100vw",textAlign:"center"}}>
           <RotatingLines visible={true} height="40" width="40" color="grey" strokeWidth="5" 
             animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} />
         </div>
        )
         :error ? (
          <h2 style={{width:"100vw",textAlign:"center",color :"red",padding:"0 3rem"}}>{error}</h2>
        ) 
        // : newData.length === 0 ? (
        //   <h2 style={{width:"100vw",textAlign:"center",color :"red"}}>Not Available</h2>
           
        // ) 
        : (
          newData.map((data, index) => <Items data={data} key={index} />)
        )}

        {/* {
          pureData1.map((data, index) => {
          return <ServicePro data={data} key={index} />;
        })} */}
      </div>
    </div>
  );
};

export default Product;
// <div style={{border:"2px solid green"}}> </div>