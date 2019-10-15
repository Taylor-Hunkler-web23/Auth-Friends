import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js'

class FriendList extends React.Component {
    state= {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData =() => {

        axiosWithAuth()
        .get('/api/friends')
        .then(response => console.log(response))
    }

    render() {

        return(

            <div>
                <h1>My Friends</h1>

            </div>
        )
    }
}

export default FriendList;