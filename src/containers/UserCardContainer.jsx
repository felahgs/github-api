import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard/UserCard';
import axios from 'axios';

const UserCardContainer = (props) => {

    const [users, setUsers] = useState([])
    const [usersLoaded, setUsersLoaded] = useState(false)

    useEffect(()=> {
        fetchUsers();
    })

    const fetchUsers = () => {
        axios.get('https://api.github.com/search/users?q=' + props.input, {
            'auth': {
              'user': 'felahgs',
              'pass': 'Tje3qz%e',
              'sendImmediately': false
            }
        })
        .then(response => {
            const users = response.data.items;
            const updatedUsers = users.map(users => {
                return {
                    ...users,
                }
            })
            setUsersLoaded(true)
            setUsers(updatedUsers)
        })
    }

    let content;
    if(usersLoaded) {
        content = users.map(user => {
            return (
                <UserCard user={user} key={user.id}/>
            )
        })
    }
    else content = <div style = {{textAlign: 'center'}}> Loading... </div>
    return content;
    
}
export default UserCardContainer;
