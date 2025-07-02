import React from 'react';

function UserCard(props) {
    return(
        <div className="user-card">
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    );
}

export default UserCard; 