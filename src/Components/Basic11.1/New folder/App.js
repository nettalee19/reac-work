import react from 'react';
import UserItem from './UserItem';

let counter = 0;
class App extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'itay',
            age : 23,
            users : []
        }
    }

    inputsHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm = (e) =>{
        e.preventDefault();

        let users  = this.state.users;
        users.push({
            id : counter++,
            name : this.state.name,
            age : this.state.age
        })

        this.setState({
            users: users,
            name : '',
            age : 0
        })

    }

    render() {
        console.log(this.state)
        return (
            <>
                <form onSubmit={this.submitForm}>
                    {/*<label>name:</label>*/}
                    <input type={'text'} value={this.state.name} name={'name'} onChange={this.inputsHandler}/>
                    <label>age:</label>
                    <input type={'number'} value={this.state.age} min={0} max={100} name={'age'} onChange={this.inputsHandler}/>
                    <input type={'submit'} value={'submit'}/>
                </form>

                {
                    this.state.users.map((u)=>{
                        return <UserItem lala={u}/>
                    })
                }

            </>
        )
    }
}


export default App;
