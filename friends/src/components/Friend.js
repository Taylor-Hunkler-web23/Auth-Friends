import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js'

const Friend = props => {
    console.log(props, 'in Friend')


    const handleSubmit = banana => {
      

        axiosWithAuth()
            .delete(`/api/friends/${banana}`)
            .then((response) => {
                console.log(response, 'd r')
                window.location.reload();
               
            })


    }

    


    return (

        <div className="friend-card">

            <h1>Name:{props.friend.name}</h1>
            <h1>Age:{props.friend.age}</h1>
            <h1>Email:{props.friend.email}</h1>
            {/* the specific friend to edit, function passed in from friendslist */}
            <button onClick={() => props.edit(props.friend)}>Edit</button>

            <button onClick={() => handleSubmit(props.friend.id)}>Delete</button>
        </div>
    )
}

export default Friend;