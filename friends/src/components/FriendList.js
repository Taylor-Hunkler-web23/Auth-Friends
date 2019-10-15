import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js'
import Friend from './Friend.js'
import Form from './AddForm.js'

class FriendList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {

        axiosWithAuth()
            .get('/api/friends')
            .then(response => {
                this.setState({
                    friends: response.data
                });
            })
            .catch(error => console.log('error'))
    }

    render() {

        return (

            <div>
                <h1>My Friends</h1>
                
                {this.state.friends.map(friend => (
                    <Friend key={friend.id} friend={friend}/>

                ))}


            </div>
        )
    }
}

export default FriendList;