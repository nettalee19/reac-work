import React from "react"

class Button extends React.Component{
    constructor(props){
        super();
    }


    render(){
        return <div>
        <button style= {{fontWeight: this.props.weight}}>{this.props.text}</button>
        
    </div>
    }
}



// const Button = (props) =>{
//     return (
//         <div>
//             <button style= {{fontWeight: props.weight}}>{props.text}</button>
            
//         </div>
//     )
// }

export default Button;