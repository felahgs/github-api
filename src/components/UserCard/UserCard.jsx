import React from 'react';
import './UserCard.css';

const UserCard = (props) => {

    return (
        <div className="user-card">
            <div className="user-avatar">
                <img src={props.user.avatar_url} alt="user avatar"/>
            </div>
            <div className="user-name">
                <b>{props.user.login}</b>
            </div>
        </div>
    )
}

export default UserCard;