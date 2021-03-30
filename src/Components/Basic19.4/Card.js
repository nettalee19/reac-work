import React from 'react'

function Card({name, age, img}) {
    return (
        <div>
            <img src={img} alt=""/>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default Card
