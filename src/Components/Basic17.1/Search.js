import React, { Component } from 'react'

export default class Serach extends Component {
    
    searchCh(){
        console.log("hello")
    }
    
    render() {
        return (
            <div>
                <input type="text" placeholder="search for a cha" onChange={() =>this.searchCh()}/>
            </div>
        )
    }
}
