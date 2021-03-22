import React from 'react'

export default class UserCard extends React.Component{
    state= {person: this.props.person}

    render(){
        return <>
        <div>
            <p>Name: {this.state.person.name}</p>
            <p>Birthday: {this.state.person.birthday}</p>
            <p>Favorite Meat: {this.state.person.favoriteFoods.meats.join(', ')}</p>
            <p>Favorite Meat: {this.state.person.favoriteFoods.fish.join(', ')}</p>
            <br/>
        </div>
        </>
    }
}