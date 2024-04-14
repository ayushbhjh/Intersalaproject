import React from "react";
import Navbar from "./Navbar";
import {useNavigate} from 'react-router-dom'
export default function Tracker() {
  const navigate= useNavigate();
  function pervious(){
    navigate("/Goal")
  }
  function next(){
    navigate('/Shedule')
  }
  return (
    <div
      className="h-svh  w-96 border border-sky-500"
      style={{ marginLeft: "35%" }}
    >
      <div>
        <Navbar />
      </div>
      <div className="flex mt-3">
        <i class="fa-solid fa-angle-left mt-2 ml-2 h-8 w-8 p-2 bg-blue-100" onClick={pervious}></i>
        <h1 className="text-3xl ml-16 mt-2 ">Workout Tracker</h1>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-vector/health-infographic-template-flat-style_23-2148220503.jpg?t=st=1713105039~exp=1713108639~hmac=6a75676e73eee4f831c16c69bb83efe3ce672f997b5ac0d53e26dff0e4c29e3c&w=1800"
          alt="remote"
          className="h-56 w-80 ml-8 mt-12"
        />
      </div>
      <div className="flex h-20 w-80 m-8 p-2 bg-blue-200">
        <i class="fa-solid fa-triangle-exclamation ml-2 mt-3 text-blue-600"></i>
        <p className="ml-5">
          You've burned fewer calories than yesterday. Time to get moving!{" "}
        </p>
      </div>
      <div className="flex">
        <h1 className=" text-2xl relative left-16 mt-1">Upcoming Workout</h1>
        <p className=" m-4 ml-32" style={{ fontSize: "8px" }}>
          See More
        </p>
      </div>
      <div className="flex h-14 w-80 m-8 p-2 bg-blue-200">
        <img
          src="https://img.freepik.com/free-vector/workout-concept-illustration_114360-1148.jpg?t=st=1713108588~exp=1713112188~hmac=e9d41298197ba0384657e3310bdc54fb6ac3d3a17c8ad7c12b26b02fb357816d&w=1060"
          alt="remote"
          className="h-10 w-10 rounded-full"
        />
        <p style={{ fontSize: "12px" }} className="m-1 ml-3">
          Full Body Workout <br /> 15 Apr 3pm
        </p>
        <i class="fa-solid fa-toggle-on m-2 ml-24 text-blue-800"></i>
      </div>
      <h1 className="ml-8">What Do you do to Train</h1>
      <div className="flex h-10 w-80 ml-8 p-2 bg-blue-200">
        <p>Physical conditioning.</p>
        <img
          src="https://img.freepik.com/free-vector/workout-concept-illustration_114360-1148.jpg?t=st=1713108588~exp=1713112188~hmac=e9d41298197ba0384657e3310bdc54fb6ac3d3a17c8ad7c12b26b02fb357816d&w=1060"
          alt="remote"
          className="h-8 w-8 ml-20  rounded-full"
        />
      </div>
      <button className="h-6 w-40 ml-28 mt-2 bg-blue-900 rounded-lg" style={{fontSize:"10px", color:"white"}} onClick={next}>Daily Shedule</button>
    </div>
  );
}
