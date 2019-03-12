import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, updateLoginForm } from '../../actions/actionCreators';

const emptyLoginForm = {
  username: '',
  password: '',
}

class Login extends Component {
  onClickHandler = (e) => {
    e.preventDefault();
    this.props.loginUser(this.props.loginForm.username, this.props.loginForm.password);
    this.props.updateLoginForm(emptyLoginForm);
  }

  onChangeHandler = (e) => {
    this.props.updateLoginForm({ ...this.props.loginForm , [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form autoComplete="off">

          <input
            value={this.props.loginForm.username}
            onChange={this.onChangeHandler}
            name="username" type="text" placeholder="Enter your user name">
          </input>

          <input
            value={this.props.loginForm.password}
            onChange={this.onChangeHandler}
            name="password" type="password" placeholder="Enter password">
          </input>

          <div>
            <button onClick={this.onClickHandler}>Login</button>
            <Link to="/"><button>Cancel</button></Link>
          </div>

        </form>

        <div>                    
          <p>New to nifty market? <Link to="/signup">Sign up now</Link></p>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loginForm: state.loginForm,
  })
}

export default connect(mapStateToProps, { loginUser, updateLoginForm })(Login);