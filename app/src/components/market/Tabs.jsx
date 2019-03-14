import React from 'react'
import styled from 'styled-components'

const Tabs = ({ filterItems, categories }) => {
  return (
    <TabsWrapper>
      <TitleWrapper>
        <Heading>Categories</Heading>
        <Icon className='fas fa-tags' />
      </TitleWrapper>
      <TabList>
        {categories.map(category => (
          <Category
            key={category.name}
            onClick={() => filterItems(category.id)}
            active={category.isActive ? true : false}
          >
            <span>{category.name}</span>
            <span>{category.count}</span>
          </Category>
        ))}
      </TabList>
    </TabsWrapper>
  )
}

const TabsWrapper = styled.div`
  margin: 1rem 10px;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Heading = styled.h3`
  font-size: 1.3rem;
`

const Icon = styled.h3`
  font-size: 1rem;
`
const TabList = styled.div`
  margin-top: 1rem;
`

const Category = styled.div`
  padding: 5px 5px;
  margin: 5px 0;
  background: ${props => (props.active ? 'rgba(2, 153, 160, 0.8)' : '#212b38')};
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background: ${props =>
      props.active ? 'rgba(2, 153, 160, 0.8)' : 'rgba(2, 153, 160, 0.3)'};
  }
  span {
    color: white;
  }
`

export default Tabs
