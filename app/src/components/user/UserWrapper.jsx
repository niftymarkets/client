import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionHistory from './TransactionHistory';
import Wishlist from './WishList';
import UserDetails from './UserDetails';
import CurrentItems from './CurrentItems';


class UserWrapper extends Component {

  render() {
    return (
      <div>
        <h2>I'm the UserWrapper!</h2>
        <UserDetails
          name={this.props.user.name}
          balance={this.props.user.balance}          
        />
        <CurrentItems userItems={this.props.user.userItems} />
        <TransactionHistory transHist={this.props.user.transactionHistory} />
        <Wishlist wishList={this.props.user.wishList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    user: state.user,
  });
}

export default connect(mapStateToProps, {})(UserWrapper);
