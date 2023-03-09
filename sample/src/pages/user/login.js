import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../user/login.css";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({

  username:yup
            .string()
            .required('* username is required'),
  password:yup
            .string()
            .required('* password is required')
});
function Login() {
  const [username,SetUsername] = useState("");
  const [password,SetPassword] = useState("");
  const [error, SetError] = useState("null");
  const navigate = useNavigate();
  // const tst = () => toast('login successfull');

  const { register, handleSubmit, formState: {errors} } = useForm({resolver:yupResolver(schema)});

  const onSubmit = async (data) =>{
    try {
      // data.preventDefault();
        console.log("username", username);
        console.log("password", password);
      const res =   await axios.post('https://dummyjson.com/auth/login',data
        // {
        //   username: username,
        //   password: password
        // }
        )
        .then(res => console.log(res))
        // console.log(response);
        // const token = response.data.token;
        // console.log(token)
        console.log('login successfull');
        // const tst = () => toast('login successfull');
        // toast.success('Login successful!');
        await navigate('/dashboard');
    } catch(err){
      console.log('login failed')
      // const tst2 = () => toast("login failed");
      toast.error('Login failed. Please try again.');
      console.log(err);
      SetError(err);
    }
  };

  return (
      <div className="login-container">
        <div className="login-body">
          <h2 id="login-heading">Login Here</h2>
          <div className="login-details">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="data">Username:</label>
              <input type="text" id="login-username" name="username" 
              {...register("username", { required:true, maxLength: 50 })} 
              // onChange = {(e)=>SetUsername(e.target.value)} 
              // {...register("username", { required:true, maxLength: 50 })}
              />
              <div id='emailHelp' className='form-text text-danger'>{errors.username?.message}</div>
              <label htmlFor="password">Password:  </label>
              <input type="password" id="login-password" name="password" 
              {...register("password", { required: true, maxLength: 50 })} 
              // onChange = {(e)=>SetPassword(e.target.value)} 
              // {...register("password", { required: true, maxLength: 50 })}
              />
              <div id='emailHelp' className='form-text text-danger'>{errors.password?.message}</div>
              <button   id="login-button">login</button><ToastContainer/>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;
