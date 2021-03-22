import React from "react"

class Focus extends React.Component{
    

    componentDidMount(){
        this.RefInput.focus()
    }
    

    render(){
        return <div>
            {/* hello tracy */}
            <input type="text" placeholder="hello" ref={input => {this.RefInput = input}}/>
        </div>
    }
}

export default Focus