
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Cancel() {
    const [avatar, setAvatar] = useState([])

    const thePerson = async () =>{
        const response = await axios.get('https://randomuser.me/api/?results=1')
        console.log(response.data.results)
        setAvatar(response.data.results)
    }

    useEffect(() => {
        thePerson()
       
    }, [])
    
    return (
        <div>
            today is 31 3 2021
        </div>
    )
}





