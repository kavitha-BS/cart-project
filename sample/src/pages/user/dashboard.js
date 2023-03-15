import React from "react";
import "../../pages/user/dashboard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartProduct, updateCart } from "../../components/redux/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from '@mui/material/Rating'

function DashBoard() {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const state = useSelector((state) => state.carts);
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
  const incrementCount = (item) => {
    setCount(count + 1);
    dispatch(updateCart(count));
    dispatch(cartProduct(item));
  };
  // toast.success('Login successful!');
  return (
    <>
      <div class="dashboard-topnav">
        <h1>PRODUCTS</h1>
        <a class="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <Link to={"/cart"}>Cart ({state.cart})</Link>
        {/* <h2 className="text-light">{ state.cart}</h2> */}
      </div>
      <div class="container py-5">
        <div class="row">
      {products &&
        products.map((product, index) => {
          return (
            <>
              <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div class="card">
                  <div class="card-body">
                    <div class="card-img-actions">
                      
                      <img
                        src={product.images[0]}
                        class="card-img img-fluid"
                        style={{objectFit: 'cover', height: '250px', width: '350px'}}
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="card-body bg-light text-center">
                    <div class="mb-2">
                      <h6 class="font-weight-semibold mb-2">
                       
                          {product.category}
                        
                      </h6>

                      <a href="#" class="text-muted" data-abc="true">
                        {product.title}
                      </a>
                    </div>

                    <h3 class="mb-0 font-weight-semibold">{product.price}</h3>

                    <div>
                    <Rating name="size-medium" defaultValue={product.rating} />
                    </div>

                    <div class="text-muted mb-3">{product.stock}available</div>

                    <button type="button" class="btn btn-primary" onClick={() => incrementCount(product)}>
                      <i class="fa fa-cart-plus mr-2"></i> Add to cart
                    </button>
                  </div>
                </div>
             </div>
            </>
          );
        })}
         </div>
              </div>
    </>
  );
}

export default DashBoard;
