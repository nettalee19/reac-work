import React, { Component } from 'react'
// import Products from './Products'
// import Homepage from './Homepage'
import {Link} from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        )
    }
}
