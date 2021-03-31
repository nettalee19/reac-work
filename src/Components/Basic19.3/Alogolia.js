import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Info from './Info'

function Alogolia() {
    const [request, setRequest] = useState([])
    const [query, setQuery] = useState('hooks')
    const [search, setSearch] = useState('')

    const algoliaApi = async() =>{
       try{
           const data = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
        //    console.log(data.data.hits)
           setRequest(data.data.hits)
       } catch(e){
            console.log('api error')
       }
    }

    useEffect(() =>{
        algoliaApi()
        console.log(request)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    const searchValue = (e) =>{
        setSearch(e.target.value)
    }

    const getNewQuery = () => {
        setQuery(search)
        //console.log(query)
    }
    
    return (
        <div>
            <h1>Alogolia Search:</h1>
            <input type="text" onChange={(e) => {searchValue(e)}}/>
            <input type="button" value="search" onClick={getNewQuery}/>
            
        {request.length === 0 ? <h1>Loading...</h1> : request.map((r) =>{
                    return <div>{r.title}</div>
                })}
            
            {/* {
                request.map((r) =>{
                    return <div>{r.title}</div>
                })
            } */}
            
            {/* {   
                request == null? 
                (<div>Loading</div>):(
                    request.map((info) =>{
                        return(
                            <Info 
                            key={info.objectID}
                            author={info.author}
                            time={info.created_at}
                            title={info.title}
                            url={info.url}
                            />

                        )
                    })

                )

            } */}
           
        </div>
    )
}

export default Alogolia
