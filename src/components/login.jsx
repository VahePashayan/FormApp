import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const account = {...this.state.account};
    account[e.currentTarget.name]  = e.currentTarget.value;
    this.setState({account});
  }

  render() {

    const {account} = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              autoFocus
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              type="text"
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
