import React, { Component } from 'react'

export default class Serach extends Component {
    
    state= {}
    // searchCh =()=>{
    //     return <div>Hello</div>

    // }

    mySearch=(e) =>{
        console.log("hello")
    }
    
    render() {
        return (
            <input type="text" placeholder="search here" onChange={this.mySearch}/>
            // <div>
            //     <input type="text" placeholder="search by name" onChange={() =>this.searchCh()}/>
            // </div>
            // <input key="random1" placeholder={"search country"} onChange={(e) => searchCh(e.target.value)}/>
        )
    }
  
}
