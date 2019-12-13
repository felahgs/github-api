import React from 'react';
import './UserCard.css';

const UserCard = (props) => {

    const onClick = () => {
        console.log('click', props.user)
    }

    return (
        <div className="user-card" onClick={() => {onClick()}}>
            <div className="user-avatar">
                <img src={props.user.avatar_url} alt="user avatar"/>
            </div>
            <div  className="user-name">
                <b>{props.user.login}</b>
            </div>
        </div>
    )
}

export default UserCard;