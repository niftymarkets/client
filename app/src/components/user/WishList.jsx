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
              <li>{wish }</li>
            </ul>
          ))
        }
      </div>
    );
  }
}

export default WishList

/*
wishList: ['item1', 'item3', 'item4'], // game_item.id
*/