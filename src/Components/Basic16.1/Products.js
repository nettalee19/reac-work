import React, { Component } from 'react'
import store from './store'
import ProductDetail from "./ProductDetail"
import {BrowserRouter, Link, Route} from 'react-router-dom'

export default class Products extends Component {
    state= {store}

    componentDidMount(){

    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Link to="/products/1">Stylish hat </Link> 
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
