// Actions
// export const FETCH_ITEMS = 'FETCH_ITEMS'
export const SEARCH_ITEMS = 'SEARCH_ITEMS'
export const FILTER_ITEMS = 'FILTER_ITEMS'

// export const fetchItems = () => ({ type: FETCH_ITEMS, payload: dummyItemData })
export const searchItems = name => ({ type: SEARCH_ITEMS, payload: name })
export const filterItems = category => ({
  type: FILTER_ITEMS,
  payload: category
})

// Reducers
// export const gameItems = (state = dummyItemData, action) => {
//   switch (action.type) {
//     case SEARCH_ITEMS:
//       return state
//     case FILTER_ITEMS:
//       return state
//     default:
//       return state
//   }
// }
