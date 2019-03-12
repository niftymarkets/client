import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchItems } from '../../actions/actionCreators'
import matchSorter from 'match-sorter'

import Gallery from './Gallery'
import Search from './Search'
import Tabs from './Tabs'

class MarketWrapper extends Component {
  render() {
    const { gameItems, marketSearch, searchItems } = this.props
    let items = gameItems

    if (marketSearch) {
      items = matchSorter(items, marketSearch, {
        keys: ['name'],
        threshold: matchSorter.rankings.CONTAINS
      })
    }

    return (
      <main>
        <h1>Nifty Markets</h1>
        <Tabs />
        <Search searchItems={searchItems} />
        <Gallery gameItems={items} />
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameItems: state.gameItems,
    marketSearch: state.marketSearch
  }
}

export default connect(
  mapStateToProps,
  { searchItems }
)(MarketWrapper)
