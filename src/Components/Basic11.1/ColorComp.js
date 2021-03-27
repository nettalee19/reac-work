import React, { Component } from 'react'

export default class ColorComp extends Component {
    state= {color: this.props.color}
    
    render() {
        return (
            <div>
                {this.state.color}
                {/* {this.props.color} */}
            </div>
        )
    }
}
