// Actions
// export const FETCH_ITEMS = 'FETCH_ITEMS'
export const SEARCH_ITEMS = 'SEARCH_ITEMS'
export const FILTER_ITEMS = 'FILTER_ITEMS'
export const TOGGLE_WISHLIST = 'FILTER_ITEMS'

// export const fetchItems = () => ({ type: FETCH_ITEMS, payload: dummyItemData })
export const searchItems = name => ({ type: SEARCH_ITEMS, payload: name })
export const filterItems = category => ({
  type: FILTER_ITEMS,
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
    type: TOGGLE_WISHLIST,
    payload: items
  }
}

const user = {
  userId: 1,
  name: 'Frank1',
  balance: 100,
  wishList: [1],
  userItems: [2, 3],
  transactionHistory: []
}

const gameItems = [
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
]

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case TOGGLE_WISHLIST: {
      return {
        ...state,
        wishList: action.payload
      }
    }
    default:
      return state
  }
}

export const gameItemsReducer = (state = gameItems, action) => {
  switch (action.type) {
    default:
      return state
  }
}
