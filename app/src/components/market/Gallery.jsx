import React from "react";
import ItemCard from "../common/ItemCard";
import styled from "styled-components";

const Gallery = ({ availableItems }) => {
  return (
    <GalleryItems>
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
    </GalleryItems>
  );
};

const GalleryItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem -1rem;
`

export default Gallery

