import React from "react"
import './style.css'

class Life extends React.Component{

    constructor(){
        super();
        this.state = {
            favoriteColor: "Blue"
        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({favoriteColor: "Orange"})
        }, 1000)
    }

    componentDidUpdate(){
        // this.setState({favoriteColor: "Pink"})
        console.log("called")
    }

    render(){
        return(
            <div>
                <h1>My favorite color is: {this.state.favoriteColor}</h1>
                <div id="note"></div>
            </div>
        );
    }
}

export default Life;