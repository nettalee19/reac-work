import React, {useState} from 'react'
// import { act } from 'react-dom/test-utils';

const Info = ({items}) => {
    const text = items.text;
    const maxLength = items.maxLength;

    const[isText, setIsText] = useState(true);

    const readMore =() =>{
        setIsText(!isText)
    }

    const displayText = (text, maxLength) =>{
        return(
            <p>
                {isText ? text.slice(0, maxLength) : text}
                <span onClick={readMore}>
                    {isText ? "show more" : "show less"}
                </span>
            </p>
        )
    }

    return (
       
        <div>
            <p>{displayText(text, maxLength)}</p>
        </div>

           )
}

export default Info
