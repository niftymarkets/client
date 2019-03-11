import React, { Component } from 'react'
import TransactionHistory from './TransactionHistory'
import Wishlist from './WishList'
import UserDetails from './UserDetails'
import CurrentItems from './CurrentItems'

const user = {
  id: 'user1',
  name: 'Frank1',
  balance: 100,
  wishList: ['item1', 'item3', 'item4'], // game_item.id
  userItems: ['item23', 'item12'],
  transactionHistory: [
    { // each transaction should change game_item.owner
      id: 'trans1',
      itemId: 'item1',
      price: 1,
      date: Date.now(),
      otherUser: 'user1',
    },
    {
      id: 'trans2',
      itemId: 'item2',
      price: 2,
      date: Date.now(),
      otherUser: 'user2',
    },
    {
      id: 'trans3',
      itemId: 'item3',
      price: 3,
      date: Date.now(),
      otherUser: 'user3',
    },
    {
      id: 'trans4',
      itemId: 'item4',
      price: 4,
      date: Date.now(),
      otherUser: 'user4',
    }
  ],

  /*
  editingItem: false, // bool - changes on "EDIT" btn click
  editItem: { // item the user will be editing
    name: '',
    description: '',
    price: 1,
    category: '',
    imageURL: '',
  },

  addItem: { // new item to be added to DB
    name: '',
    description: '',
    price: 1,
    category: '',
    imageURL: '',
    owner: '', // user.name
  },
  */
};


class UserWrapper extends Component {
  render() {
    return (
      <div>
        <h2>I'm the UserWrapper!</h2>
        <UserDetails
          name={user.name}
          balance={user.balance}
          
        />
        <CurrentItems userItems={user.userItems} />
        <TransactionHistory transHist={user.transactionHistory} />
        <Wishlist wishList={user.wishList} />
      </div>
    );
  }
}

export default UserWrapper
