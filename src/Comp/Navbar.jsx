import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className='flex justify-between items-center px-4 py-2 '>
        <div>
          <h1 className='mr-4'>9:40</h1>
        </div>
        <div className='flex space-x-4'>
        <i class="fa-solid fa-signal"></i>
        <i class="fa-solid fa-wifi"></i>
        <i class="fa-solid fa-battery-full"></i>
        </div>
      </nav>
    </div>
  )
}
