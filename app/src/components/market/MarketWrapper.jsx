import React, { Component } from 'react'
import { connect } from 'react-redux'

import Gallery from './Gallery'
import Search from './Search'
import Tabs from './Tabs'

class MarketWrapper extends Component {
  render() {
    const { gameItems } = this.props
    return (
      <main>
        <h1>Nifty Markets</h1>
        <Tabs />
        <Search />
        <Gallery gameItems={gameItems} />
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameItems: state.gameItems
  }
}

export default connect(mapStateToProps)(MarketWrapper)
