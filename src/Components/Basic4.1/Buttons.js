import React from "react"


const Button = (props) =>{
    return (
        <div>
            <button style= {{fontWeight: props.wight}}>{props.text}</button>
            
        </div>
    )
}

export default Button;