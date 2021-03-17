import react from 'react';


class UserItem extends react.Component {
    constructor(props) {
        super(props);
        this.state ={
            user : this.props.lala
        }
    }

    render() {
        return (
            <div>
                name :{this.state.user.name}
                age : {this.state.user.age}
            </div>
        )
    }
}


export default UserItem;
