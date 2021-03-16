import react from 'react';

class Counter2 extends react.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }
    }

    upByOne = async () => {
         this.setState({counter : this.state.counter+1})
    }

    downByOne = () => {
        this.setState({
            counter : this.state.counter-1
        })
    }


    render() {
       console.log('counter2');
        return <>
            <input type={'button'} value={'-'} onClick={this.downByOne}/>
            {this.state.counter}
            <input type={'button'} value={'+'} onClick={this.upByOne}/>
        </>
    }
}

export default Counter2
