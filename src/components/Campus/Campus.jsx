import React from 'react'
import './Campus.css'
import { FaArrowRight } from "react-icons/fa";


const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src="/images/gallery-1.png" alt="gallery1" />
                <img src="/images/gallery-2.png" alt="gallery2" />
                <img src="/images/gallery-3.png" alt="gallery3" />
                <img src="/images/gallery-4.png" alt="gallery4" />
            </div>

            <button className='btn btn-campus'>See More Here <FaArrowRight /></button>
        </div>
    )
}

export default Campus
