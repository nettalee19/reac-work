import React, { Component } from 'react'
// import Delete from './Delete'

export default class Worker extends Component {
    // state= {name: this.props.name}
    state = {
        id: '',
        name: '',
        department: '',
        age: '',
        img: '',

    }
    
    render() {
        // console.log(this.props.worker, 'from worker')
        return (
            <div className="allPeople">
                <ul className="worker_ul">
                    <img className="worker_img" src={this.props.worker.img} alt=""/>
                    <li className="worker">Name: {this.props.worker.name}</li>
                    <li className="worker">id: {this.props.worker.id}</li>
                    <li className="worker">Department: {this.props.worker.department}</li>
                    <li className="worker">Age: {this.props.worker.age}</li>
                    {/* <li><Delete/></li> */}
                    <li><button onClick={this.props.delete}>Delete</button></li>
                    <li><button onClick={this.props.delete}>Edit</button></li>
                </ul>
                {/* <p>{this.props.worker.name}</p> */}
            </div>
        )
    }
}
