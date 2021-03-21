import React from 'react'




export class UserCard extends React.Component{
    state= {user: this.props.user}

    render(){
        return <>
        <div className="user-card">
            <p>Name: {this.state.user.name}</p>
            <p>Birthday: {this.state.user.birthday}</p>
            <p>Favorite Meats: {this.state.user.favoriteFoods.meats.join(', ')}</p>
            <p>Favorite Fish: {this.state.user.favoriteFoods.fish.join(', ')}</p>
        </div>
        </>
    }
}