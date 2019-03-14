import React, { Component } from 'react'
import styled from 'styled-components'
import ItemForm from './AddItemForm'
import ItemCard from '../common/ItemCard'

class CurrentItems extends Component {
  render() {
    if (this.props.userItems.length < 1) {
      return <LoadingDiv>Loading user items...</LoadingDiv>
    }

    return (
      <UserItemsContainer>
        <p>Add new item here!</p>
        <ItemForm />
        <div>
          <h6>Your current items:</h6>
          <ItemsContainer>
            {this.props.userItems.map(item => (
              <ItemCard key={item.itemId} item={item} hasDeleteButton={true} />
            ))}
          </ItemsContainer>
        </div>
      </UserItemsContainer>
    )
  }
}

export default CurrentItems


const LoadingDiv = styled.h6`
  color: #fcfcfc;
  margin: 1rem auto;
`
const UserItemsContainer = styled.div`
  margin: 0 2rem;
`

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem -1rem;
`

