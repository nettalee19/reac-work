import React, { useRef, useState, useEffect } from 'react'


export default function Editing() {
    const [text,setText] = useState(true)
    const something = useRef()
    
    useEffect(() => {
        if(!text){
            something.current.focus()
        }
    }, [text])


    const editInput = () =>{
        setText(!text)
    }

    const saveInput = () =>{
        setText(!text)
        something.current.value = ''
    }
    

    return (
        <div>
            {
                text ? <input ref={text} type="button" value="edit" onClick={editInput}/>:
                <div>
                    <input type="text" ref={something}/>
                    <input type="button" value="save" onClick={saveInput}/>
                </div>
            }
            
            <div>{text}</div>
        </div>
    )
}


