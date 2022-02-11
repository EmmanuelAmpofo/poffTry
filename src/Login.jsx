import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

import "./loginStyle.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate()

  //Handle changes in input fields
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



//Email validation syntax
  const validateEmail = (email) => {
    const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(String(email).toLowerCase())
  };

//Check password length
  const validatePassword = (passwd, minLength) => {
    const passwordLength = passwd.length > minLength;
    return passwordLength
  }
  const handleSubmit =(e) => {
    e.preventDefault()
    const validEmail = validateEmail(email)
    const validPassword = validatePassword(password,8)
    if(validEmail && validPassword && name.trim() !== ''){
      navigation('/page1')
      setName('')
      setEmail('')
      setPassword('')
    }
    else {
      alert('Please check username, email and password')
    }
  }
  return (
    <div className="main">
      <form action="" className="formLogin" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit" className="submitBtn" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
