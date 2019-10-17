import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js'
import FriendList from './components/FriendList';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Form from './components/AddForm.js'
import {axiosWithAuth} from './utils/axiosWithAuth.js'
import Update from './components/Update.js'



function App() {
  

  const [friend, setFriend] = useState();
  

  useEffect (() => {

    axiosWithAuth()
    .get('/api/friends')
    .then(response => setFriend(response.data))
    
    .catch(error => console.log('error'))
}, [])





  return (
    <Router>
      <div className="App">

        <div className="nav">
          <Link to="/login">Login</Link>
          <Link to="/protected">Protected Page</Link>
          <Link to="/form">Add a friend</Link>
          {/* <Link to="/update">Update a friend</Link> */}
        </div>
        
        {/* <PrivateRoute exact path="/update"  friend={friend} updateFriend={setFriend} component={Update} /> */}
        <PrivateRoute exact path="/form" component={Form} />
        <PrivateRoute exact path="/protected" component={FriendList} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
