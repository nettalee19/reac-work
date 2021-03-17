import React, { Component } from 'react';


class ColorButton extends Component {
    constructor(){
        super();
        this.state ={
            Colors : ["blue", "red" ,"yellow"],
            color: " ",
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
                {this.state.Colors.map(btn => (<Button value={btn.color} choose={this.chooseColor}))}
                
                // <div>The color selected is: {this.state.color}</div>
                
            </div>
        );
    }
}

export default ColorButton;