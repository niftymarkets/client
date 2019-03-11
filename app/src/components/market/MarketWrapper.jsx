import React, { Component } from 'react'
import { connect } from 'react-redux'

import Gallery from './Gallery'

class MarketWrapper extends Component {
  render() {
    const { gameItems } = this.props
    return (
      <main>
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
