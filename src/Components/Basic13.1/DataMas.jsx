import React from "react"
// import axios from 'axios';
import data from './data'
import Name from './Name'
import UserCard from './UserCard'

class DataMas extends React.Component{

   state = {data}

    namesArray= () =>{
        // console.log(this.state.data.map(person => person.name))
        return this.state.data.map(person => person.name)
    }

    bornBefore1990=() =>{
        console.log((this.state.data.filter(person => (parseInt(person.birthday.split('-')[2]) < 1990))))
        return (this.state.data.filter(person => (parseInt(person.birthday.split('-')[2]) < 1990)))
    }

    // funcS = () =>{
    //     console.log(this.namesArray())
    // }

    render(){
        return<div>
            
            <h3>Names:</h3>
            {this.namesArray().map(name=>{
                return <Name name={name} key={name} />
            })}

            <h3>Cards:</h3>
            {this.bornBefore1990().map(person =>{
                return <UserCard person={person} key={person.name}/>
            })}

        </div>
            
        
    }
}

export default DataMas;