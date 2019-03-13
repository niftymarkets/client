import React from 'react'
import { connect } from 'react-redux'
import {
  searchItems,
  filterItems,
  clearSearch
} from '../../actions/actionCreators'

import Gallery from './Gallery'
import Search from './Search'
import Tabs from './Tabs'

import searchMachine from './searchMachine'

const MarketWrapper = props => {
  const {
    gameItems,
    marketSearch,
    searchItems,
    activeCategory,
    filterItems,
    clearSearch
  } = props

  const { newCategories, searchResults } = searchMachine(
    gameItems,
    marketSearch,
    activeCategory
  )

  return (
    <main>
      <h1>Nifty Markets</h1>
      <Tabs filterItems={filterItems} categories={newCategories} />
      <Search searchItems={searchItems} clearSearch={clearSearch} />
      <Gallery gameItems={searchResults} />
    </main>
  )
}

const mapStateToProps = state => {
  return {
    gameItems: state.gameItems,
    marketSearch: state.marketSearch,
    activeCategory: state.activeCategory
  }
}

export default connect(
  mapStateToProps,
  { searchItems, filterItems, clearSearch }
)(MarketWrapper)
