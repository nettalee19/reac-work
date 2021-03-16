import React from "react"
import './style.css'

class Box extends React.Component{

    constructor(){
        super();
        this.state = {
            
        }
        
    }

    // componentDidMount(){
    //     setTimeout(() =>{
    //         this.setState({favoriteColor: "Orange"})
    //     }, 1000)
    // }

    // componentDidUpdate(){
    //     // this.setState({favoriteColor: "Pink"})
    //     console.log("called")
    //     this.updateN.current.innerHTML = "the updated color is: " + this.state.favoriteColor
    // }

    render(){
        return(
            <div className="box">
                
            </div>
        );
    }
}

export default Box;