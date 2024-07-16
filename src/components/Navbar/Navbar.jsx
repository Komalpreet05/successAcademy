import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar container'>
            <img className='logo' src="/images/newlogo.png" alt="logo" />
            <ul className='nav-links'>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Campus</li>
                <li>Testimonial</li>
                <li><button className='btn btn-contact'>Contact Us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar
