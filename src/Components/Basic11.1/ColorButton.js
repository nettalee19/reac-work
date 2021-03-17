import React, { Component } from 'react';


class ColorButton extends Component {
    constructor(){
        super();
        this.state ={
            // colors : ["blue","red","yellow"],
            color: "",
        }
    }
    
    chooseColor = (e) => {
        this.setState({
            color: e
        })
    }

    render() {
        return (
            <div>
                <input type={'button'} onClick={this.chooseColor} value={"aa"}/>
                
                <div>The color selected is: {this.state.color}</div>
                
            </div>
        );
    }
}

export default ColorButton;