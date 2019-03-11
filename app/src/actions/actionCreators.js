import * as types from './actionTypes';
import axios from 'axios';

export const url = '';

// Action creatros
export const onLoad = bool => {
  return ({
    type: types.LOADING,
    payload: bool,
  });
}

export const onError = err => {
  return ({
    type: types.ERROR,
    payload: err,
  });
}

export const searchItems = name => ({ 
  type: types.SEARCH_ITEMS, payload: name 
})

export const filterItems = category => ({
  type: types.FILTER_ITEMS,
  payload: category
})

export const toggleWishList = (id, wishlist) => {
  let items
  if (wishlist.includes(id)) {
    items = wishlist.filter(item => item !== id)
  } else {
    items = [...wishlist, id]
  }
  return {
    type: types.TOGGLE_WISHLIST,
    payload: items
  }
}

export const removeWish = (id, wishList) => {
  return ({
    type: types.REMOVE_WISH,
    payload: wishList.filter(wish => wish !== id),
  });
};


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
    url: url,
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
