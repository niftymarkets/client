import React, { Component } from 'react'
import Wish from './Wish'

class WishList extends Component {
  render() {
    return (
      <div>
        <h6>Your Wishlist:</h6>
        <ul>
          {this.props.wishList.map(wish => (
            <Wish key={wish.wishlistId} wish={wish} />
          ))}
        </ul>
      </div>
    )
  }
}

export default WishList
