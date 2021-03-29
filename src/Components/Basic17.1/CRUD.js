import React, { Component } from 'react'
import Worker from './Worker'
// import Search from './Search'
import Style from './Style.css'
import axios from 'axios'
import Add from './Add';

export default class CRUD extends Component {
    constructor(){
        super();
        this.id = 0;

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



    // const 
    // chSearch=(event) =>{
    //     console.log(event)
    // }
    
    // deleteEvent = (index) =>{
    //     const copyWorkers = [...this.state.workers];
    //     copyWorkers.splice(index, 1);
    //     this.setState({
    //         workers: copyWorkers
    //     })
    // }

    deleteEvent=(index)=>{
        const copyWorkers= [...this.state.workers]
        copyWorkers.splice(index,1)
        this.setState({
            workers: copyWorkers
        })
    }

    // setPost= (e) =>{
    //     this.setState({
    //         name: e.target.value 
            
    //     })
    // }

    // addPerson = () =>{
    //     this.id = this.id +1;
    //     const copyWorkers = [...this.state.workers];
    //     copyWorkers.push({
    //         id: this.id,
    //         name: this.state.name
    //     })
    //     this.setState({
    //         workers: copyWorkers
    //     })
    // }

    addNewWorker= (newPerson)=>{
        // this.setState
        const newSomeone=({
            id: newPerson.id,
            name: newPerson.name,
            department: newPerson.department,
            age: newPerson.age,
        })
        const workers = [...this.state.workers]

        workers.push(newSomeone)

        this.setState({
            workers,
            newWorker: ''
        })
    }

    addWorker(){
        const newPerson={
            id: 1+Math.random(),
            name: '',
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








    render() {
        return (
            <div>
                <button onClick={() => this.addWorker()}>Add new worker</button>
                {/* <input type="text" onChange={this.setPost} placeholder="enter name"/>
                <button onClick={this.addPerson}>Add</button> */}
                <Add addWorker={this.addNewWorker}/>
                <br/>


                {/* onChange={event => chSearch(event.target.value)} */}
                <input type="text" placeholder="serach here..." /><br/> 
                {/* <Search/><br/> */}
                The Office Workers:
                {this.state.workers.map((worker,index) =>{
                    return <Worker worker={worker} key={worker.id} delete={this.deleteEvent.bind(this, index)}/>
                    
                })}


                

                {/* {this.state.workers.map(worker =>{
                    return <Add worker={worker} key={worker.id}/>
                })} */}
                {/* <button><Add/></button> */}
            </div>
        )
    }
}
