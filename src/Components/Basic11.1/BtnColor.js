import React, { Component } from 'react'
import ColorComp from './ColorComp'

export default class BtnColor extends Component {
    state= {
        colorArray: [`red`, `blue`, `yellow`],
        color: ''
    }

    pickColor(c){
        this.setState({color: c})
    }  
    
    
    render() {
        return (
            <div>
                {this.state.colorArray.map(color =>{
                    return <button onClick={() => {this.pickColor()}}><ColorComp color={color}  key={color}/></button> //key={colorArray.color}  onClick={() => this.pickColor()}

                })}
                this is color: <div>{this.state.color}</div>
            </div>
        )
    }
}
