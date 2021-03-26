import React, { Component } from 'react'

export default class Worker extends Component {
    // state= {name: this.props.name}
    
    render() {
        // console.log(this.props.worker, 'from worker')
        return (
            <div>
                <ul className="worker_ul">
                    <img className="worker_img" src={this.props.worker.img} alt=""/>
                    <li className="worker">Name: {this.props.worker.name}</li>
                    <li className="worker">Department: {this.props.worker.department}</li>
                    <li className="worker">Age: {this.props.worker.age}</li>
                </ul>
                {/* <p>{this.props.worker.name}</p> */}
            </div>
        )
    }
}
