import React, { Component } from 'react'
import styled from 'styled-components'
import ItemCard from '../common/ItemCard'

class CurrentItems extends Component {
  render() {
    if (!this.props.userItems) {
      return <LoadingDiv>Loading user items...</LoadingDiv>
    }

    return (
      <UserItemsContainer>
          <h6>Your current items:</h6>
          <ItemsContainer>
            {
              this.props.userItems.length < 1 ?
              (<LoadingDiv>You do not have any items. See Market to get some.</LoadingDiv>)
              :
              this.props.userItems.map(item => (
              <ItemCard key={item.itemId} item={item} hasDeleteButton={true} />
            ))
            
            }
          </ItemsContainer>
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

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    align-items: center;
  }
`

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem -1rem;

  @media (max-width: 750px) {
    justify-content: space-around;
  }
`

