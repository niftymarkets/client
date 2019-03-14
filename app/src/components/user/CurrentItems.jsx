import React, { Component } from 'react';
import ItemForm from './AddItemForm';
import ItemCard from '../common/ItemCard'

class CurrentItems extends Component {
  render() {

    if (!this.props.userItems) {
      return <div>Loading user items...</div>
    }

    return (
      <div>
        <p>Add new item here!</p>
        <ItemForm />
        <div>
          <h6>Your current items:</h6>
          <div>
            {
              this.props.userItems.map(item => (
                <ItemCard
                  key={item.itemId}
                  item={item}
                  hasDeleteButton={true}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentItems
