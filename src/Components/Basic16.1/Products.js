import React, { Component } from 'react'
import store from './store'
import ProductPage from "./ProductPage"
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
                        {/* <Link to="/1">Stylish hat </Link>  */}
                        {/* <Link to="/2">Beautiful Jacket </Link> 
                        <Link to="/3">Fashionable Jeans </Link> 
                        <Link to="/4">Smart tie </Link>  */}

                    </div>
                </BrowserRouter>
               {/* Products:

                <ProductPage/>
                <ProductPage/> */}
            </div>
        )
    }
}
