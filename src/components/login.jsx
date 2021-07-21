import React, { Component } from 'react';
import Input from './input';
import "./login.css"
class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    isUsernameFilled: false,
    isPasswordFilled: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.account.username)
    {
      this.setState(() => ({ isUsernameFilled: true}));
    }else {
      this.setState(() => ({ isUsernameFilled: false}));
    }
    if(this.state.account.password)
    {
      this.setState(() => ({ isPasswordFilled: true}));
    }else {
      this.setState(() => ({ isPasswordFilled: false}));
    }
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
          <p className={this.state.isUsernameFilled ? "hidden" : "visible"} style={{color: "red"}}>username is required</p>
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            type="password"
          />
          <p className={this.state.isPasswordFilled ? "hidden" : "visible"} style={{color: "red"}}>password is required</p>}
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
