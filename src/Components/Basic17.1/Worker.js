import React, { Component } from 'react'

export default class Worker extends Component {
    // state= {name: this.props.name}
    
    render() {
        console.log(this.props.worker, 'from worker')
        return (
            <div>
                <p>{this.props.worker.name}</p>
            </div>
        )
    }
}
