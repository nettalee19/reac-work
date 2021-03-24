import React from "react"
import axios from 'axios';

export default class Avatar extends React.Component{

    constructor(){
        super();
        this.state = {
            avatars: [],
        }
        
    }

    getAvatars = async() =>{
        const response = await axios.get('https://randomuser.me/api/?results=10')
        this.setState({people: response.data.results.map(user=>{
            return({
                name: user.name.first + user.name.last,
                avatar: user.picture.large

            })
        })})
        
    }
    

    render(){
        return(
            <>

            hellonett trac6
            

                
            </>
            
        );
    }
}
