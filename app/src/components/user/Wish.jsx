import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeWish } from '../../actions/actionCreators'

class Wish extends Component {
  onClickHandler = () => {
    this.props.removeWish(this.props.userDetails, this.props.wishList)
  }

  render() {
    // const itemName = this.props.marketItems.filter(
    //   item => item.itemId === this.props.wish
    // )

    return (
      // <li>
      //   {itemName[0].name}
      //   <button onClick={this.onClickHandler}>X</button>
      //
      // </li>
      <div>
        {this.props.wish.name} <button onClick={this.onClickHandler}>X</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userDetails: state.user.userDetails,
    wishList: state.user.wishList
  }
}

export default connect(
  mapStateToProps,
  { removeWish }
)(Wish)
