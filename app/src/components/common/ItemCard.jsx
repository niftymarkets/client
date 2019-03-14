import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { toggleWishList, deleteUserItem } from '../../actions/actionCreators'
import { Link } from 'react-router-dom'

class ItemCard extends Component {
  render() {
    const {
      item,
      toggleWishList,
      wishList,
      hasBuyButton,
      hasWishlist,
      hasDeleteButton,
      pathname,
      userId
    } = this.props

    const checkWishlist =
      wishList && wishList.find(list => list.itemId === item.itemId)

    return (
      <ItemWrap>
        <div>
          <img src={item.img_url} alt='Item' />
        </div>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <p>@{item.username}</p>
        <p>#{item.category}</p>
        {item.availability === 0 ? <p>Sold</p> : <p>Available</p>}

        {/* Conditonals for card options */}
        {hasBuyButton ? (
          localStorage.getItem('jwt') ? (
            <button>Buy</button>
          ) : (
            <Link to='/login'>
              <button>Buy</button>
            </Link>
          )
        ) : null}

        {hasWishlist && localStorage.getItem('jwt') ? (
          <button onClick={() => toggleWishList(userId, item.itemId, wishList)}>
            {checkWishlist ? `Remove from Wishlist` : `Add to Wishlist`}
          </button>
        ) : null}

        {hasDeleteButton ? (
          <button
            onClick={() => this.props.deleteUserItem(item.itemId, pathname)}
          >
            Delete Item
          </button>
        ) : null}
      </ItemWrap>
    )
  }
}

const mapStateToProps = state => {
  return {
    wishList: state.user.wishList,
    userId: state.user.userDetails.userId
  }
}

export default connect(
  mapStateToProps,
  { toggleWishList, deleteUserItem }
)(ItemCard)

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  border-radius: 4px;
  margin: 1rem;
  div {
    img {
      max-width: 100%;
    }
  }
  p {
    margin: 0;
  }
`
