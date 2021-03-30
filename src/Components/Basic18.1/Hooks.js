import React from 'react'
import Info from './Info'


const items=
    {
        // text1: "Lorem ipsum dolor sit amet",
        text: "consectetur adipisicing elit. Vitae aspernatur culpa ipsum deserunt perspiciatis omnis debitis molestiae quam molestias dolores.",
        maxLength: 15
    }


function Hooks() {
    return (
        <div>
            <Info items={items}/>
        </div>
    )
}

export default Hooks

