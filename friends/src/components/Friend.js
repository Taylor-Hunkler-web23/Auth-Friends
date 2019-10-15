import React from 'react';

const Friend =props => {
console.log(props, 'in Friend')
    return(

        <div>
            <h1>{props.friend.name}</h1>
            <h1>{props.friend.age}</h1>
            <h1>{props.friend.email}</h1>
        </div>
    )
}

export default Friend;