import React from "react";
import '../../pages/user/cart.css';
// import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removefromCart } from "../../components/redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
    const dispatch = useDispatch();
    const cartdisplay = useSelector(state => state.carts.products);
    console.log(cartdisplay);

    const removeCart = (item) =>{
        dispatch(removefromCart(item));
    }
    const buy = () => {
        toast.success('booked successfully');
    }
    return(
        <>
        <div class="cart-topnav">
        <h1>CARTS</h1>
        <a class="active" href="/dashboard">
          Dashboard
        </a>
      </div>
        {cartdisplay && cartdisplay.map((display, index) =>{
            return(
                <>
                <div class='container-fluid' key={index}>
        <div class="card mx-auto col-md-3 col-10 mt-5">
            <img class='mx-auto img-thumbnail'
               src={display.images[0]} alt=''
                width="auto" height="auto"/>
            <div class="card-body text-center mx-auto">
                <div class='cvp'>
                    <h5 class="card-title font-weight-bold">{display.title}</h5>
                    <p class="card-text">{display.price}</p>
                    <button class="btn details px-auto" onClick={() => {buy()}}>Buy Now</button><br /><ToastContainer/>
                    <button class="btn cart px-auto" onClick={() => {removeCart(index)}} >Remove from Cart</button>
                </div>
            </div>
        </div>

    </div>
                </>
            )
        })}
        </>
    )
}

export default Cart;