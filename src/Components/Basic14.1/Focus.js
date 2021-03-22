import React from "react"

class Focus extends React.Component{
    state ={}


    componentDidMount(){
    
        this.InputRef.focus()
    }

    render(){
        return <div>
            {/* hello tracy */}
            <input type="text" placeholder="hello" ref={this.InputRef}/>
        </div>
    }
}

export default Focus