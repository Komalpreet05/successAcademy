import React from 'react'
import './Programs.css'

const Programs = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <img src="/images/program01.png" alt="program1" />
                <div className="caption">
                    <img src="images/program-icon-1.png" alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src="/images/program02.png" alt="program2" />
                <div className="caption">
                    <img src="images/program-icon-2.png" alt="" />
                    <p>Master's Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src="/images/program03.png" alt="program3" />
                <div className="caption">
                    <img src="images/program-icon-3.png" alt="" />
                    <p>Post Graduation Degree</p>
                </div>
            </div>
        </div>
    )
}

export default Programs
