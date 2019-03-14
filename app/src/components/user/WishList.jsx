import React, { Component } from 'react'
import styled from 'styled-components'
import Wish from './Wish'

class WishList extends Component {
  render() {

    if (!this.props.wishList) {
      return <LoadingDiv>Loading your wishes...</LoadingDiv>
    }

    return (
      <WishListContainer>
        <h6>Your Wishlist:</h6>
        <StyledList>
          {
            this.props.wishList.length < 1 ?
              <li>You have no items in your wishlist</li>
            :
            this.props.wishList.map(wish => (
            <Wish key={wish.wishlistId} wish={wish} />
          ))}
        </StyledList>
      </WishListContainer>
    )
  }
}

export default WishList

const LoadingDiv = styled.p`
  color: #fcfcfc;
  margin: 1rem auto;
`

const WishListContainer = styled.div`
  h6 {
    margin-bottom: 0.5rem;
  }
`

const StyledList = styled.ul`
  border: 1px solid #212b38;
  border-radius: 4px;
  padding: 0.5rem;
  min-width: 350px;

  li {
    color: #fcfcfc;
  }
`
