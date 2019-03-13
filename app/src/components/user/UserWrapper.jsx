import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  getUserDetails,
  getUserItems,
  getWishList
} from '../../actions/actionCreators'

import TransactionHistory from './TransactionHistory'
import Wishlist from './WishList'
import UserDetails from './UserDetails'
import CurrentItems from './CurrentItems'

class UserWrapper extends Component {
  componentDidMount() {
    this.props.getUserDetails(this.props.renderProps.location.pathname)
    this.props.getUserItems(this.props.renderProps.location.pathname)
    this.props.getWishList(this.props.userDetails.userId)
  }

  render() {
    const { userDetails, userItems, transactionHistory, wishList } = this.props

    if (!userDetails) {
      return <div>Loading user details...</div>
    }

    return (
      <StyledUser>
        <h2>I'm the UserWrapper!</h2>
        <UserDetails
          name={userDetails.username}
          balance={userDetails.funds_balance}
        />
        <CurrentItems
          userItems={userItems}
          pathname={this.props.renderProps.location.pathname}
        />
        <TransactionHistory transHist={transactionHistory} />
        <Wishlist wishList={wishList} />
      </StyledUser>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    transactionHistory: state.user.transactionHistory,
    wishList: state.user.wishList,
    userDetails: state.user.userDetails,
    userItems: state.user.userItems
  }
}

export default connect(
  mapStateToProps,
  { getUserDetails, getUserItems, getWishList }
)(UserWrapper)

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
