import React, { useState } from 'react'
import './Testimonial.css'
import Card from './Card'

const Testimonial = () => {
    const [index, setIndex] = useState(0);

    const testData = [
        {
            imgUrl: "/images/user-1.png",
            name: "Daman Singh",
            spanData: "New York, USA",
            desc: "accusamus a animi iure dolorum dignissimos voluptatibus fugiat recusandae quo impedit? Eos atque libero repellendus ducimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, earum dolores possimus cumque inventore "
        },
        {
            imgUrl: "/images/user-2.png",
            name: "Anonymous",
            spanData: "California, USA",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, earum dolores possimus cumque inventore accusamus a animi iure dolorum dignissimos voluptatibus fugiat recusandae quo impedit? Eos atque libero repellendus ducimus!"
        },
        {
            imgUrl: "/images/user-3.png",
            name: "Zoe",
            spanData: "Boston, USA",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, earum dolores possimus cumque inventore accusamus a animi iure dolorum dignissimos voluptatibus fugiat recusandae quo impedit? Eos atque libero repellendus ducimus!"
        },
        {
            imgUrl: "/images/user-4.png",
            name: "Aman Singh",
            spanData: "Niagara, USA",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, earum dolores possimus cumque inventore accusamus a animi iure dolorum dignissimos voluptatibus fugiat recusandae quo impedit? Eos atque libero repellendus ducimus!"
        }
    ]

    const slideForward = () => {
        if (index + 1 >= testData.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1)
            console.log(index)
        }
    }
    const slideBackward = () => {

        if (index - 1 < 0) {
            setIndex(testData.length - 1);
        }
        else {
            setIndex(index - 1);
        }

    }

    return (
        <div className='testimonial'>
            <img src="/images/next-icon.png" alt="" className='next-btn' onClick={slideForward} />
            <img src="/images/back-icon.png" alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul>
                    {/* {
                        testData.map((data, index) => {
                            return (
                                <Card data={data} key={index} />
                            )
                        })
                    } */}
                    <Card data={testData[index]} />
                </ul>
            </div>
        </div>
    )
}

export default Testimonial
