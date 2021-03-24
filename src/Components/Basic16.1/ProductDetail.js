import React, { Component } from 'react'
// import Products from './Products';
import store from './store'
import {Link} from 'react-router-dom'

export default class ProductPage extends Component {
    // state= {id: this.props.id}
    constructor(props){
        super(props);
        this.state ={
            id:  props.match.params.id,//what was sent by the father
            products: store,
        }
        
    }
    
    render() {
        return (
            <div>
               <p>{this.state.products[this.state.id-1].title}</p>
               <img src={this.state.products[this.state.id-1].imageUrl} alt=""/>
               <p>{this.state.products[this.state.id-1].price}$</p>
               <p>{this.state.products[this.state.id-1].size}</p>
               <Link to="/products">back to Products</Link>
            </div>
            

            
        )
    }
}
