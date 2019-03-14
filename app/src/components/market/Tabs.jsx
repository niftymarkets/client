import React from 'react'

const Tabs = ({ filterItems, categories }) => {
  return (
    <div>
      <h3>
        Categories <i className ='fas fa-tags' />
      </h3>
      {categories.map(category => (
        <div key={category.name} onClick={() => filterItems(category.id)}>
          {category.name} ({category.count})
          <span>{category.isActive && 'This is the active category'}</span>
        </div>
      ))}
    </div>
  )
}

export default Tabs
