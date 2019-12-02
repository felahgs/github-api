import React from 'react';

import './Post.css'

const post = (props) => {
    console.log('my props dawg', props)
    console.log('my props dawg', props.avatar_url)
    return (
        <div className="Post">
            <div className="container">
                <img src={props.img} width="10%" height="10%"></img>
                <h1>{props.username}</h1>
            </div>
        </div>
    );
}

export default post;