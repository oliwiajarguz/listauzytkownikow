import React, {Component} from 'react';
import './Users.css';
import UsersList from './UsersList';
// komponent klasowy

class Users extends Component{
    constructor(props){
        super(props);
        this.state={
            users: []
        };
        // powinno sie czyscic 
    }

addUser = (event)=>{
    event.preventDefault();


    let newUser = {
        id: Date.now(),
        name:this._inputName.value
    }
    console.log(newUser);

    this.setState((state)=>{
        return({
            users: state.users.concat(newUser)
            });
    })
    this._inputName.value = '';

}
removeUser = (userID) =>{
    this.setState(state=>{
        return({
            // metoda filter
            users: state.users.filter((user)=>{
               return(user.id !==userID) 
            })
        });
    })

}

    render(){
        return(
            <div className='users-main'>
                <h1>Users' List</h1>
            <form onSubmit={this.addUser}>
            <input ref={(element)=>{this._inputName=element}}type='text' placeholder='Enter Name'/>
            <button type='submit'>Add User</button>
            </form>
           <UsersList usersList={this.state.users} removeUserMethod={this.removeUser}/>
            </div>
        );
    }
}

export default Users;