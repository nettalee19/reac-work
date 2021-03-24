import React, { Component } from 'react'
import store from './store'
import ProductDetail from "./ProductDetail"
import {BrowserRouter, Link, Route} from 'react-router-dom'

export default class Products extends Component {
    // state= {store}
    constructor(props){
        super(props);
        this.state = {
            products: [], 
        }
    }

    componentDidMount(){
        this.setState({products: store})
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div><h3>On Sale:</h3>
                    {this.state.products.map(((product)=>{
                        return <Link to={`/products/${product.id}`} key={product.id}> {product.title}   </Link>
                    }))}
                        {/* <Link to="/products/1">Stylish hat </Link>  */}
                        {/* <Link to="/products/2">Beautiful Jacket </Link> 
                        <Link to="/products/3">Fashionable Jeans </Link> 
                        <Link to="/products/4">Smart tie </Link>  */}

                    </div>
                </BrowserRouter>
               {/* Products:

                <ProductPage/>
                <ProductPage/> */}
            </div>
        )
    }
}
