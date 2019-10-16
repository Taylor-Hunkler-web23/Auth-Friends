import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })

    }

    login = event => {
        event.preventDefault();

        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                this.props.history.push('/protected')
            })
            .catch(err => console.log(err.response));


    }

    render() {

        return (
            <div>

                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>


                </form>



            </div>


        );
    }
}

export default Login;