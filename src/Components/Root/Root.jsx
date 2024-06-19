import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

function Root(props) {
    return (
        <>
            <header>

                <Navbar />
            </header>


            <Outlet />









            <footer>
                <Footer/>

            </footer>
        </>


    );
}

export default Root;