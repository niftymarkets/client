import * as types from '../actions/actionTypes'
import { combineReducers } from 'redux'

// Dummy data for reducers

const dummyUser = {
  userDetails: {},
  wishList: [],
  userItems: [],
  
  transactionHistory: {
    "boughtItems": [
        {
            "itemId": 6,
            "name": "Floss",
            "price": 29,
            "description": "Express yourself on the battlefield.",
            "category": "emotes",
            "buyerId": 1,
            "userId": 2,
            "username": "same",
            "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/9AB75723_large.png",
            "availability": 0
        },
        {
            "itemId": 19,
            "name": "Squirtle",
            "price": 100,
            "description": "One part squirrel, one part turtle",
            "category": "pets",
            "buyerId": 1,
            "userId": 9,
            "username": "quinn",
            "img_url": "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/500px-007Squirtle.png",
            "availability": 0
        }
    ],
    
    "soldItems": [
        {
            "itemId": 2,
            "name": "Cuddle Team Leader",
            "price": 25,
            "description": "Hug it out.",
            "category": "outfits",
            "buyerId": 3,
            "userId": 1,
            "username": "scott",
            "img_url": "https://cdn.thetrackernetwork.com/cdn/fortnite/22163_large.png",
            "availability": 0
        }
    ]
},

  // editingUser: false, // bool - changes on "EDIT" btn click
  // editUser: {
  //   // item the user will be editing
  //   username: '',
  //   password: '',
  //   email: '',
  //   funds_balance: ''
  // },

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
    case types.GET_WISHLIST:
      return {
        ...state,
        wishList: action.payload
      }

    // case types.REMOVE_WISH:
    //   return {
    //     ...state,
    //     wishList: action.payload
    //   }

    case types.UPDATE_ITEM_FORM:
      return {
        ...state,
        addItem: action.payload
      }

    case types.GET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails
      }

    case types.GET_USER_ITEMS:
      return {
        ...state,
        userItems: action.userItems
      }
    
      // WE WILL NOT NEED THIS, DEPENDING ON SERVER POST RESPONSE
    case types.UPDATE_TRANSACTION_HISTORY:
      return {
        ...state,
        transactionHistory: {
          boughtItems: [
            ...state.transactionHistory.boughtItems,
            action.payload
          ]
        }
      }

    case types.GET_TRANSACTION_HISTORY:
      return {
        ...state,
        transactionHistory: action.payload
      }

    default:
      return state
  }
}

export const marketItems = (state = [], action) => {
  switch (action.type) {
    case types.GET_MARKET_ITEMS:
      return action.payload
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
  marketItems,
  marketSearch,
  activeCategory,
  signupForm: signupFormReducer,
  loginForm: loginFormReducer
})

export default rootReducer
