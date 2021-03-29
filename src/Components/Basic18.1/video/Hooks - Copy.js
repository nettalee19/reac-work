import React from 'react'
import Info from './Info'


const items=[
    {
        text: "hello to the entire people in the world"
    },
    {
        text: "my name is blabla and i'm blabla years olf from blabla"
    },
    {
        text: "I was born in 4567 and raised at mdslfj"
    },
    {
        text: "I work at ___ and studying ____"
    },
]

function Hooks() {
    return (
        <div>
            <br/>
            <Info items={items}/>
        </div>
    )
}

export default Hooks

