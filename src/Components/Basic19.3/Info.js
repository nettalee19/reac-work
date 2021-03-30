import React from 'react'

function Info(author, time, title, url ) {
    return (
        <div>
            <fieldset>
                <legend>{author}</legend>
                <p>{title}</p>
                <a href={url}>click here</a>
                <p><small>{time}</small></p>
            </fieldset>
        </div>
    )
}

export default Info
