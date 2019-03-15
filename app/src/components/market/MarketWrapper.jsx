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

    const availableItems = marketItems.filter(item => item.availability === 1)

    const { newCategories, searchResults } = searchMachine(
      availableItems,
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
          <Gallery availableItems={searchResults} />
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
  @media (max-width: 550px) {
    flex-direction: column;
  }
`

const MarketTabs = styled.div`
  height: auto;
  flex-direction: column;

  @media (min-width: 550px) {
    flex-shrink: 0;
    width: 250px;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
    background: #212b38;
    overflow-x: hidden;
  }
`

const MarketMain = styled.div`
  padding: 0.5rem;
  flex-grow: 0;
  width: 100%;

  @media (max-width: 550px) {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`
