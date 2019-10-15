import React from 'react';

const Friend = props => {
    console.log(props, 'in Friend')
    return (

        <div className="friend-card">
            <h1>Name:{props.friend.name}</h1>
            <h1>Age:{props.friend.age}</h1>
            <h1>Height:{props.friend.email}</h1>
        </div>
    )
}

export default Friend;