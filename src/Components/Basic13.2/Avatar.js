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
        const response = await axios.get('https://randomuser.me/')
        this.setState({people: response.data})
        // console.log({people})
    }
    

    render(){
        return(
            <>

            hellonett trac6
            

                
            </>
            
        );
    }
}
