import React, { Component } from 'react'
import Homepage from './Homepage'
import Header from './Header'

export default class Ecomm extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Homepage/>
            </div>
        )
    }
}
