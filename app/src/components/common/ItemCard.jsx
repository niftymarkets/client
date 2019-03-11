import React from 'react'

const ItemCard = ({ item }) => {
  return (
    <div>
      <div>
        <img src={item.imgUrl} alt='Item' />
      </div>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <p>{item.owner}</p>
      <p>#{item.category}</p>
      {/* Conditional will go here */}
    </div>
  )
}

export default ItemCard
