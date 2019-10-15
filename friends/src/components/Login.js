import React from 'react';

class Login extends React.Component {
    state={
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

        
    }

    render(){

        return(
            <div>

                <form>
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