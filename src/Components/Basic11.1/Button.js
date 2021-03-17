import react from 'react';


class UserItem extends react.Component {
    state = {
        color:this.props.value
    }

    choose(){
        this.props.chooseColor(e.target.textContent)
    }
     
     render() {
         return (
             <div>
                 <button style={{backgroundColor:this.props.value}} onClick={(e)=>this.getColor(e)}>{this.props.value}</button>
             </div>
         )
     }
}


export default UserItem;
