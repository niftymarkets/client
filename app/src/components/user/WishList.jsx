import React, { Component } from 'react'
import styled from 'styled-components'
import Wish from './Wish'

class WishList extends Component {
  render() {
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
`
