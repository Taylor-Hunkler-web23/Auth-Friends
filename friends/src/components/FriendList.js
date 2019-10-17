import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js'
import Friend from './Friend.js'
import Form from './AddForm.js'
import UpdateForm from './Update.js'

function FriendList () {
const [friends, setFriends]= useState([])



//added new state for edit
const [editFriend, setEditFriend] = useState()
   

   const getData = () => {

        axiosWithAuth()
            .get('/api/friends')
            .then(response => {
                setFriends( response.data);
            })
            .catch(error => console.log('error'))
    }


    
    useEffect(() => {
        getData();
      }, []);
    

      //passes this down to friend component to pass in id of friend to be updated
const edit = bananaWord => {
    setEditFriend (bananaWord);
}
   

        return (

            <div className="list">
                <UpdateForm editFriend={editFriend} setFriends={setFriends} />
                <h1>My Friendlist</h1>

                {friends.map(friend => (
                    <Friend key={friend.id} friend={friend} edit={edit} />

                ))}
    

            </div>
        )
    
}

export default FriendList;



// import React from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth.js'
// import Friend from './Friend.js'
// import Form from './AddForm.js'
// import UpdateForm from './Update.js'

// class FriendList extends React.Component {
//     state = {
//         friends: []
//     };

//     componentDidMount() {
//         this.getData();
//     }

//     getData = () => {

//         axiosWithAuth()
//             .get('/api/friends')
//             .then(response => {
//                 this.setState({
//                     friends: response.data
//                 });
//             })
//             .catch(error => console.log('error'))
//     }

    

//     render() {

//         return (

//             <div className="list">
                
//                 <h1>My Friendlist</h1>

//                 {this.state.friends.map(friend => (
//                     <Friend key={friend.id} friend={friend} />

//                 ))}
    

//             </div>
//         )
//     }
// }

// export default FriendList;