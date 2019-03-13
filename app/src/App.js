import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

// Components
import Navigation from './components/common/Navigation'
import MarketWrapper from './components/market/MarketWrapper'
import UserWrapper from './components/user/UserWrapper'
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
          path='/users/21'
          render={renderProps => (
            localStorage.getItem('jwt') ? (
              <UserWrapper renderProps={renderProps}/>
            ) : (
              <Redirect to="/login"/>
            )
          )} />

        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </div>
    )
  }
}

export default App;
