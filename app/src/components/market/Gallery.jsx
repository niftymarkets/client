import React from 'react'
import ItemCard from '../common/ItemCard'

const Gallery = ({ gameItems }) => {
  return (
    <div>
      {gameItems &&
        gameItems.length > 0 &&
        gameItems.map(item => (
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
