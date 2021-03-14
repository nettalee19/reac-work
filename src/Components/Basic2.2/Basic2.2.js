import React from "react"

const data = ["hello", "world"];
const number1 = 5;
const number2 =6;
const string = `“I love React!”`;

const greet = () =>{
    return (
        <div>
            {data[0]}{' '}{data[1]}
            <br></br>
            {number1} + {number2} = {(number1+number2)}
            <br></br>
            The string’s length is: {string.length};
        </div> 
    )
}

export default greet;
