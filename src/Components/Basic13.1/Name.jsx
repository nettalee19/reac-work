// import React from 'react'

// export class NameDisplay extends React.Component{
    
//     render(){
//         return<div>
//             <p>{this.props.name}</p>
//         </div>
//     }
// }


  
import React from 'react'

export default class Name extends React.Component {
    state = {name : this.props.name}

    render() {
        return <>
            <p>{this.state.name}</p>
            {/* <p>{this.props.name}</p> */}
        </>
    }
}
