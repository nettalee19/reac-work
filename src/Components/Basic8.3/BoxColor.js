import React, { Component } from 'react';

const colors = ['#FFC715', '#C7E568', '#17CBC9', '#FFC711', '#ED4C77']

class Box extends Component {
    constructor(){
        super();

        this.interval = null;
        this.state = { index : 0 }
    }
    

    
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ index: (this.state.index + 1) % 5 })
        }, 700);    
    }

    render() {
        return (
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: colors[this.state.index]
                }}
            >
            </div>
        );
    }
}

export default Box;