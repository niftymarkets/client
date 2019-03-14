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

import styled from 'styled-components'

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
      <MarketContainer>
        <MarketTabs>
          <Search searchItems={searchItems} clearSearch={clearSearch} />
          <Tabs filterItems={filterItems} categories={newCategories} />
        </MarketTabs>

        <MarketMain>
          <Gallery marketItems={searchResults} />
        </MarketMain>
      </MarketContainer>
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

const MarketContainer = styled.div`
  display: flex;
`

const MarketTabs = styled.div`
  min-width: 250px;
  background: #212b38;
  height: 100vh;
`

const MarketMain = styled.div`
  padding: 2rem;
  width: 100%;
`
