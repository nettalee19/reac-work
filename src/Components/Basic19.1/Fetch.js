import React, { useState, useEffect } from 'react'  //imrse
import axios from 'axios'

function Fetch() {
    // movies = ["hello", "good", "bye"]
    const [showMovie, setShowMovie] = useState([])
    
    useEffect(() =>{
        const someMovies = async () =>{
            const movies = await axios.get('https://swapi.dev/api/films/1/')
            console.log(movies.data)
            setShowMovie(movies.data)
        }
        someMovies()
    }, [])

    return (
        <div>
            {/* {
                showMovie.map((m) =>{
                    return <div>{m}</div>
                })

            } */}
            
        </div>
    )
}

export default Fetch
