import React from 'react';
import './signin.css';
import { Link } from "react-router-dom";
import { Button } from '../Layouts/Button';

const initialState = {
  email: '',
  password: '',
};

function signin () {

  return (
    <div className="wrapper">
      <h2 className="registerTitle">Sign In</h2>
      <form className="registerForm">
        <input
          className="textInput"
          type="text"
          name="email"
          placeholder="Email"
        />

        <input
          className="textInput"
          type="password"
          name="password"
          placeholder="Password"
        />

    <Link to = '/findtalent' >
        <Button>
            Continue
        </Button>
    </Link>
      </form>
    </div>
  );
};

export default signin;
