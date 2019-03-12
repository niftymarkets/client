import * as types from './actionTypes';
import axios from 'axios';

export const url = ''

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


// ADD/REMOVE ITEM FROM WISHLIST
export const toggleWishList = (id, wishList) => {
  let items
  if (wishList.includes(id)) {
    items = wishList.filter(item => item !== id)
  } else {
    items = [...wishList, id]
  }
  return {
    type: types.TOGGLE_WISHLIST,
    payload: items
  }
}

export const removeWish = (id, wishList) => {
    return ({
    type: types.REMOVE_WISH,
    payload: wishList.filter(wish => wish !== id)
  });
};

// ADD NEW ITEM
export const updateItemForm = (item) => {
  return ({
    type: types.UPDATE_ITEM_FORM,
    payload: item,
  });
}

export const postNewItem = (item) => dispatch => {
  dispatch(onError(null));
  dispatch(onLoad(true));

  axios({
    method: 'post',
    url: url,  // FIX URL!
    data: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => dispatch(onGetItems(res.data)))
    .catch(err => dispatch(onError(err.message)))
    .finally(() => dispatch(onLoad(false)));
}

export const onGetItems = (items) => {
  return ({
    type: types.GET_ITEMS,
    payload: items,
  });
}

// MANAGE LOGIN FORM
export const updateLoginForm = item => {
  return {
    type: types.UPDATE_LOGIN_FORM,
    payload: item,
  };
}

export const loginUser = (username, password) => dispatch => {
  dispatch(onError(null));
  dispatch(onLoad(true));
  axios.post(url, { username, password }) // FIX URL!
    .then(res => {
      dispatch({ type: types.IS_AUTHED, payload: res.data.payload });
    })
    .catch(err => dispatch(onError(err)))
    .finally(() => dispatch(onLoad(true)));
}