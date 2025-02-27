import React from 'react'
import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";


function Sidebar() {
  return (
    <>
    <div className="lg:w-64 bg-gray-900 shadow-lg md:hidden sm:hidden lg:block  text-gray-200 min-h-screen ">
      <ul className="py-4 mt-20">
        <Link to="/">
          <li className="px-8 py-4 hover:bg-violet-600 flex items-center gap-3">
            <RiDashboardLine className="h-7 w-7" /> AddReview
          </li>
        </Link>
        <Link to="movie">
          <li className="px-8 py-4 hover:bg-violet-600 flex items-center gap-3">
            <AiOutlineAppstoreAdd className="h-7 w-7" />
            Add Movie
          </li>
        </Link>
        <Link to="genre">
          <li className="px-8 py-4 hover:bg-violet-600 flex items-center gap-3">
            <BsListCheck className="h-7 w-7" />
            Genre
          </li>
        </Link>
      </ul>
    </div>
    </>
  )
}

export default Sidebar