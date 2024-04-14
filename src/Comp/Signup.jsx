import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export default function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    agree: false
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (
      formData.firstname.trim() === "" ||
      formData.lastname.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      !formData.agree
    ) {
      alert("Please fill in all fields and agree to the terms.");
      return;
    }
    console.log("Form submitted:", formData);
    navigate("/Signin");
  };

  return (
    <div className="h-svh  w-96  border border-sky-500 ml-[35%]" >
      <div><Navbar/></div>
      <h1 className="ml-5 text-3xl">Create an account</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="mt-4 ml-4 border border-sky-500 h-10 w-80 p-4 bg-black-200 rounded-lg outline-none"
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <br />
        <input
          className="mt-4 ml-4 border border-sky-500 h-10 w-80 p-4 bg-black-200 rounded-lg outline-none"
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
          className="mt-4 ml-4 border border-sky-500 h-10 w-80 p-4 bg-black-200 rounded-lg outline-none"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="mt-4 ml-4 border border-sky-500 h-10 w-80 p-4 bg-black-200 rounded-lg outline-none"
          required
        />
        <br />
        <div className="flex items-center mt-5 ml-6">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <p className="ml-5 text-xs"> By proceeding, I agree to all T&C and Privacy Policy</p>
        </div>
        <button className="ml-4 mt-7 bg-sky-800 h-10 w-80 text-white" type="submit">Create a Account</button>
      </form>
      
      <div className="flex items-center mt-4">
        <div className="flex-grow h-0.5 bg-black ml-1 "></div>
        <div className="mx-4">OR</div>
        <div className="flex-grow h-0.5 bg-black mr-1"></div>
      </div>

      <div className="flex mt-4 ml-5 items-center">
        <div className="h-12 w-12 ml-28 ">
          <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="remote" />
        </div>
        <div className="h-12 w-12 ml-6">
          <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="remote" />
        </div>
      </div>

      <p className="mt-5 ml-10 text-2xl">
        already have account ? <Link to="/Signin" className="underline-offset-1">Login</Link>
      </p>
    </div>
  );
}
