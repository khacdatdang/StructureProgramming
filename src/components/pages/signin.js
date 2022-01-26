import React from 'react';
import './signin.css';
import { Link } from "react-router-dom";
import { Button } from '../Layouts/Button';
import Navbar from '../HomePage/Navbar';
import {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
const LogIn = () => {
  const history = useHistory()
  const [loginInput, setLoginInput] = useState({
    email : '',
    password :''
  })

  const handleInput = e => {
    e.persist()
    setLoginInput({...loginInput, [e.target.name] : e.target.value})
  }

  const loginSubmit = e => {
    e.preventDefault()
    const data = {
      username : loginInput.username,
      password : loginInput.password
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      // Login..
          axios.post('/api/login', data).then(res => {
              if (res.data.status === 200)
              {
                  localStorage.setItem('auth_token', res.data.token);
                  localStorage.setItem('user_id', res.data.user.id);
                  swal("Success", res.data.message, "success");
                  history.push('/userprofile')
              }
          }).catch(err => {
            swal("Fail", "Wrong username or password", "error");
          })
      })
    }
  return (
    <>
    <Navbar/>
    <div className="wrapper">
      <h2 className="registerTitle">Sign In</h2>
      <form className="registerForm" onSubmit ={loginSubmit}>
        <input
          className="textInput"
          type="text"
          name="username"
          placeholder="Username"
          value = {loginInput.username}
          onChange = {handleInput}
        />

        <input
          className="textInput"
          type="password"
          name="password"
          value = {loginInput.password}
          onChange = {handleInput}
          placeholder="Password"
        />

        <Button type ="submit" >
            Continue
        </Button>
      </form>
    </div>
    </>
    
  );
};

export default LogIn;
