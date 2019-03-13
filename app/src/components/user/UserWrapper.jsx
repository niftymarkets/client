import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getUserDetails } from '../../actions/actionCreators'

import TransactionHistory from './TransactionHistory'
import Wishlist from './WishList'
import UserDetails from './UserDetails'
import CurrentItems from './CurrentItems'

class UserWrapper extends Component {
  componentDidMount() {
    this.props.getUserDetails(this.props.renderProps.location.pathname)
  }

  render() {
    // Have to add [0] for userDetails, because the API endpoint returns and array with 1 object
    // requested to get it fixed to return just an object
    if (!this.props.userDetails[0]) {
      return <div>Loading user details...</div>
    }

    return (
      <StyledUser>
        <h2>I'm the UserWrapper!</h2>
        <UserDetails
          name={this.props.userDetails[0].username} // Once the API endpoint is fixed, remove [0]
          balance={this.props.userDetails[0].funds_balance}
        />
        <CurrentItems userItems={this.props.user.userItems} />
        <TransactionHistory transHist={this.props.user.transactionHistory} />
        <Wishlist wishList={this.props.user.wishList} />
      </StyledUser>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    userDetails: state.user.userDetails
  }
}

export default connect(
  mapStateToProps,
  { getUserDetails }
)(UserWrapper)

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
