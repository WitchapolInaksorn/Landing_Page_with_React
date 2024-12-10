import React from 'react'

function Navbar() {
  return (
    <nav className='bg-gray-800 p-4'>
        <div className="container mx-auto flex justify-between items-center">
            <a href='#' className='text-white text-2xl font-semibold'>ReactSite</a>
            <ul className='flex space-x-4'>
                <li>
                  <a href="#" className='text-white hover:font-bold active:'> Home 
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                </li>
                <li><a href='#' className='text-white hover:font-bold'> About  </a></li>
                <li><a href="#" className='text-white hover:font-bold'> Services </a></li>
                <li><a href="#" className='text-white hover:font-bold'> Contact </a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar