import React from "react";
import "../../pages/user/dashboard.css";
import { useState, useEffect } from "react";
import axios from "axios";

function DashBoard() {
  const [products, setProducts] = useState(null);
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
  return (
    <>
      <div class="dashboard-topnav">
        <h1>PRODUCTS</h1>
        <a class="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="/cart">Cart</a>
      </div>
      {products &&
        products.map((product, index) => {
          return (
            <>
              <div class="wrapper">
                <div class="product-img">
                  <img src={product.images[0]}/>
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
                    <button type="button">Add to Carts</button>
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
