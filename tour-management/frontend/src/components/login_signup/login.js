import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/login_css/login.css";
import logo from "../../assets/images/wallpaper.jpg";


const Login = () => {

  //Login hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [e_mail, setE_mail] = useState('');
  const [pass_word, setPass_word] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  const handleLoginChange = async (e) => {
    e.preventDefault();
  }
  

  const handleSubmit= (e)=>
  {
    e.preventDefault();
    console.log("harinadhbuoy");
    navigate('/dashboard');
  }


  return (
    <>
    <div class="container">
    <input type="checkbox" id="flip"></input>
    <div class="cover">
      <div class="front">
        <img src= {logo} alt=""/>
        <div class="text">
          <span class="text-1">Live Travel Explore</span>
          <span class="text-2">Let's get connected</span>
        </div>
      </div>
      {/* <div class="back">
        <img class="backImg" src="https://images.wallpapersden.com/image/download/eiffel-tower-in-autumn-france-paris-fall_a2VrbmyUmZqaraWkpJRobWllrWdpZWU.jpg" />
        <div class="text">
          <span class="text-1">Complete miles of journey <br/> with one step</span>
          <span class="text-2">Let's get started</span>
        </div>
      </div> */}
    </div>
    <div class="forms">
        <div class="form-content">
          <div class="login-form">
            <div class="title">Login</div>
          <form onSubmit={handleLoginChange}>
            <div class="input-boxes">
              <div class="input-box">
                <input type="email" value= {email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required></input>
              </div>
              <div class="input-box">
                <input type="password" value= {password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required></input>
              </div>
              <div class="text"><a href="#">Forgot password?</a></div>
              <div class="button input-box">
                <input type="submit" value="Sumbit" onClick={handleSubmit}></input>
              </div>
              <div class="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>
            </div>
        </form>
      </div>



        <div class="signup-form">
          <div class="title">Signup</div>
        <form action="#">
            <div class="input-boxes">
              <div class="input-box">
                <i class="fas fa-user"></i>
                <input type="text" value= {name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)}  required></input>
              </div>
              <div class="input-box">
                <i class="fas fa-envelope"></i>
                <input type="text" value= {e_mail} placeholder="Enter your email"  onChange={(e) => setE_mail(e.target.value)} required></input>
              </div>
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <input type="password" value= {pass_word} placeholder="Enter your password" onChange={(e) => setPass_word(e.target.value)}  required></input>
              </div>
              <div class="input-box">
                <input type="password" value= {confirm_password} placeholder="confirm password" onChange={(e) => confirm_password(e.target.value)} required></input>
              </div>
              <div class="button input-box">
                <input type="submit" value="Sumbit"></input>
              </div>
              <div class="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>
  </>
)};

export default Login;

