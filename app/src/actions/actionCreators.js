import * as types from './actionTypes';
// import axiosFunctions!

export const url = '';

// actionCreator template
export const actionName = (args) => dispatch => { // rename function accordingly
  dispatch(onError(null));
  dispatch(onLoad(true));

  // axios function here
  // .then(res => dispatch(onFetch(res.data)))
  //   .catch(err => dispatch(onError(err.message)))
  //   .finally(() => dispatch(onLoad(false)));
};

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

