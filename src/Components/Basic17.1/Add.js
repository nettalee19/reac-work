import React, { Component } from 'react'

export default class Add extends Component {
    state={
        id: 5,
        name:'',
        img:'',
        department:'',
        age:''
    }
    
    
    sendWorker= (e) =>{
        e.preventDefault()
       this.props.addWorker({
           id: this.state.id+Math.random(), 
           name: this.state.name,
           department: this.state.department,
           age: this.state.age
        })
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.sendWorker}>
                    Add a new worker: <br/>
                    Name: <input type="text" onChange={this.handleChange} placeholder="enter name"/>

                    Department: <input type="text" onChange={this.handleChange} placeholder="enter department"/>

                    Age: <input type="number" onChange={this.handleChange}/>

                    <button type="submit" >Add</button>

                </form>


                {/* <input type="text" onChange={this.setPost} placeholder="enter name"/>
                <button onClick={this.addPerson}>Add</button> */}
            </div>
        )
    }
}
