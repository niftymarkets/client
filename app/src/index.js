import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { BrowserRouter as Router } from 'react-router-dom'

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

const store = createStore(
  rootReducer,
  initialState,
  compose(
    // composes functions into createStores third argument to enhance store
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
