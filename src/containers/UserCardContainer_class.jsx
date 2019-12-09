import React, { Component } from 'react';
import UserCard from '../components/UserCard/UserCard';
import axios from 'axios';

class SearchUsers extends Component {
    state = {
        users:[],
        usersProfile:[],
        usersLoaded: false
    }

     fetchUsers() {
        axios.get('https://api.github.com/search/users?q=' + this.props.input)
        .then(response => {
            const users = response.data.items;
            const updatedUsers = users.map(users => {
                return {
                    ...users,
                }
            })
            this.setState({users: updatedUsers, usersLoaded: true});
        })
    }
    
   componentDidMount () {
        this.fetchUsers();
    };

    componentDidUpdate() {
        this.fetchUsers();
    }

    render () {
        let content;
        if(this.state.usersLoaded) 
            content = this.state.users.map(user => {
                return (
                    <UserCard user={user} key={user.id}/>
                )
            })
        else content = <div style={{textAlign: 'center'}}>Loading</div>
        return content;
    }
}
export default SearchUsers;