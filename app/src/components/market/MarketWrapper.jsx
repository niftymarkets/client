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

    const availableItems = marketItems.filter(item => item.availability === 1);

    const { newCategories, searchResults } = searchMachine(
      availableItems,
      marketSearch,
      activeCategory
    )

    return (
      <div>
        <Tabs filterItems={filterItems} categories={newCategories} />
        <Search searchItems={searchItems} clearSearch={clearSearch} />
        <Gallery availableItems={searchResults} />
      </div>
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
