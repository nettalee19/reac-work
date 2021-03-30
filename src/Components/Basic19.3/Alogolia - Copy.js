import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Alogolia() {
    const [request, setRequest] = useState([])

    const algoliaApi = async() =>{
        // const data = await axios.get(`https://hn.algolia.com/api/v1/search?query=hooks`)
        const data = await axios.get(`https://hn.algolia.com/api/v1/search?query=${someInput}`)
        setRequest(data.data.hits)
    }

    useEffect(() =>{
        algoliaApi()
        console.log(request)
    }, [])
    
    return (
        <div>
            <h1>Alogolia Search:</h1>
            <input type="text" />
            
            {
                request.map((r) =>{
                    return <div>{r.title}</div>
                })
            }
           
        </div>
    )
}

export default Alogolia
