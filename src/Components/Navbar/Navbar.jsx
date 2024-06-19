import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-indigo-900 p-4  ">
        <div className="container mx-auto flex items-center justify-between">
          <div className='flex flex-row'>
          <span class="material-symbols-outlined  text-white text-6xl">
            movie
          </span>
          <Link to="/" className="text-white text-6xl font-bold">MMR</Link>
          </div>
         
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91snUe5LX7ATz_8LJ0TeAnBMplFaoDdvlhw&s">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
          <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className="text-white px-4 py-2 block">Home</Link>
            <Link to="/reviews" className="text-white px-4 py-2 block">Reviews</Link>
            <div className="relative group">
              <button className="text-white px-4 py-2 block focus:outline-none">Menu</button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <Link to="/menu/watchguide" className="block px-4 py-2 text-white hover:bg-gray-700">Watch Guide</Link>
                <Link to="/menu/fanfavorites" className="block px-4 py-2 text-white hover:bg-gray-700">Fan Favorites</Link>
                <Link to="/menu/mostpopular" className="block px-4 py-2 text-white hover:bg-gray-700">Most Popular</Link>
                <Link to="/menu/movierelease" className="block px-4 py-2 text-white hover:bg-gray-700">Movie Release</Link>
              </div>
            </div>
            <Link to="/dashboard" className="text-white px-4 py-2 block">DashBoard</Link>
            <Link to="/trailers" className="text-white px-4 py-2 block">Trailers</Link>
            <Link to="/login" className="text-white px-4 py-2 block">Login</Link>
            <Link to="/signup" className="text-white px-4 py-2 block">Sign Up</Link>
            <div>
              <span className="material-symbols-outlined p-4 text-white">
                search
              </span>
              <span className="material-symbols-outlined p-4 text-white">
                person
              </span>
              <span className="material-symbols-outlined p-4 text-white">
                dark_mode
              </span>
            </div>
          </div>

        </div>
      </nav>





    </>
  )
}

