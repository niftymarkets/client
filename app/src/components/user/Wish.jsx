import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeWish } from '../../reducers/user';

class Wish extends Component {

  onClickHandler = () => {
    this.props.removeWish(this.props.wish, this.props.user.wishList)
  }

  render() {
    return (
      /* wish(itemId) needs to target an Item name in state.item */
      <li>
        {this.props.wish}
        <button onClick={this.onClickHandler}>X</button>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return ({
    user: state.userReducer,
    // gameItems: state.gameItems,
  });
}

export default connect(mapStateToProps, { removeWish })(Wish);
