import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  getUserDetails,
  getUserItems,
  getWishList,
  addFunds
} from '../../actions/actionCreators'

import TransactionHistory from './TransactionHistory'
import Wishlist from './WishList'
import UserDetails from './UserDetails'
import CurrentItems from './CurrentItems'

class UserWrapper extends Component {
  componentDidMount() {
    const id = localStorage.getItem('userId')
    this.props.getUserDetails(id)
    this.props.getUserItems(id)
    this.props.getWishList(id)
  }

  render() {
    const {
      userDetails,
      userItems,
      transactionHistory,
      wishList,
      addFunds
    } = this.props

    if (!userDetails) {
      return <div>Loading user details...</div>
    }

    return (
      <StyledUser>
        <UserDetails
          name={userDetails.username}
          userId={userDetails.userId}
          funds_balance={userDetails.funds_balance}
          img_url={userDetails.img_url}
          password={userDetails.password}
          email={userDetails.email}
          addFunds={addFunds}
        />

        <CurrentItems
          userItems={userItems}
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
  { getUserDetails, getUserItems, getWishList, addFunds }
)(UserWrapper)

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
