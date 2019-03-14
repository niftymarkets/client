import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  searchItems,
  filterItems,
  clearSearch,
  getMarketItems,
  getWishList,
  getUserDetails
} from '../../actions/actionCreators'

import Gallery from './Gallery'
import Search from './Search'
import Tabs from './Tabs'

import searchMachine from './searchMachine'

class MarketWrapper extends Component {
  componentDidMount() {
    const id = localStorage.getItem('userId')
    this.props.getMarketItems()
    this.props.getUserDetails(id)
    this.props.getWishList(id)
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
  return {
    marketItems: state.marketItems,
    marketSearch: state.marketSearch,
    activeCategory: state.activeCategory,
    userDetails: state.user.userDetails
  }
}

export default connect(
  mapStateToProps,
  {
    searchItems,
    filterItems,
    clearSearch,
    getMarketItems,
    getWishList,
    getUserDetails
  }
)(MarketWrapper)
