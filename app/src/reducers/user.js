// import * as types from './actionTypes';


const dummyUser = {
  userId: 1,
  name: 'Jack1',
  balance: 100,
  wishList: [1, 5, 6, 8], // game_item.id
  userItems: [2, 3],
  transactionHistory: [
    {
      // each transaction should change game_item.owner
      transId: 1,
      itemId: 1,
      price: 10,
      date: Date.now(),
      otherUser: 'user1'
    },
    {
      transId: 2,
      itemId: 2,
      price: 20,
      date: Date.now(),
      otherUser: 'user2'
    },
    {
      transId: 3,
      itemId: 3,
      price: 30,
      date: Date.now(),
      otherUser: 'user3'
    },
    {
      transId: 4,
      itemId: 4,
      price: 40,
      date: Date.now(),
      otherUser: 'user4'
    }
  ],

  editingItem: false, // bool - changes on "EDIT" btn click
  editItem: {
    // item the user will be editing
    itemId: 3,
    name: '',
    description: '',
    price: 1,
    category: '',
    imgUrl: '',
    availability: false
  },

  addItem: {
    // new item to be added to DB
    owner: '', // user.name
    itemId: '',
    name: '',
    price: 10,
    description: '',
    category: '',
    imgUrl: '',
    availability: false
  }
}


export const REMOVE_WISH = 'REMOVE_WISH';

export const removeWish = (id, wishList) => {
  return ({
    type: REMOVE_WISH, // add .types
    payload: wishList.filter(wish => wish !== id),
  });
};

export const userReducerPavol = (user = dummyUser, action) => {
  switch (action.type) {
    case REMOVE_WISH: // add .types
      return ({
        ...user,
        wishList: action.payload
      });
  
    default:
      return user;
  }
}

export default userReducerPavol;

const initialState = {
  loading: false,
  error: null,
  isAuthed: true,
  marketSearch: '',
  activeCategory: '',
  gameItems: [
    {
      itemId: 1,
      name: 'Love Ranger',
      price: 10,
      description: 'Aim for the heart.',
      category: 'outfits',
      owner: 'username',
      imgUrl: 'https://cdn.thetrackernetwork.com/cdn/fortnite/93062_large.png',
      availability: true
    },
    {
      itemId: 2,
      name: 'Raptor',
      price: 29,
      description: 'Royale Air Force test pilot',
      category: 'outfits',
      owner: 'username',
      imgUrl:
        'https://image.fnbr.co/outfit/5ab15860e9847b3170da032d/featured.png',
      availability: false
    },
    {
      itemId: 3,
      name: 'Stop Axe',
      price: 40,
      description: 'Never stop axin',
      category: 'toys',
      owner: 'username',
      imgUrl: 'https://image.fnbr.co/pickaxe/5afc0f9eb6e7f752dba32633/png.png',
      availability: true
    }
  ],
  user: {
    userId: 1,
    name: 'Frank1',
    balance: 100,
    wishList: [1], // game_item.id
    userItems: [2, 3],
    transactionHistory: [
      {
        // each transaction should change game_item.owner
        transId: 1,
        itemId: 1,
        price: 10,
        date: Date.now(),
        otherUser: 'user1'
      },
      {
        transId: 2,
        itemId: 2,
        price: 20,
        date: Date.now(),
        otherUser: 'user2'
      },
      {
        transId: 3,
        itemId: 3,
        price: 30,
        date: Date.now(),
        otherUser: 'user3'
      },
      {
        transId: 4,
        itemId: 4,
        price: 40,
        date: Date.now(),
        otherUser: 'user4'
      }
    ],

    editingItem: false, // bool - changes on "EDIT" btn click
    editItem: {
      // item the user will be editing
      itemId: 3,
      name: '',
      description: '',
      price: 1,
      category: '',
      imgUrl: '',
      availability: false
    },

    addItem: {
      // new item to be added to DB
      owner: '', // user.name
      itemId: '',
      name: '',
      price: 10,
      description: '',
      category: '',
      imgUrl: '',
      availability: false
    }
  }
}
