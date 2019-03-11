import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TransactionHistory from './TransactionHistory';
import Wishlist from './WishList';
import UserDetails from './UserDetails';
import CurrentItems from './CurrentItems';


class UserWrapper extends Component {

  render() {
    return (
      <StyledUser>
        <h2>I'm the UserWrapper!</h2>
        <UserDetails
          name={this.props.user.name}
          balance={this.props.user.balance}          
        />
        <CurrentItems userItems={this.props.user.userItems} />
        <TransactionHistory transHist={this.props.user.transactionHistory} />
        <Wishlist wishList={this.props.user.wishList} />
      </StyledUser>
    );
  }
}

const mapStateToProps = state => {
  return ({
    user: state.user,
  });
}

export default connect(mapStateToProps, {})(UserWrapper);

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
