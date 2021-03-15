import React from "react"

class Incr extends React.Component{
    constructor(props){
        super(props);

        //this is init.
        this.state = {
            number: 0
        }
    }

    //this is how update is made
    btnClick = ()=>{
        console.log(this.state.number++)
        this.setState({number: this.state.number++})
    }

    render(){
        return <div>
        {this.state.number}<br/>
    
        <input type={"button"} value={"Increment"} onClick={this.btnClick}/>
             
             </div>
    }
}


// const Incr = (props) =>{
//     return (
//         <div>
//             hello

//         </div>
//     )
// }

export default Incr;