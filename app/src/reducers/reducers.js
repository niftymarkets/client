import * as types from '../actions/actionTypes'
import { combineReducers } from 'redux'

// Dummy data for reducers

const dummyUser = {
  userDetails: {
  },
  wishList: [1, 3], // game_item.id
  userItems: [2, 4],
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
    img_url: '',
    availability: false
  },

  addItem: {
    name: '',
    price: '',
    description: '',
    category: 'Outfits', // this is the default value for dropdown
    userId: '',
    img_url: '',
    availability: false
  }
}
const dummyItems = [
  {
    itemId: 1,
    name: 'Love Ranger',
    price: 10,
    description: 'Aim for the heart.',
    category: 'outfits',
    owner: 'username',
    img_url: 'https://cdn.thetrackernetwork.com/cdn/fortnite/93062_large.png',
    availability: true
  },
  {
    itemId: 2,
    name: 'Raptor',
    price: 29,
    description: 'Royale Air Force test pilot',
    category: 'outfits',
    owner: 'username',
    img_url:
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
    img_url: 'https://image.fnbr.co/pickaxe/5afc0f9eb6e7f752dba32633/png.png',
    availability: true
  },
  {
    itemId: 4,
    name: 'Start Name Thing',
    price: 500,
    description: 'Gotta go',
    category: 'toys',
    owner: 'username',
    img_url: 'https://image.fnbr.co/pickaxe/5afc0f9eb6e7f752dba32633/png.png',
    availability: true
  }
]

const signupFormDummy = {
  username: '',
  email: '',
  password: ''
}

const loginFormDummy = {
  username: '',
  password: ''
}

// Reducers
export const loading = (loading = false, action) => {
  switch (action.type) {
    case types.LOADING:
      return action.payload

    default:
      return loading
  }
}

export const error = (error = null, action) => {
  switch (action.type) {
    case types.ERROR:
      return action.payload

    default:
      return error
  }
}

export const user = (state = dummyUser, action) => {
  switch (action.type) {
    case types.TOGGLE_WISHLIST: {
      return {
        ...state,
        wishList: action.payload
      }
    }

    case types.REMOVE_WISH:
      return {
        ...state,
        wishList: action.payload
      }

    case types.UPDATE_ITEM_FORM:
      return {
        ...state,
        addItem: action.payload
      }
    
      case types.GET_USER_DETAILS:
        return {
          ...state,
          userDetails: action.userDetails,
        }

      case types.GET_USER_ITEMS:
        return {
          ...state,
          userItems: action.userItems,
        }
        
    default:
      return state
  }
}

export const gameItems = (state = dummyItems, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const loginFormReducer = (loginForm = loginFormDummy, action) => {
  switch (action.type) {
    case types.UPDATE_LOGIN_FORM:
      return action.payload

    default:
      return loginForm
  }
}

export const marketSearch = (marketSearch = '', action) => {
  switch (action.type) {
    case types.SEARCH_ITEMS:
      return action.payload
    case types.CLEAR_SEARCH:
      return action.payload
    default:
      return marketSearch
  }
}

export const activeCategory = (activeCategory = '', action) => {
  switch (action.type) {
    case types.FILTER_ITEMS:
      return action.payload
    default:
      return activeCategory
  }
}

export const signupFormReducer = (signupForm = signupFormDummy, action) => {
  switch (action.type) {
    case types.UPDATE_SIGNUP_FORM:
      return action.payload

    default:
      return signupForm
  }
}

// Combine all reducers into single one
const rootReducer = combineReducers({
  loading,
  error,
  user,
  gameItems,
  marketSearch,
  activeCategory,
  signupForm: signupFormReducer,
  loginForm: loginFormReducer
})

export default rootReducer
