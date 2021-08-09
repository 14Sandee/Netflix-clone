import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {

    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    }, []);

    return (
        <div className={`navbar ${show && 'navbar__black'}`}>
            <div className="navbar__content">
                <Link to="/">
                    <img
                    className="navbar__logo" 
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    alt="" 
                    />
                </Link>
                
                <Link to="/profile">
                    <img
                    className="navbar__avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt=""
                    />
                </Link>
              
                
            </div>
            

        </div>
    )
}

export default Navbar
