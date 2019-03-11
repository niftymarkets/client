import React, { Component } from 'react';
import Wish from './Wish';

class WishList extends Component {

  render() {
    return (
      <div>
        <h2>I'm the Wish List!</h2>
        <ul>
          {
            this.props.wishList.map(wish => (
              <Wish
                key={wish}
                wish={wish}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default WishList;
