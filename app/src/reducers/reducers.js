import * as types from '../actions/actionTypes'
import { combineReducers } from 'redux'

// Dummy data for reducers

const dummyUser = {
  userDetails: {},
  wishList: [],
  userItems: [],  
  transactionHistory: {
    boughtItems: [],
    soldItems: []
  },

  addItem: {
    name: '',
    price: '',
    description: '',
    category: 'Outfits', // this is the default value for dropdown
    userId: '',
    img_url: '',
    availability: ''
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

export const editingUser = (editingUser = false, action) => {
  switch (action.type) {
    case types.EDITING_USER:
      return action.payload

    default:
      return editingUser
  }
}

export const handlingModal = (handlingModal = false, action) => {
  switch (action.type) {
    case types.HANDLE_MODAL:
      return action.payload

    default:
      return handlingModal
  }
}


export const addingItem = (addingItem = false, action) => {
  switch (action.type) {
    case types.ADDING_ITEM:
      return action.payload

    default:
      return addingItem
  }
}


export const user = (state = dummyUser, action) => {
  switch (action.type) {
    case types.GET_WISHLIST:
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
        transactionHistory: action.payload
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
  loginForm: loginFormReducer,
  editingUser,
  addingItem,
  handlingModal
})

export default rootReducer
