import React from "react";
import "../../pages/user/dashboard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch} from 'react-redux';
import { cartProduct, updateCart } from "../../components/redux/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DashBoard() {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const state = useSelector(state => state.carts)
  console.log(state);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log("product fetching failed");
        console.log(err);
      });
  }, []);
  const incrementCount = (item)=>{
    setCount(count+1);
    dispatch(updateCart(count));
    dispatch(cartProduct(item));
  }
  return (
    <>
      <div class="dashboard-topnav">
        <h1>PRODUCTS</h1>
        <a class="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <Link to={'/cart'}>Cart ({ state.cart})</Link>
        {/* <h2 className="text-light">{ state.cart}</h2> */}
      </div>
      {products &&
        products.map((product, index) => {
          return (
            <>
              <div class="wrapper" key={index}>
                <div class="product-img">
                  <img src={product.images[0]} alt=''/>
                </div>
                <div class="product-info">
                  <div class="product-text">
                    <h1>{product.title}</h1>
                    <h2>{product.category}</h2>
                    <h3>{product.brand}</h3>
                    <p>
                     {product.description}
                    </p>
                  </div>
                  <div class="product-price-btn">
                    <p>
                      <span>{product.price}</span>$
                    </p>
                    <button type="button" onClick={() => incrementCount(product)}>Add to Carts</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}

export default DashBoard;
