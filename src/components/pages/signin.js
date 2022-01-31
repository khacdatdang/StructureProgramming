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

  const [errorList, seterrorList] = useState({});

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
            if (res.data.status === 200){
              localStorage.setItem('auth_token', res.data.token);
              localStorage.setItem('user_id', res.data.data.id);
              swal("Success", res.data.message, "success");
              if (res.data.data.role == "admin")
                history.push('/admin')
              else 
                history.push('/userprofile')
            }
            else {
              console.log(res.data.message);
              seterrorList({...Button,account :res.data.message})
            }
          }).catch(err => {
              seterrorList(err.response.data.errors)
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
        <small className="text-danger">
          {errorList.username}
        </small> 

        <input
          className="textInput"
          type="password"
          name="password"
          value = {loginInput.password}
          onChange = {handleInput}
          placeholder="Password"
        />
        <small className="text-danger">
          {errorList.password}
        </small> 

        <small className="text-danger">
          {errorList.account}
        </small> 
        <Link to = "/signup"> Create new account</Link>

        <Button type ="submit" >
            Continue
        </Button>
      </form>
    </div>
    </>
    
  );
};

export default LogIn;
