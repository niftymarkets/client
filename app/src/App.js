import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Components
import Navigation from './components/common/Navigation'
import MarketWrapper from './components/market/MarketWrapper'
import UserWrapper from './components/user/UserWrapper'
import AuthWrapper from './components/auth/AuthWrapper'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route path='/login' component={AuthWrapper} />
        <Route path='/market' component={MarketWrapper} />
        <Route exact path='/user/123' component={UserWrapper} />
      </div>
    )
  }
}

export default App
