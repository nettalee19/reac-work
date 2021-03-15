import React from "react"


const Card = (props) =>{
    return (
        <div className="card">
            <img src={props.source} alt={props.title}/>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <a href={props.share}>Share</a> <br/>
            <a href={props.explore}>Explore</a>
            
        </div>
    )
}

export default Card;