import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import './signin.css';
import Navbar from '../HomePage/Navbar';
import { useHistory } from 'react-router';
const Register = () => {
  const history = useHistory();
  const [registerInput, setRegister] = useState({
    username : '',
    email : '',
    password :'',
    phone : '',
    password_confirmation : '',
  })

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
      // })
    });
    

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
          placeholder="UserName"
          value = {registerInput.username}
          onChange={handleInput}
        />
        {/* <span> {registerInput.error_list.name} </span> */}
      

        <input
          className="textInput"
          type="text"
          name="email"
          placeholder="Email"
          value = {registerInput.email}
          onChange={handleInput}
        />
        {/* <span> {registerInput.error_list.email} </span> */}

        <input
          className="textInput"
          type="text"
          name="phone"
          placeholder="Phone Number"
          value = {registerInput.phone}
          onChange={handleInput}
        />
        {/* <span> {registerInput.error_list.tel} </span> */}


        <input
          className="textInput"
          type="password"
          name="password"
          placeholder = "Password"
          value = {registerInput.password}
          onChange={handleInput}
        />
        {/* <span> {registerInput.error_list.password} </span> */}

        <input
          className="textInput"
          type="password"
          name="password_confirmation"
          placeholder = "Password"
          value = {registerInput.password_confirmation}
          onChange={handleInput}
        />
        {/* <span> {registerInput.error_list.password} </span> */}
          
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
