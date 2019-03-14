import React from 'react'
import ItemCard from '../common/ItemCard'
import styled from 'styled-components'

const Gallery = ({ marketItems }) => {
  return (
    <GalleryItems>
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
    </GalleryItems>
  )
}

const GalleryItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export default Gallery
