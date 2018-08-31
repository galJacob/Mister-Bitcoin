import React, { Component } from 'react';
import './SignupPage.scss';
import UserService from '../../services/UserService';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }
        UserService.checkIfUser()
            .then(() => {
                alert('already logged in!');
                this.props.history.push('/');
            })
            .catch(() => { })
    }
    handleChange = (ev) => {
        this.setState({ userName: ev.target.value })
    }
    onSignUp = () => {
        UserService.addUser(this.state.userName).then(() => {
            alert('added successfully!')
        })
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="sign-up-page">
                <h1>sign up</h1>
                <h2>enter your name:</h2>
                <div className="input-btn-container">
                    <input onInput={this.handleChange} value={this.state.userName} placeholder="my name..." />
                    <button onClick={this.onSignUp}>sign me up!</button>
                </div>
            </div>
        );
    }
}

export default SignUp;