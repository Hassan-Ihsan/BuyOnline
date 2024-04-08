import style from './styles/Cart.module.css'; 
import { useDeleteDataMutation, useGetDataQuery,useQtyChangeMutation } from './AppState/CartSlice.jsx';
import { RotatingLines } from "react-loader-spinner";
import { useState } from 'react';
import React from 'react';


const Cart1 = () => {
    
    const { data, isLoading, error, isSuccess } = useGetDataQuery();
    const [deleteData] = useDeleteDataMutation();
    const [qtyChange] = useQtyChangeMutation();
    // { data1: deleteDataResponse, isLoading1: deleteIsLoading, error1: deleteError, isSuccess1: deleteIsSuccess }
    
    // console.log('delete',useDeleteDataMutation())
    // console.log('qty',useQtyChangeMutation())
    const [quantity,setQuantity]=useState(1);

    const handleDelete =async(id)=>{
       
        // deleteData(id);
        try {
            const res = await deleteData(id);
            // const res1 = await JSON(res);
            console.log("res",res)
          } catch (error) {
            console.error('Error deleting all resources:', error);
          }
        

    }

    const handleQtyChange =async(e, id) => {
        console.log(e,id)
        setQuantity(e)
        
        try {
            const res = await qtyChange(parseInt(e), id);
            // const res1 = await res.json();
            console.log("res",res)
          } catch (error) {
            console.error('Error ', error);
          }

        // const updatedItems = cartItems.map(item => {
        //     if (item.id === id) {
        //         return { ...item, qty: parseInt(e.target.value) };
        //     }
        //     return item;
        // });
        // setCartItems(updatedItems);
    };
    
    
        
    
   
    return (
        <div className={style.container}>
        <div className={style.cart}>
            <div className={style.cart_header}>
                <h2 style={{fontSize:"2.5rem"}}>Cart Calculation</h2>
                {/* {!isSuccess || data.length > 0 ? <button ><i class="fa-solid fa-trash"></i>Empty Cart</button>:"" } */}
            </div>
            <div className={style.cart_items}>

             { !isSuccess || data.length > 0 ? 
                <table>
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? (
                                <tr>
                                 <td colSpan={6}>
                                <div style={{textAlign:"center", padding:"1.5rem 0"}}>
                                 <RotatingLines visible={true} height="40" width="40" color="grey" strokeWidth="5" 
                                   animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} />
                               </div>
                               </td>
                                </tr>
                              )
                              : error ? (
                                <tr >
                                 <td colSpan={6}>
                                <h4 style={{textAlign:"center", color :"red",padding:"2rem 0"}}>{error.status}</h4>
                                </td>
                                </tr>

                              )

                             :( data.map(item => (
                           <tr key={item.id} > 
                                <td><button onClick={()=>handleDelete(item.id)} style={{color: ' rgb(219, 53, 53)',background:"rgb(250, 209, 209)",cursor: 'pointer' , border:"none"}}><i class="fa-solid fa-trash" style={{padding: ' 1rem'}}></i></button></td>
                                <td><img src={item.img} alt={item.name} className={style.item_img} /></td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <input type="number" value={item.qty} min="1" onChange={(e) => handleQtyChange(e.target.value, item.id)}/>
                                    
                                </td>
                                <td>${item.price * item.qty}</td>
                            </tr>
                       )))
                             }
                    </tbody>
                    <tfoot>
                       {isSuccess ? 
                       <tr>
                       <td colSpan="3">Total items in Cart : <span style={{color:" rgb(219, 53, 53)"}}>{data.length}</span></td>
                       <td colSpan="3">Total Amount : <span style={{color:" rgb(219, 53, 53)"}}>${data.reduce((total, item) => total + item.price * item.qty, 0)}</span></td>
                      </tr>:null
                       }
                        
                        
                        
                    </tfoot>
                </table>
                : <div style={{color:"gray",display:"flex",flexDirection:"column",fontSize:"3rem",padding:"4rem 0"}}><i className="fa-solid fa-cart-shopping" ></i>Cart is Empty</div>
           } 
    
            </div>
        </div>
        </div>
    );
};

export default Cart1;
