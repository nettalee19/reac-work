import React, { Component } from 'react'
import Worker from './Worker'
// import Search from './Search'
// import Add from './Add'
import Style from './Style.css'
import axios from 'axios'

export default class CRUD extends Component {
    constructor(){
        super();
        this.state= {
            workers: [],
            newWorker:'',
        }
    }

    getWorkers = async () =>{
        const office = await axios.get(`https://605c7a146d85de00170da501.mockapi.io/api/paper/TheOffice/`)
        // console.log(office.data)
        this.setState({workers: office.data})
        // console.log(this.state.workers)
        
    }
    componentDidMount(){
        this.getWorkers()
    }


    // getWorkers = async (e) =>{
    //     console.log(e.target.value)
    //     const office = await axios.get(`https://605c7a146d85de00170da501.mockapi.io/api/paper/TheOffice/${e.target.value}`)
    //     console.log(office)
    // }

    addWorker(){
        const newPerson={
            id: 1+Math.random(),
            department: '',
            age: Math.random()*10,

        }
        const workers = [...this.state.workers]

        workers.push(newPerson)

        this.setState({
            workers,
            newWorker: ''
        })
    }

    // const 
    // chSearch=(event) =>{
    //     console.log(event)
    // }
    

    render() {
        return (
            <div>
                {/* onChange={event => chSearch(event.target.value)} */}
                <input type="text" placeholder="serach here..." /><br/> 
                {/* <Search/><br/> */}
                The Office Workers:
                {this.state.workers.map(worker =>{
                    return <Worker worker={worker} key={worker.id}/>
                })}

                <button onClick={() => this.addWorker()}>Add new worker</button>

                {/* {this.state.workers.map(worker =>{
                    return <Add worker={worker} key={worker.id}/>
                })} */}
                {/* <button><Add/></button> */}
            </div>
        )
    }
}
