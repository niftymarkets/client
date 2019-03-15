import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import './index.css'

// Components
import Navigation from './components/common/Navigation'
import MarketWrapper from './components/market/MarketWrapper'
import UserWrapper from './components/user/UserWrapper'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

class App extends Component {
  render() {
    let userId = localStorage.getItem('userId')
    return (
      <div>
        <Navigation userId={userId} />

        <main>
          <Route path='/market' component={MarketWrapper} />

          <Route
            exact
            path={`/users/${userId}`}
            render={renderProps =>
              localStorage.getItem('jwt') ? (
                <UserWrapper renderProps={renderProps} />
              ) : (
                <Redirect to='/app/login' />
              )
            }
          />

          <Route path='/app/login' component={Login} />
          <Route path='/app/signup' component={Signup} />
        </main>
      </div>
    )
  }
}

export default App
