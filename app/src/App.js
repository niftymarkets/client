import React, { Component } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// Components
import Navigation from './components/common/Navigation'
import MarketWrapper from './components/market/MarketWrapper'
import UserWrapper from './components/user/UserWrapper'
// import AuthWrapper from './components/auth/AuthWrapper'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <Route path='/market' component={MarketWrapper} />

        <Route
          exact
          path='/user/123'
          render={() => (
            this.props.isAuthed ? (
              <UserWrapper/>
            ) : (
              <Redirect to="/market"/>
            )
          )} />

        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    isAuthed: state.isAuthed,
  })
}

// need to wrap connect in withRouter HOC
// to deal with Blocked Updates
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md
export default withRouter(connect(mapStateToProps, {})(App));

