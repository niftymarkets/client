import matchSorter from 'match-sorter'

const defaultCategories = [
  { name: 'All', id: '' },
  { name: 'Outfits', id: 'outfits' },
  { name: 'Emotes', id: 'emotes' },
  { name: 'Toys', id: 'toys' },
  { name: 'Pets', id: 'pets' }
]

// THE CODE BELOW HANDLES THE SEARCH AND TABS FEATURES
// Ideally we'd have a search api that provides pagination and category counts, but for now everything is calculated in the client side
// Ideally this should be outside the render for optimization, but works for now

function searchMachine(gameItems, marketSearch, activeCategory) {
  // This is the initial categories object
  let searchResults
  // this creates a new category object based on the number of items available
  const newCategories = defaultCategories.map(category => {
    // COUNTER
    // find the the number of items in each category
    // we need to do this for each category because we need to get the total count of each category
    const categoryItems = matchSorter(gameItems, category.id, {
      keys: ['category'],
      threshold: matchSorter.rankings.EQUAL
    })
    // count checks for the number of items that matchSorter above returns
    let count = categoryItems ? categoryItems.length : 0

    // find the number of items *after* they are filtered by a search term
    if (marketSearch) {
      const searchItems = matchSorter(categoryItems, marketSearch, {
        keys: ['name'],
        threshold: matchSorter.rankings.CONTAINS
      })
      // override count so we have the count *after* search is done
      count = searchItems ? searchItems.length : 0
    }

    // FILTER
    // only pass the active categories items to the item list that we will show in gallery
    if (activeCategory === category.id) {
      searchResults = [...categoryItems]
      // filter the items above by the provided search term
      if (marketSearch) {
        searchResults = matchSorter(searchResults, marketSearch, {
          keys: ['name'],
          threshold: matchSorter.rankings.CONTAINS
        })
      }
    }

    // NEW OBJECT
    let newCategory = {
      name: category.name,
      id: category.id,
      count: count,
      isActive: activeCategory === category.id
    }

    return newCategory
  })

  return { newCategories, searchResults }
}

export default searchMachine
