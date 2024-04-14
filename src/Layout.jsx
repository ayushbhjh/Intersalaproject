import React, { useState } from 'react'
import Navbar from './Comp/Navbar'
import Home from './Comp/Home'
import Home1 from './Comp/Home1'
import {useNavigate} from 'react-router-dom'
export default function Layout() {
  const [pagecount, setpagecount]=useState(1)
  const navigate =useNavigate()
  function handleclick(){
      setpagecount(pagecount+1);
      console.log(pagecount)
  }
  let currentPage;
  switch (pagecount) {
    case 1:
      currentPage = <Home />;
      break;
    case 2:
      currentPage = <Home1 />;
      break;
    case 3:
      // currentPage = <Signup/>;
      navigate("/Signup")
      break;
      default: 
      currentPage=<Home/>;
      break;
  }
  return (
    <div className=' h-svh  w-96  border border-sky-500 ml-[35%]'>
      <Navbar/>
      <div>
      {currentPage}
      </div>
      <div className=''>
      <button className='mt-10 ml-56 bg-sky-500 h-10 w-10 rounded-lg relative left-20' onClick={handleclick}><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  )
}
