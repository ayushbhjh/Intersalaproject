import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
export default function Shedule() {
  const month = ["Jan","Feb","March","April","May","June","July","August","September","October","Novembar","December"]
  const [viewmonth,setviewmonth]=useState(month[1])
  function rightarrowclick(){
    const currentIndex = month.indexOf(viewmonth);
    const nextIndex = (currentIndex + 1) % month.length;
    setviewmonth(month[nextIndex]);
  }
  function leftarrowclick(){
    const currentIndex = month.indexOf(viewmonth);
    const nextIndex = (currentIndex - 1) % month.length;
    setviewmonth(month[nextIndex]);
  }
  const navigate = useNavigate();
  function pervious() {
    navigate("/Tracker");
  }
function gotohome(){
  navigate('/')
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
        <i
          class="fa-solid fa-angle-left mt-2 ml-2 h-8 w-8 p-2 bg-blue-100"
          onClick={pervious}
        ></i>
        <h1 className="text-3xl ml-16 mt-2 ">Workout Shedule</h1>
      </div>
      <p className="text-center mt-3">
        <i class="fa-solid fa-angle-left" onClick={leftarrowclick}> </i>  {viewmonth} 2024
          <i class="fa-solid fa-angle-right" onClick={rightarrowclick}></i>
      </p>
      <div className="flex m-2">
        <div className="h-14 w-16 bg-blue-200 p-2">
          <p className="ml-3">Sun</p>
          <h1 className="ml-5">5</h1>
        </div>
        <div className="h-14 w-16 ml-2 bg-blue-200 p-2">
          <p className="ml-3">Mon</p>
          <h1 className="ml-5">6</h1>
        </div>
        <div className="h-14 w-16 ml-2 bg-blue-200 p-2">
          <p className="ml-3">Tue</p>
          <h1 className="ml-5">7</h1>
        </div>
        <div className="h-14 w-16 ml-2 bg-blue-200 p-2">
          <p className="ml-3">Wed</p>
          <h1 className="ml-5">8</h1>
        </div>
        <div className="h-14 w-16 ml-2 bg-blue-200 p-2">
          <p className="ml-3">Thu</p>
          <h1 className="ml-5">9</h1>
        </div>
      </div>
      <div className="m-5">
        <div className="m-2">05:00 Am</div>
        <hr />
        <div className="m-2">06:00 Am</div>
        <hr />
        <div className="m-2">07:00 Am</div>
        <hr />
        <div className="m-2">08:00 Am</div>
        <hr />
        <div className="m-2">09:00 Am</div>
        <hr />
        <div className="m-2">10:00 Am</div>
        <hr />
        <div className="m-2">11:00 Am</div>
        <hr />
        <div className="m-2">12:00 pm</div>
        <hr />
        <div className="m-2">1:00 pm</div>
        <hr />
        <div className="m-2">2:00 pm</div>
        <hr />
        <div className="m-2">3:00 pm</div>
        <hr />
        <div className="m-2">4:00 pm</div><hr />
      </div>
      <div className="flex m-4 mt-4 items-center justify-around bg-blue-300 h-12">
      <i class="fa-solid fa-house " onClick={gotohome}></i>
      <i class="fa-solid fa-message"></i>
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-solid fa-camera-retro"></i>
      <i class="fa-solid fa-user"></i>
      </div>
    </div>
  );
}
