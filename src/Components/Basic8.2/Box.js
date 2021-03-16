import React from "react"
import './style.css'

class Box extends React.Component{

    constructor(props) {
        super(props)
        
        this.state = {
            size: 0
         }

    }

    componentDidMount() {
        const boxes = document.querySelectorAll('.box');
        console.log(boxes)
        setTimeout(() => {
            boxes.forEach(box => box.classList.add('box'));
        }, 1000);
        setTimeout(() => {
            boxes.forEach(box => box.classList.remove('box'));
        }, 4000);
    }

    render() {
        return (
            <div>
                <div className="box"  style={{width: this.props.size, height: this.props.size}}></div>
            </div>
        )
    }

    
}

export default Box;










// onHide(){
//     this.setState({
//         opacity: 0
//     })
// }
// onScale(){
//     this.setState({
//         scale: this.state.scale >1 ? 1  : 1.3
//     })
// }