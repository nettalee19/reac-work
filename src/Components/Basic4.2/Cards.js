import React from "react"


class Cards extends React.Component{
    constructor(props){
        super();
    }
    
    render(){
        return (
            <div className="card">
                <img src={this.props.source} alt={this.props.title}/>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
                <a href={this.props.share}>Share</a> <br/>
                <a href={this.props.explore}>Explore</a>
                
            </div>
        )

    }
}



// const Card = (props) =>{
//     return (
//         <div className="card">
//             <img src={props.source} alt={props.title}/>
//             <h2>{props.title}</h2>
//             <p>{props.desc}</p>
//             <a href={props.share}>Share</a> <br/>
//             <a href={props.explore}>Explore</a>
            
//         </div>
//     )
// }

export default Cards;