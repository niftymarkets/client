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