import React from 'react'

const Card = ({ data }) => {
    return (

        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={data.imgUrl} alt="" />
                    <div>
                        <h3>{data.name}</h3>
                        <span>{data.spanDesc}</span>
                    </div>
                </div>
                <p>{data.desc}</p>
            </div>
        </li>

    )
}

export default Card
