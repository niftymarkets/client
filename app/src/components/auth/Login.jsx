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
  state = {
    isClicked: true
  }

  toggleRemember = () => {
    this.setState({ isClicked: !this.state.isClicked })
  }

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
      <LoginWrapper>
        <LoginForm>
          <Heading>Login</Heading>
          <form autoComplete='off'>
            <InputField
              required
              value={this.props.loginForm.username}
              onChange={this.onChangeHandler}
              name='username'
              type='text'
              placeholder='Username'
            />

            <InputField
              required
              value={this.props.loginForm.password}
              onChange={this.onChangeHandler}
              name='password'
              type='password'
              placeholder='Password'
            />

            {/* Checkbox currently not working */}
            <CheckboxWrapper onClick={() => this.toggleRemember()}>
              {/* <Checkbox
                checked=''
                id='remember'
                name='remember'
                type='checkbox'
              />
              <CheckboxLabel for='remember' /> */}
              {/* <span>Remember me</span> */}
              {this.state.isClicked ? (
                <CheckboxLabel ticked className='far fa-check-circle' />
              ) : (
                <CheckboxLabel className='far fa-circle' />
              )}

              <span>Remember me</span>
            </CheckboxWrapper>

            <Section>
              <Button onClick={this.onClickHandler}>Sign in</Button>
              <Link to='/'>
                <Button>Cancel</Button>
              </Link>
            </Section>

            <SocialIcons>
              <CheckboxLabel className='fab fa-facebook-square' />
              <CheckboxLabel className='fab fa-steam-square' />
            </SocialIcons>
          </form>

          <Section>
            <Paragraph>
              New to nifty market? <Link to='/signup'>Sign up now</Link>
            </Paragraph>
            <Paragraph>Forgot your password?</Paragraph>
          </Section>
        </LoginForm>
      </LoginWrapper>
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

const LoginWrapper = styled.div`
  background: rgba(27, 35, 45, 1);
`

const LoginForm = styled.div`
  width: 32rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18.4rem 0 0 -15.5rem;
  background: #161c24;
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.07);
`

const Heading = styled.h3`
  color: #29f3db;
`

const InputField = styled.input`
  width: 25rem;
  padding: 2.5rem 0;
  background: #161c24;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  outline: none;
  color: #46485c;
`

const Button = styled.button`
  margin-top: 1rem;
  background: #212b38;
  border: 0;
  width: 25rem;
  height: 4rem;
  border-radius: 0.3rem;
  color: #29f3db;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    background: #85bdbf;
  }
`

const SocialIcons = styled.div`
  text-align: center;
  i {
    text-decoration: none;
    font-size: 2.9rem;
    color: #85bdbf;
    margin: 1rem;
    &:hover {
      color: #c2fcf7;
    }
  }
`

const Paragraph = styled.p`
  color: #c2fcf7;
  margin-bottom: 5px;
`

const Section = styled.div`
  text-align: center;
  margin-bottom: 5px;
`

const CheckboxWrapper = styled.div`
  margin-top: 15px;
  span {
    color: #c2fcf7;
  }
`

const CheckboxLabel = styled.i`
  font-size: 1rem;
  margin-right: 5px;
  cursor: pointer;
  color: ${props => (props.ticked ? '#C2FCF7' : '#46485c')};
`
