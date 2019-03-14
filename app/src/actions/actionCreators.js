import * as types from './actionTypes'
import axios from 'axios'

export const url = 'https://nifty-markets.herokuapp.com'

let token = localStorage.getItem('jwt')
axios.defaults.headers.common['Authorization'] = token

// ACTION CREATORS

export const onLoad = bool => {
  return {
    type: types.LOADING,
    payload: bool
  }
}

export const onError = err => {
  return {
    type: types.ERROR,
    payload: err
  }
}

// SEARCH AND FILTER ITEMS ON MARKET
export const searchItems = searchTerm => ({
  type: types.SEARCH_ITEMS,
  payload: searchTerm
})

export const filterItems = category => ({
  type: types.FILTER_ITEMS,
  payload: category
})

export const clearSearch = () => ({
  type: types.CLEAR_SEARCH,
  payload: ''
})

// ADD/REMOVE ITEM FROM WISHLIST
export const getWishList = userId => dispatch => {
  axios.get(`${url}/api/users/${userId}/wishlist`).then(res => {
    dispatch({ type: types.GET_WISHLIST, payload: res.data })
  })
}

export const toggleWishList = (userId, itemId, wishList) => dispatch => {
  dispatch(onError(null))
  const currentList = wishList.find(list => list.itemId === itemId)

  if (currentList) {
    axios
      .delete(`${url}/api/users/${userId}/wishlist/${currentList.wishlistId}`)
      .then(() => {
        dispatch(getWishList(userId))
      })
      .catch(err => dispatch(onError(err.message)))
  } else {
    axios
      .post(`${url}/api/users/${userId}/wishlist`, {
        userId: userId,
        itemId: itemId
      })
      .then(() => {
        dispatch(getWishList(userId))
      })
      .catch(err => dispatch(onError(err.message)))
  }
}

export const removeWish = (userId, wish) => dispatch => {
  dispatch(onError(null))
  axios
    .delete(`${url}/api/users/${userId}/wishlist/${wish.wishlistId}`)
    .then(() => {
      dispatch(getWishList(userId))
    })
    .catch(err => dispatch(onError(err.message)))
  // return {
  //   type: types.REMOVE_WISH,
  //   payload: wishList.filter(wish => wish !== id)
  // }
}

// ADD NEW ITEM
export const updateItemForm = item => {
  return {
    type: types.UPDATE_ITEM_FORM,
    payload: item
  }
}

export const postNewItem = (item, userId) => dispatch => {
  dispatch(onError(null))
  dispatch(onLoad(true))

  axios({
    method: 'post',
    url: `${url}/api/items`,
    data: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => console.log(res.data.message))
    .then(() => dispatch(getUserItems(userId))) // this would return {type: types.GET_USER_ITEMS, userItems: res.data})
    .catch(err => dispatch(onError(err.message)))
    .finally(() => dispatch(onLoad(false)))
}

export const onGetItems = items => {
  return {
    type: types.GET_ITEMS,
    payload: items
  }
}

// SIGN UP USER
export const updateSignupForm = form => {
  return {
    type: types.UPDATE_SIGNUP_FORM,
    payload: form
  }
}

export const signupUser = (username, email, password) => dispatch => {
  dispatch(onError(null))
  dispatch(onLoad(true))

  const signupUrl = '/api/users/register'

  axios
    .post(`${url}${signupUrl}`, { username, email, password })
    .then(res => {
      console.log(res)
    })
    .catch(err => dispatch(onError(err)))
    .finally(() => dispatch(onLoad(false)))
}

// MANAGE LOGIN FORM
export const updateLoginForm = item => {
  return {
    type: types.UPDATE_LOGIN_FORM,
    payload: item
  }
}

export const getUserDetails = userId => dispatch => {
  dispatch(onError(null))
  dispatch(onLoad(true))

  axios
    .get(`${url}/api/users/${userId}`)
    .then(res => {
      dispatch({ type: types.GET_USER_DETAILS, userDetails: res.data })
    })
    .catch(err => dispatch(onError(err)))
    .finally(() => dispatch(onLoad(false)))
}

// FETCH ITEMS

export const getMarketItems = () => dispatch => {
  dispatch(onError(null))
  dispatch(onLoad(true))

  axios
    .get(`${url}/api/items`)
    .then(res => {
      dispatch({ type: types.GET_MARKET_ITEMS, payload: res.data })
    })
    .catch(err => dispatch(onError(err)))
    .finally(() => dispatch(onLoad(false)))
}

export const getUserItems = userId => dispatch => {
  dispatch(onError(null))
  dispatch(onLoad(true))

  axios
    .get(`${url}/api/users/${userId}/items`)
    .then(res => dispatch({ type: types.GET_USER_ITEMS, userItems: res.data }))
    .catch(err => dispatch(onError(err)))
    .finally(() => dispatch(onLoad(false)))
}

export const deleteUserItem = (itemId, userId) => dispatch => {
  dispatch(onError(null))
  dispatch(onLoad(true))

  axios
    .delete(`${url}/api/items/${itemId}`)
    .then(() => dispatch(getUserItems(userId))) // this would return {type: types.GET_USER_ITEMS, userItems: res.data})
    .then(res => alert(res.data.message))
    .catch(err => dispatch(onError(err)))
    .finally(() => dispatch(onLoad(false)))
}

// BUY ITEM
// means edit (PUT) item - buyerId, userId, username
export const buyItem = (itemId, updatedItemObj) => dispatch => { 
  axios({
    method: 'put',
    url: `${url}/api/items/${itemId}`,
    data: JSON.stringify(updatedItemObj),
    headers: {
      'Content-Type': 'application/json'
    }
    })
    .then(() => dispatch(getMarketItems()))
  .catch(err => dispatch(onError(err.message)))
}

// WIP
export const addTransaction = (userId, newTransaction) => dispatch => {
  // POST request to change users transaction history
  // URL: /api/users/:id/purchases
  axios({
    method: 'post',
    // url: `${url}/api/users/${userId}/purchases`, // add URL after API endpoint is created
    data: JSON.stringify(newTransaction),
    headers: {
      'Content-Type': 'application/json'
    }
    })
    .then(() => dispatch(/*get transaction history or get it from RESP */))
  .catch(err => dispatch(onError(err.message)))
}

export const getTransactionHistory = (userId) => dispatch => {
// /api/users/:id/transactions
  axios
    .get(`${url}/api/users/${userId}/transactions`)
    .then(res => {
      dispatch({ type: types.GET_TRANSACTION_HISTORY, payload: res.data })
    })
    .catch(err => dispatch(onError(err)))
}

export const newTransaction = newTransaction => {
  return {
    type: types.UPDATE_TRANSACTION_HISTORY,
    payload: newTransaction
  }  
}

// export const editUser = newDetails => {
//   return { type: types.EDIT_USER, payload: newDetails }
// }

export const editUser = (userId, newDetails) => dispatch => {
  axios
    .put(`${url}/api/users/${userId}`, newDetails)
    .then(() => dispatch(getUserDetails(userId)))
}

export const changeFunds = (userId, newFunds) => dispatch => {
  axios
  .put(`${url}/api/users/${userId}`, { funds_balance: newFunds })
  .then(() => dispatch(getUserDetails(userId)))
}
