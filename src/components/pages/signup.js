import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import './signin.css';
import Navbar from '../HomePage/Navbar';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const Register = () => {
  const history = useHistory();
  const [registerInput, setRegister] = useState({
    username : '',
    email : '',
    password :'',
    phone : '',
    password_confirmation : '',
    role : 'customer'
  })

  const [errorList, seterrorList] = useState({});

  const handleInput = (e) => {
    e.persist()
    setRegister({...registerInput, [e.target.name]: e.target.value})
  }

  const registerSubmit = e => {
    e.preventDefault()
  
    // axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/register`,registerInput).then(res => {
        console.log(res.data.status);
        if (res.data.status == 201){
            localStorage.setItem('auth_token', res.data.token)
            localStorage.setItem('user_id', res.data.id)
            swal("Success", res.data.message, "success")
            history.push('/signin')
        }
        else {
            console.log("Error");
            seterrorList(res.data.errors)
            console.log(res.data);
        }
    }).catch(err => {
      seterrorList(err.response.data.errors);
    })
    // });
    
}
  return (
  <>
    <Navbar/>
    <div className="wrapper">
      <h2 className="registerTitle">Sign Up</h2>
      <form className="registerForm" onSubmit = {registerSubmit}>
        <input
          className="textInput"
          type=""
          name="username"
          placeholder="Username"
          value = {registerInput.username}
          onChange={handleInput}
        />
        
        <small class="text-danger">
          {errorList.username}
        </small>    
      

        <input
          className="textInput"
          type="text"
          name="email"
          placeholder="Email"
          value = {registerInput.email}
          onChange={handleInput}
        />
         <small class="text-danger">
          {errorList.email}
        </small> 

        <input
          className="textInput"
          type="text"
          name="phone"
          placeholder="Phone number"
          value = {registerInput.phone}
          onChange={handleInput}
        />
         <small class="text-danger">
          {errorList.phone}
        </small> 


        <input
          className="textInput"
          type="password"
          name="password"
          placeholder = "Password"
          value = {registerInput.password}
          onChange={handleInput}
        />
         <small class="text-danger">
          {errorList.password}
        </small> 

        <input
          className="textInput"
          type="password"
          name="password_confirmation"
          placeholder = "Password"
          value = {registerInput.password_confirmation}
          onChange={handleInput}
        />
         <small class="text-danger">
          {errorList.password}
        </small> 
        <Link to = "/signin"> Have an account</Link>
        <button type ="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  </>
   
  );
};

export default Register;
