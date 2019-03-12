import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupUser, updateSignupForm } from '../../actions/actionCreators';

const emptySignupForm = {
  username: '',
  email: '',
  password: ''
}

class Signup extends Component {
  onClickHandler = (e) => {
    e.preventDefault();
    this.props.signupUser(this.props.signupForm.username, this.props.signupForm.password);
    this.props.updateSignupForm(emptySignupForm);
  }

  onChangeHandler = (e) => {
    this.props.updateSignupForm({ ...this.props.signupForm , [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form autoComplete="off">

          <input
            value={this.props.signupForm.username}
            onChange={this.onChangeHandler}
            name="username" type="text" placeholder="Enter your user name">
          </input>

          <input
            value={this.props.signupForm.email}
            onChange={this.onChangeHandler}
            name="email" type="email" placeholder="Enter your email">
          </input>

          <input
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
          <p>Already have an account? <Link to="/login">Login with your accout!</Link></p>
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