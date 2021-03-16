import react from 'react';

class Counter extends react.Component {
    constructor(props) {
        console.log("constructor")
        super(props);

        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {
        console.log("[componentDidMount]")
       setTimeout(()=>{
           this.setState({counter : this.state.counter +1})
       },1500)
    }

    upByOne = async () => {
        this.setState({counter: this.state.counter + 1})
    }

    downByOne = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }


    render() {
        console.log("render")
        return <>
            <input type={'button'} value={'-'} onClick={this.downByOne}/>
            {this.state.counter}
            <input type={'button'} value={'+'} onClick={this.upByOne}/>
        </>
    }
}

export default Counter
