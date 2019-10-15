import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js'
import FriendList from './components/FriendList';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Form from './components/AddForm.js'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends</h1>
        <Link to="/login">Login</Link>
        <Link to="/protected">Protected Page</Link>
        <Link to="/form">Add a friend</Link>
        <PrivateRoute exact path="/form" component={Form} />
        <PrivateRoute exact path="/protected" component={FriendList} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
