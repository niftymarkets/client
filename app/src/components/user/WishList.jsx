import React, { Component } from 'react'

class WishList extends Component {
  render() {
    return (
      <div>
        <h2>I'm the Wish List!</h2>
        {
          this.props.wishList.map(wish => (
            <ul key={wish}>
              {/* wish(itemId) needs to target an Item name in state.item */}
              <li>
                {wish}
                <button onClick={console.log(`removed ${wish} from wishlist`)}>X</button>
              </li>
            </ul>
          ))
        }
      </div>
    );
  }
}

export default WishList
