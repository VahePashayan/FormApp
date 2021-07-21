import React, { Component } from 'react';
import Input from './input';
import "./login.css"
class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            type="text"
          />
          {!this.state.account.username && <p style={{color: "red"}}>username is required</p>}
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            type="password"
          />
          {!this.state.account.password && <p style={{color: "red"}}>password is required</p>}
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
