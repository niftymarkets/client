import React from 'react'

const Tabs = ({ filterItems, categories }) => {
  return (
    <div>
      {categories.map(category => (
        <div key={category.name} onClick={() => filterItems(category.id)}>
          {category.name} ({category.count})
          {category.isActive && 'This is the active tab'}
        </div>
      ))}
    </div>
  )
}

export default Tabs
