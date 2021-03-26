import React, { Component } from 'react'
import Worker from './Worker'
import axios from 'axios'
import Style from './Style.css'

export default class CRUD extends Component {
    constructor(){
        super();
        this.state= {
            workers: [],
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
    

    render() {
        return (
            <div>
                The Office Workers:
                {this.state.workers.map(worker =>{
                    return <Worker worker={worker} key={worker.id}/>
                })}
            </div>
        )
    }
}
