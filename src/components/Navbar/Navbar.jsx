import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from "react-scroll"

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100 ? setSticky(true) : setSticky(false)
        })
    }, [])
    return (
        <nav className={`navbar container ${sticky ? "darkNav" : ""}`}>
            <img className='logo' src="/images/newlogo.png" alt="logo" />
            <ul className='nav-links'>
                <li>
                    <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to='program' smooth={true} offset={-260} duration={500}>Program</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link>
                </li>
                <li>
                    <Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link>
                </li>
                <li>
                    <Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonials</Link>
                </li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn btn-nav'>Contact Us</Link></li>
            </ul>
            <img src="/images/menu-icon.png" alt="" className='menu-icon'  />
        </nav>
    )
}

export default Navbar
