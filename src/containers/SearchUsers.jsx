import React, { Component } from 'react';
import Post from '../components/Post/Post';
import axios from 'axios';

class SearchUsers extends Component {
    state = {
        num: 4,
        users:[],
        usersProfile:[],
        userData:[]
    }
    
   componentDidMount () {
        axios.get('https://api.github.com/search/users?q=felah')
            .then(response => {
                const users = response.data.items;
                const updatedUsers = users.map(users => {
                    return {
                        ...users,
                    }
                })
                this.setState({users: updatedUsers});
                console.log('response:', this.state.users);

                let userData;
                // this.state.users.map((user, index) => {
                //     axios.get(user.url)
                //         .then( user_response => {
                //             userData = user_response.data;
                //             this.setState(prevState => ({
                //                 usersProfile: [...prevState.usersProfile, userData]
                //             }))
                //             console.log("userdata", this.state.usersProfile);
                //             console.log("user", user);
                //         })
                //     return 1
                // })
            })

    };

    render () {
        let content = <div style={{textAlign: 'center'}}>Loading</div>;
        // console.log('user profile', this.state.usersProfile);
        content = this.state.users.map(user => {
            return (
                <li 
                    key={user.id}
                    username={user.login}
                    img={user.avatar_url}
                />
            )
        })
        return content;
    }
}
export default SearchUsers;