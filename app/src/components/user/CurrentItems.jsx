import React, { Component } from 'react'
import ItemForm from './AddItemForm'
import ItemCard from '../common/ItemCard'

class CurrentItems extends Component {
  render() {
    if (!this.props.userItems) {
      return <div>Loading user items...</div>
    }

    return (
      <div>
        <h2>I have list of current items</h2>
        <div>Add new item here!</div>
        <ItemForm />
        <div>
          <h3>Your current items:</h3>
          <div>
            {this.props.userItems.map(item => (
              <ItemCard key={item.itemId} item={item} hasDeleteButton={true} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentItems
