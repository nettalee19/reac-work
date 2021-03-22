import React, { Component } from 'react'
import Products from './Products'
import Homepage from './Homepage'


export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href={<Products/>}>Products</a></li>
                    <li><a href={<Homepage/>}>Home</a></li>
                </ul>
            </div>
        )
    }
}
