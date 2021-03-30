import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Country() {
    const [countries, setCountries] = useState([])

    useEffect(() =>{
        const listOfCounries = async() =>{
            console.log('hello2')
            const data = await axios.get('https://restcountries.eu/rest/v2/all')
            setCountries(data.data)
        }
        listOfCounries()
    }, [])

    const handleChange=(e) =>{
        console.log("netta")
        let search =[...countries].filter(c =>{
            console.log(c.name)
            c.name.includes(e.target.value)
        })
        console.log(search)
        setCountries(search)
    }

    return (
        <div>
            Search:<input onChange={handleChange}/>
            
            <ul>
                {
                    countries.map((c, index) =>{
                        return <li key={index}>{c.name}</li>
                    })

                }
                
            </ul>
        </div>
    )
}

export default Country
