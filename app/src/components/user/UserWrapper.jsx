import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  getUserDetails,
  getUserItems,
  getWishList,
  changeFunds,
  getTransactionHistory
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
    this.props.getTransactionHistory(id)
  }

  render() {
    const {
      userDetails,
      userItems,
      transactionHistory,
      wishList,
      changeFunds
    } = this.props

    if (!userDetails) {
      return <div>Loading user details...</div>
    }

    return (
      <UserContainer>

        <MainContainer>

          <UserDetails
            name={userDetails.username}
            userId={userDetails.userId}
            funds_balance={userDetails.funds_balance}
            img_url={userDetails.img_url}
            password={userDetails.password}
            email={userDetails.email}
            changeFunds={changeFunds}
          />

          <TransactionHistory transHist={transactionHistory} />

          <Wishlist wishList={wishList} />

        </MainContainer>
        

        <CurrentItems
          userItems={userItems}
        />


      </UserContainer>
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
  { getUserDetails, getUserItems, getWishList, changeFunds, getTransactionHistory }
)(UserWrapper)

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    align-items: center;
    /* flex-direction: row; */

    div:first-child {
      flex-grow: 4;
    }
  }
`;
