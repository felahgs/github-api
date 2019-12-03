import React, { Component } from 'react';
import axios from 'axios';

class SearchUsers extends Component {
    state = {
        num: 4,
        users:[],
        usersProfile:[],
    }
    
   componentDidMount () {
        axios.get('https://api.github.com/search/users?q=' + this.props.input)
            .then(response => {
                const users = response.data.items;
                const updatedUsers = users.map(users => {
                    return {
                        ...users,
                    }
                })
                this.setState({users: updatedUsers});
                console.log('response:', this.state.users);
            })

    };

    render () {
        let content = <div style={{textAlign: 'center'}}>Loading</div>;
        // console.log('user profile', this.state.usersProfile);
        console.log("props", this.props.input)
        content = this.state.users.map(user => {
            return (
                <div className="user-card"
                    key={user.id}
                    username={user.login}
                    img={user.avatar_url}
                >
                    <div className="user-avatar">
                        <img src={user.avatar_url} alt="user avatar"/>
                    </div>
                    <div className="user-name">
                        <b>{user.login}</b>
                    </div>
                </div>
            )
        })
        return content;
    }
}
export default SearchUsers;