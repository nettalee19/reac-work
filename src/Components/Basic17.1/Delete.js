import React, { Component } from 'react'

export default class Delete extends Component {
    state = {}

    deletePerson(e){
        console.log("hello")
    }
    
    render() {
        return (
            <div>
                <button onClick={this.deletePerson}>delete here</button>
            </div>
        )
    }
}
