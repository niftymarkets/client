import React from 'react'
import ItemCard from '../common/ItemCard'

const Gallery = ({ marketItems }) => {
  return (
    <div>
      {marketItems &&
        marketItems.length > 0 &&
        marketItems.map(item => (
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
