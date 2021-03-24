import React, { Component } from 'react'
import store from './store'

export default class ProductPage extends Component {
    state= {id: this.props.id}
    
    render() {
        return (
            <div>
               <p>{this.state.id}</p>
            </div>
        )
    }
}
