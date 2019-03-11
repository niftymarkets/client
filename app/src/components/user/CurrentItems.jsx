import React, { Component } from 'react'

class CurrentItems extends Component {
  render() {
    return (
      <div>
        <h2>I have list of current items</h2>
        <div>
          <h3>Your current items:</h3>
          {
            this.props.userItems.map(item => (
              /* item(itemId) needs to target an Item card in state.item */
              <div key={item}>{item}</div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default CurrentItems
