import React, { useRef, useState } from 'react'


export default function Editing() {
    const [text,setText] = useState('')
    
    const focusInput = () =>{
        text.current.focus()
    }
    

    return (
        <div>
            hello
            <input ref={text} type="button" value="edit" onClick={focusInput}/>
            <div>{text}</div>
        </div>
    )
}


