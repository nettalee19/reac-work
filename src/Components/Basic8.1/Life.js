import React from "react"
import './style.css'

class Life extends React.Component{

    constructor(){
        super();
        this.state = {
            favoriteColor: "Blue"
        }
        this.updateN = React.createRef()
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({favoriteColor: "Orange"})
        }, 1000)
    }

    componentDidUpdate(){
        console.log("called")
        this.updateN.current.innerHTML = "the updated color is: " + this.state.favoriteColor
    }

    render(){
        return(
            <div>
                <h1>My favorite color is: {this.state.favoriteColor}</h1>
                <div ref={this.updateN}></div>
            </div>
        );
    }
}

export default Life;