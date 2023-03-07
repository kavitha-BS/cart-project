import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import "../user/login.css";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
  const [username,SetUsername] = useState("");
  const [password,SetPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) =>{
    try {
      e.preventDefault();
        console.log("username", username);
        console.log("password", password);
        await axios.post('https://dummyjson.com/auth/login',{
          username: username,
          password: password
        })
        .then(res => console.log(res))
        // console.log(response);
        // const token = response.data.token;
        // console.log(token)
        console.log('login successfull');
        await navigate('/dashboard');
    } catch(error){
      console.log('login failed')
      console.log(error);
    }
  };
  return (
      <div className="login-container">
        <div className="login-body">
          <h2 id="login-heading">Login Here</h2>
          <div className="login-details">
            <form>
              <label htmlFor="data">Username:</label>
              <input type="text" id="login-username" onChange = {(e)=>SetUsername(e.target.value)} /><br/><br/><br/>
              <label htmlFor="password">Password:  </label>
              <input type="password" id="login-password" onChange = {(e)=>SetPassword(e.target.value)}/><br/><br/><br/>
              <button onClick={(e) => onSubmit(e)} id="login-button" >login</button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;
