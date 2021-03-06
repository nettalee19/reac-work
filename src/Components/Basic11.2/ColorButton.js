import React, { Component } from 'react';
import Button from './Button';


class ColorButton extends Component {
    state = {
        Colors:['blue','red','yellow'],
        color:''
    }
    
    
    ParentColorHandler = (e) =>{
        this.setState({
            color:e
        })
    }

    render() {
        
        return (
            <div>
                {
                    this.state.Colors.map((p,index) =>{
                        return <Button  color = {p} key = {index}  ParentColorHandler={this.ParentColorHandler}/>
                     })    
                }

                <div className={"box " + this.state.color}>

                </div>

            </div>
        )
    }

export default ColorButton;