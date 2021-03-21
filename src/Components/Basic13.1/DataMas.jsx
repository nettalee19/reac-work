import React from "react"
// import axios from 'axios';
import data from './data'
import { NameDisplay } from './NameDisplay'
import { UserCard } from './UserCard'

class DataMas extends React.Component{

    constructor(){
        super();
        this.state = {
            data: data
        }
        
    }

    getNames = () =>{
        return this.state.data.map(user => user.name) 
    }
    
    getBornBefore1990 = () =>{
        return this.data.filter(user => Number(user.birthday.slice(-4)) < 1990)
    }



    render(){
        return(<>
                hello
                {
                    this.getNames().map(name => {
                        return <NameDisplay key={name} name={name}/>
                    }),
                    this.getBornBefore1990().map(user =>{
                        return <UserCard user={user}/>
                    })
                }
                
            </>
            
        );
    }
}

export default DataMas;