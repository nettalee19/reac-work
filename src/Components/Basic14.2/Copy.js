import React from "react"

class Copy extends React.Component{
    

    constructor(props){
        super(props)
        this.TextArea = React.createRef()
    }

    onCopy = () => {
        const tocopy = this.TextArea.current
        tocopy.select()
        document.execCommand("copy")
    }
    

    render(){
        return <div>
            <textarea name="" id="" cols="30" rows="10" ref={this.TextArea} placeholder="hello tracy"></textarea> <br/>
            <button onClick={this.onCopy}>Copy</button>
        </div>
    }
}

export default Copy