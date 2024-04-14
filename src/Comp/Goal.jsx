import React,{useState} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
export default function Goal() {
  const [isAtLeastOneChecked, setIsAtLeastOneChecked] = useState(false);
  const handleCheckboxChange = () => {
    // Check if at least one checkbox is checked
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checked = false;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checked = true;
      }
    });
    setIsAtLeastOneChecked(checked);
  };
  const navigate = useNavigate()

  // Function to handle form submission
  const handleSubmit = () => {
    // Submit logic goes here
    // For now, let's just console log a message
    console.log('Form submitted!');
    navigate("/Tracker")
  };
  return (
    <div className='h-svh  w-96 border border-sky-500' style={{marginLeft: "35%"}}>
      <div><Navbar/></div>
      <h1 className='text-3xl text-center mt-12'>What are Your Goals</h1>
      <div className='flex ml-4 mt-4 h-14 w-80 border border-sky-200 p-1 rounded-lg'>
        <h1 className='text-1.5xl bg-black-300 m-2 '>Weight Loss</h1>
        <input type="checkbox" className='ml-32 relative bottom-1' onChange={handleCheckboxChange}/>
      </div><br />
      <div className='flex ml-4 mt-4 h-14 w-80 border border-sky-200 p-1 rounded-lg'>
        <h1 className='text-1.5xl bg-black-300 m-2 '>Muscle Gain</h1>
        <input type="checkbox" className='ml-32 relative bottom-1' onChange={handleCheckboxChange}/>
      </div><br />
      <div className='flex ml-4 mt-4 h-14 w-80 border border-sky-200 p-1 rounded-lg'>
        <h1 className='text-1.5xl bg-black-300 m-1 '>Flexibility  <br />and Mobility</h1>
        <input type="checkbox" className='ml-32 relative bottom-1 left-1' onChange={handleCheckboxChange}/>
      </div><br />
      <div className='flex ml-4 mt-4 h-14 w-80 border border-sky-200 p-1 rounded-lg'>
        <h1 className='text-1.5xl bg-black-300 m-2 '>General Fitness</h1>
        <input type="checkbox" className='ml-32 relative bottom-1 right-6' onChange={handleCheckboxChange}/>
      </div><br />
      <div className='flex ml-4 mt-4 h-14 w-80 border border-sky-200 p-1 rounded-lg'>
        <h1 className='text-1.5xl bg-black-300 m-1 '>Event - <br />specific training</h1>
        <input type="checkbox" className='ml-32 relative bottom-1 right-4' onChange={handleCheckboxChange}/>
      </div><br />
      <div className='flex ml-4 mt-4 h-14 w-80 border border-sky-200 p-1 rounded-lg'>
        <h1 className='text-1.5xl bg-black-300 m-1 '>Mindfulness and <br /> Mental Health</h1>
        <input type="checkbox" className='ml-32 relative bottom-1 right-4' onChange={handleCheckboxChange}/>
      </div><br />
      <button className='flex ml-5 mt-4 h-14 w-80 border border-sky-200 bg-blue-600  p-1 rounded-lg'  onClick={handleSubmit}
        disabled={!isAtLeastOneChecked}>
        <h1 className='text-white text-2xl m-2 ml-28'>Confirm</h1>
      </button>
    </div>
  )
}
