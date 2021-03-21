import React from "react"
import axios from 'axios';

class Chuck extends React.Component{

    constructor(){
        super();
        this.state = {
            joke: '',
            catagories:[],
        }
        
    }
    getCatagory = async () =>{
        const response = await axios.get('https://api.chucknorris.io/jokes/categories')
        this.setState({catagories: response.data})
    }

    getCatagoryJoke = async (e) =>{
        console.log(e.target.value)
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${e.target.value}`)
        this.setState({joke: response.data.value})
        console.log(this.state.joke)
    }

    render(){
        return(
            <>

                <select name="categories" id="" onChange={this.getCatagory}>
                    {this.state.catagories.map(value =>{
                        return <option value={value}>{value}</option>
                    })}
                </select>
                <p>{this.state.joke}</p>
                
            </>
            
        );
    }
}

export default Chuck;