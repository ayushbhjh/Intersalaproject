import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link,useNavigate} from 'react-router-dom';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }

    // Password validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    // Clear error if validation succeeds
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // If validation succeeds, you can proceed with form submission or other actions
      console.log('Form submitted successfully');
    }
    navigate("/Goal")
  };

  return (
    <div className='h-svh  w-96 border border-sky-500' style={{marginLeft: "35%"}}>
      <div><Navbar/></div>
      <div className='m-5 '>
        <h1 className='text-3xl text-center'>Welcome Back</h1>
      </div>
      <form className='m-5' onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder='Email' 
          className='h-14 w-80 border border-blue-700 p-6 outline-none'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <div className=' flex mt-5 border border-blue-700 w-80 h-14 '>
          <input 
            type={showPassword ? "text" : "password"} // Toggle password visibility
            name="password" 
            id="pass" 
            placeholder='Password' 
            className=' p-6 outline-none w-5/6'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> 
          <i className="fa-solid fa-eye-slash relative top-5" onClick={togglePasswordVisibility}></i>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <p className='underline'>Forgot Password</p><br />
        <button type="submit" className='ml-1 mt-3 h-12 w-80 bg-sky-800'>Sign in</button>
      </form>
      <div className="flex items-center mt-8">
        <div className="flex-grow h-0.5 bg-black ml-1 "></div>
        <div className="mx-4">OR</div>
        <div className="flex-grow h-0.5 bg-black mr-1"></div>
      </div>

      <div className="flex mt-10 ml-5 items-center">
        <div className="h-12 w-12 ml-28 ">
          <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="remote" />
        </div>
        <div className="h-12 w-12 ml-6">
          <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="remote" />
        </div>
      </div>
      <p className="mt-8 ml-8 text-1xl">
        Don't have an Account? <Link to="/SignUp" className="underline-offset-1 underline text-blue-300">Create a account</Link> 
      </p>
    </div>
  );
}
