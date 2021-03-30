import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Country() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('') //string of ehat is being searched

    const listOfCounries = async() =>{
        const data = await axios.get('https://restcountries.eu/rest/v2/all')
        // console.log(data.data)
        setCountries(data.data)
       
    }

    useEffect(() =>{
        listOfCounries()
    }, [])


    const handleChange=(e) =>{
        // console.log("netta")
        // let search =[...countries].filter(c =>{
        //     console.log(c.name)
        //     c.name.includes(e.target.value)
        // })
        // console.log(search)
        // setCountries(search)
        console.log(e.target.value)
        setSearch(e.target.value)
        
            
       
    }

    const Getc = () =>{
        return countries.filter((c) =>{
            return c.name.toLowerCase().startsWith(search)
        }).map((c) => {
            return<div>{c.name}</div>
        })
    }

    return (
        <div>
            Search:<input onChange={handleChange}/>
            
           
            <Getc/>

            
            
                {
                    countries.map((c, index) =>{
                        return <div key={index}>{c.name}</div>
                    })

                }
                
           
        </div>
    )
}

export default Country
