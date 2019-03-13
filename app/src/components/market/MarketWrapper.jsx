import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  searchItems,
  filterItems,
  clearSearch,
  getMarketItems
} from '../../actions/actionCreators'

import Gallery from './Gallery'
import Search from './Search'
import Tabs from './Tabs'

import searchMachine from './searchMachine'

class MarketWrapper extends Component {
  componentDidMount() {
    this.props.getMarketItems()
  }

  render() {
    const {
      marketItems,
      marketSearch,
      searchItems,
      activeCategory,
      filterItems,
      clearSearch
    } = this.props

    const { newCategories, searchResults } = searchMachine(
      marketItems,
      marketSearch,
      activeCategory
    )

    return (
      <main>
        <h1>Nifty Markets</h1>
        <Tabs filterItems={filterItems} categories={newCategories} />
        <Search searchItems={searchItems} clearSearch={clearSearch} />
        <Gallery marketItems={searchResults} />
      </main>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    marketItems: state.marketItems,
    marketSearch: state.marketSearch,
    activeCategory: state.activeCategory
  }
}

export default connect(
  mapStateToProps,
  { searchItems, filterItems, clearSearch, getMarketItems }
)(MarketWrapper)
