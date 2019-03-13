import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupUser, updateSignupForm } from '../../actions/actionCreators';
import axios from 'axios';

const emptySignupForm = {
  username: '',
  email: '',
  password: ''
}

class Signup extends Component {
  onClickHandler = (e) => {
    const { username, email, password } = this.props.signupForm;
    e.preventDefault();

    axios
    .post('https://nifty-markets.herokuapp.com/api/users/register', { username, email, password })
    // if we get the JWT here we can login user directly
    .then(() => this.props.history.push('/login'))
    .catch(err => console.error(err))
    .finally(() => this.props.updateSignupForm(emptySignupForm));
  }

  onChangeHandler = (e) => {
    this.props.updateSignupForm({ ...this.props.signupForm , [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form autoComplete="off">

          <input
            required
            value={this.props.signupForm.username}
            onChange={this.onChangeHandler}
            name="username" type="text" placeholder="Enter your user name">
          </input>

          <input
            required
            value={this.props.signupForm.email}
            onChange={this.onChangeHandler}
            name="email" type="email" placeholder="Enter your email">
          </input>

          <input
            required
            value={this.props.signupForm.password}
            onChange={this.onChangeHandler}
            name="password" type="password" placeholder="Enter password">
          </input>

          <div>
            <button onClick={this.onClickHandler}>Sign up</button>
            <Link to="/"><button>Cancel</button></Link>
          </div>

        </form>

        <div>                    
          <p>Already have an account? <Link to="/login">Login with your account!</Link></p>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    signupForm: state.signupForm,
  })
}

export default connect(mapStateToProps, { signupUser, updateSignupForm })(Signup);