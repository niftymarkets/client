import React, { Component } from 'react'
import TransactionHistory from './TransactionHistory'
import Wishlist from './WishList'
import UserDetails from './UserDetails'
import CurrentItems from './CurrentItems'

const user = {
  userId: 1,
  name: 'Frank1',
  balance: 100,
  wishList: [1], // game_item.id
  userItems: [2, 3],
  transactionHistory: [
    { // each transaction should change game_item.owner
      transId: 1,
      itemId: 1,
      price: 10,
      date: Date.now(),
      otherUser: 'user1',
    },
    {
      transId: 2,
      itemId: 2,
      price: 20,
      date: Date.now(),
      otherUser: 'user2',
    },
    {
      transId: 3,
      itemId: 3,
      price: 30,
      date: Date.now(),
      otherUser: 'user3',
    },
    {
      transId: 4,
      itemId: 4,
      price: 40,
      date: Date.now(),
      otherUser: 'user4',
    }
  ],

  editingItem: false, // bool - changes on "EDIT" btn click
  editItem: { // item the user will be editing
    itemId: 3,	    
    name: '',
    description: '',
    price: 1,
    category: '',
    imgUrl: '',
    availability: false,
  },

  addItem: { // new item to be added to DB
    owner: '', // user.name
    itemId: '',
    name: '',
    price: 10,
    description: '',
    category: '',
    imgUrl: '',
    availability: false,
  },
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
