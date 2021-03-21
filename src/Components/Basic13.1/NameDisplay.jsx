import React from 'react'

export class NameDisplay extends React.Component{
    state = {name: this.props.name}

    render(){
        return(<div>
            {
                console.log(this.state.name)
            }
        <div/>)
    }
}

