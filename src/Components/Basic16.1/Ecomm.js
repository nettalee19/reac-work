import React, { Component } from 'react'
import Homepage from './Homepage'
import Header from './Header'
import Products from './Products'
import ProductDetail from './ProductDetail'
import {BrowserRouter, Route} from 'react-router-dom'

export default class Ecomm extends Component {
    render() {
        return (
            <div>
                {/* <h2>hello</h2> */}
                <BrowserRouter>
                    <div>
                        <Header/>
                        {/* <Route path="/" component={Header}/> */}
                        <Route path="/" exact component={Homepage}/>
                        <Route path="/products" component={Products}/>
                        <Route path="/products/:id" component={ProductDetail}/>
                        
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
