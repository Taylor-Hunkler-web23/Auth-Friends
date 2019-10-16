import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js'

const Friend = props => {
    console.log(props, 'in Friend')


    const handleSubmit = (id) => {
      

        axiosWithAuth()
            .delete(`/api/friends/${id}`)
            .then(response => {
                console.log(response)
               
            })


    }

    


    return (

        <div className="friend-card">
            <h1>Name:{props.friend.name}</h1>
            <h1>Age:{props.friend.age}</h1>
            <h1>Email:{props.friend.email}</h1>
            <button onClick={handleSubmit}>Delete</button>
        </div>
    )
}

export default Friend;