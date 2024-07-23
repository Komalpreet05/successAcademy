import React from 'react'
import './Footer.css'

import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='footer'>
            <p className='copyright-text'><FaRegCopyright /> 2024 Success Academy. All rights reserved.</p>
            <ul>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    )
}

export default Footer
