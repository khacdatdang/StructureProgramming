import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import './signin.css';
import { useHistory } from 'react-router';
const Register = () => {
  const history = useHistory();
  const [registerInput, setRegister] = useState({
    name : '',
    email : '',
    tel : '',
    password : '',
    address: '',
    error_list : []
  })

  const handleInput = (e) => {
    e.persist()
    setRegister({...registerInput, [e.target.name]: e.target.value})
  }

  const registerSubmit = e => {
    e.preventDefault()
  
    const data = {
      name : registerInput.name,
      email : registerInput.email,
      tel : registerInput.tel,
      password : registerInput.password,
      address : registerInput.address
    }
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/register`,data).then(res => {
        if (res.data.status === 200){
            localStorage.setItem('auth_token', res.data.token)
            localStorage.setItem('auth_name', res.data.username)
            swal("Success", res.data.message, "success")
            history.push('/signin')
        }
        else {
            setRegister({...registerInput, error_list : res.data.validation_errors})
            console.log(registerInput);
        }
      })
    });
    

    
}
  return (
    <div className="wrapper">
      <h2 className="registerTitle">Sign Up</h2>
      <form className="registerForm" onSubmit = {registerSubmit}>
        <input
          className="textInput"
          type=""
          name="name"
          placeholder="Name"
          value = {registerInput.name}
          onChange={handleInput}
        />
        <span> {registerInput.error_list.name} </span>
      

        <input
          className="textInput"
          type="text"
          name="email"
          placeholder="Email"
          value = {registerInput.email}
          onChange={handleInput}
        />
        <span> {registerInput.error_list.email} </span>

        <input
          className="textInput"
          type="tel"
          name="tel"
          placeholder="Phone Number"
          value = {registerInput.tel}
          onChange={handleInput}
        />
        <span> {registerInput.error_list.tel} </span>

        <input
          className="textInput"
          type="address"
          name="address"
          placeholder="Address"
          value = {registerInput.address}
          onChange={handleInput}
        />
        <span> {registerInput.error_list.address} </span>

        <input
          className="textInput"
          type="password"
          name="password"
          placeholder = "Password"
          value = {registerInput.password}
          onChange={handleInput}
        />
        <span> {registerInput.error_list.password} </span>
          
        <button type ="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
