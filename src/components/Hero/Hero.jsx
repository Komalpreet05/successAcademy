import React from 'react'
import './Hero.css'
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We ensure better solutions for a better world</h1>
                <p>Our professionals are always available to assist with the problems related to any kind of programs or courses</p>
                <button className='btn explore'>Explore More <FaArrowRight /></button>
            </div>

        </div>
    )
}

export default Hero
