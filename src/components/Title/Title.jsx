import React from 'react'
import './Title.css'

const Title = ({ para, head }) => {
    return (
        <div className='title'>
            <p>{para}</p>
            <h2>{head}</h2>
        </div>
    )
}

export default Title
