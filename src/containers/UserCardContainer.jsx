import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard/UserCard';
// import axios from 'axios';
import Loader from '../components/UI/Loader/Loader';
import Octokit from '@octokit/rest';


const UserCardContainer = (props) => {

    const [users, setUsers] = useState([])
    const [usersLoaded, setUsersLoaded] = useState(false)
    const octokit = new Octokit({
        auth: "token bbbd46db848e5bb46c1a4bda108b368fac3bcf62"
      });

    useEffect(()=> {
        fetchUsers();
    })

    const fetchUsers = () => {

        octokit.search.users({
            q: props.input
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
    else content = <div style = {{textAlign: 'center'}}>
            <Loader/>
        </div>
    return content;
    
}
export default UserCardContainer;
