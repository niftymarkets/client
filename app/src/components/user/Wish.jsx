import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeWish } from '../../actions/actionCreators'

class Wish extends Component {
  onClickHandler = () => {
    this.props.removeWish(this.props.wish, this.props.user.wishList)
  }

  render() {
    const itemName = this.props.marketItems.filter(
      item => item.itemId === this.props.wish
    )

    return (
      <li>
        {itemName[0].name}
        <button onClick={this.onClickHandler}>X</button>
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    marketItems: state.marketItems
  }
}

export default connect(
  mapStateToProps,
  { removeWish }
)(Wish)
