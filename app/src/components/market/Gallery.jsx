import React from 'react'
import ItemCard from '../common/ItemCard'

const Gallery = ({ availableItems }) => {
  return (
    <div>
      {availableItems &&
        availableItems.length > 0 &&
        availableItems.map(item => (
          <ItemCard
            key={item.itemId}
            item={item}
            hasBuyButton={true}
            hasWishlist={true}
          />
        ))}
    </div>
  )
}

export default Gallery
