import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateLoginForm } from '../../actions/actionCreators'
import axios from 'axios'

import styled from 'styled-components'

const emptyLoginForm = {
  username: '',
  password: ''
}

class Login extends Component {
  onClickHandler = e => {
    e.preventDefault()

    const { username, password } = this.props.loginForm

    axios
      .post(`https://nifty-markets.herokuapp.com/api/users/login`, {
        username,
        password
      })
      .then(res => {
        localStorage.setItem('jwt', res.data.token)
        localStorage.setItem('userId', res.data.userId)
        this.props.history.push(`/users/${res.data.userId}`)
      })
      .catch(err => console.error(err))
      .finally(() => this.props.updateLoginForm(emptyLoginForm))
  }

  onChangeHandler = e => {
    this.props.updateLoginForm({
      ...this.props.loginForm,
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <LoginForm>
        <h2>Login</h2>
        <form autoComplete='off'>
          <input
            required
            value={this.props.loginForm.username}
            onChange={this.onChangeHandler}
            name='username'
            type='text'
            placeholder='Username'
          />

          <input
            required
            value={this.props.loginForm.password}
            onChange={this.onChangeHandler}
            name='password'
            type='password'
            placeholder='Password'
          />

          {/* <div>
            <input checked='' id='remember' name='remember' type='checkbox' />
            <label for='remember' />
            <span>Remember me</span>
          </div> */}

          <div>
            <button onClick={this.onClickHandler}>Sign in</button>
            <Link to='/'>
              <button>Cancel</button>
            </Link>
          </div>

          <div class='socialLogin'>
            <i class='fab fa-facebook-square' />
            <i class='fab fa-steam-square' />
          </div>
        </form>

        <div>
          <p>
            New to nifty market? <Link to='/signup'>Sign up now</Link>
          </p>
          <a class='register' href='#'>
            Forgot your password?
          </a>
        </div>
      </LoginForm>
    )
  }
}

const mapStateToProps = state => {
  return {
    loginForm: state.loginForm,
    userDetails: state.user.userDetails
  }
}

export default connect(
  mapStateToProps,
  { updateLoginForm }
)(Login)

