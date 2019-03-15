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
      <div>
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

            {/* Checkbox currently just changing UI, feature not implemented */}
            <CheckboxWrapper onClick={() => this.toggleRemember()}>
              {this.state.isClicked ? (
                <CheckboxLabel ticked className='far fa-check-circle' />
              ) : (
                <CheckboxLabel className='far fa-circle' />
              )}

              <span>Remember me</span>
            </CheckboxWrapper>

            <Section>
              <Button onClick={this.onClickHandler}>Log in</Button>
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
              New to nifty market? <Link to='/app/signup'>Sign up now</Link>
            </Paragraph>
            <Paragraph>Forgot your password?</Paragraph>
          </Section>
        </LoginForm>
      </div>
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

const LoginForm = styled.div`
  max-width: 500px;
  margin: 6rem auto 0 auto;
  background: #161c24;
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.07);

  @media (max-width: 500px) {
    margin: 6rem 1rem 0 1rem;
  }
`

const Heading = styled.h3`
  color: #29f3db;
`

const InputField = styled.input`
  width: 100%;
  padding: 2rem 0;
  background: #161c24;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  outline: none;
  color: #fcfcfc;
  font-family: 'Ubuntu', sans-serif;
`

const Button = styled.button`
  margin-top: 1rem;
  background: #212b38;
  border: 0;
  width: 100%;
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
  margin-top: 1rem;
  display: block;
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  color: #6d7781;
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
