import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Card';

export default function Chuck() {
    const [avatar, setAvatar] = useState([])
    
    const listPeople = async() =>{
        const response = await axios.get('https://randomuser.me/api/?results=10')
        console.log(response.data.results)
        setAvatar(response.data.results)

    }

    useEffect(() =>{
        listPeople()
    }, [])

    return (
        <div>
            {avatar.map((p, index) =>{
                return <Card 
                key={index} 
                name={p.name.first + ' ' + p.name.last} 
                age={p.dob.age}
                img={p.picture.medium}/>
            })}
        </div>
    )
}


