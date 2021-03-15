import React from "react"
import './style.css'

// class Hide extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             myBox: true
//         }
//     }

    
//     toggle = () => {
//         if (this.state.myBox) {
//             this.setState({ myBox: false })
//         }
//         else if (!this.state.myBox) {
//             this.setState({ myBox: true })
//         }
//     }

//     render(){
//         if (this.state.myBox) {
//             return (
//                 <div>
//                     <input type={"button"} value={"Click Here"} onClick={this.toggle}/>
//                     <div className="box"></div>
//                 </div>
//             )
//         } 
//         else if (!this.state.myBox) {
//             return (
//                 <div>
//                     <input type={"button"} value={"Click Here"} onClick={this.toggle}/>
//                     <div ></div>
//                 </div>
//             )
//         }
//     }
// }


// export default Hide;


class Hide extends React.Component{

    constructor(){
        super();
        this.state = {
            toggle:true
        }
    }

    render(){
        return(
            <div>
                {
                  this.state.toggle ? <div className="box"></div> : null
                }
                <button onClick={ () => {this.setState({toggle:!this.state.toggle})}}>Toggle Me</button>
            </div>
        );
    }
}

export default Hide;