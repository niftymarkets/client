import React from 'react'
import ItemCard from '../common/ItemCard'

const Gallery = ({ gameItems }) => {
  return (
    <div>
      {gameItems.map(item => (
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
