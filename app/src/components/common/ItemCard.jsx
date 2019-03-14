import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  toggleWishList,
  deleteUserItem,
  buyItem,
  newTransaction,
  changeFunds
} from '../../actions/actionCreators'
import { Link } from 'react-router-dom'

class ItemCard extends Component {

  buyClickHandler = () => {
    const itemOwnerId = this.props.item.userId;
    const currentUserBuyingItemId = this.props.userId;

    const newItemObject = {
      ...this.props.item,
      buyerId: null,
      userId: currentUserBuyingItemId,
      username: this.props.username,
    }
    const newTransaction = {
      ...this.props.item,
      username: this.props.item.username
    }

    const newUserFunds = this.props.funds_balance - this.props.item.price

    if (itemOwnerId === currentUserBuyingItemId) {
      alert('You can not buy your own item')
    } else if (this.props.funds_balance < this.props.item.price) {
      alert('Insufficient funds in your account')
    } 
    

    if (
      itemOwnerId !== currentUserBuyingItemId &&
      this.props.funds_balance > this.props.item.price
    ) {
      const userConfirm = window.confirm(
        `Do you really want to buy ${this.props.item.name} for ${this.props.item.price}?`
      )

      if (userConfirm) {
        // ITEM PUT request to change users owner
        this.props.buyItem(this.props.item.itemId, newItemObject);
        // USER PUT request to change users funds_balance
        this.props.changeFunds(currentUserBuyingItemId, newUserFunds)
        // USER state change in transaction history - will be POST req to USER trans.history when created
        this.props.newTransaction(newTransaction);
        
        console.log('new user funds', newUserFunds)
      }
    }
  }

  render() {
    const {
      item,
      toggleWishList,
      wishList,
      hasBuyButton,
      hasWishlist,
      hasDeleteButton,
      userId,
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
            <button onClick={this.buyClickHandler}>Buy</button>
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
            onClick={() => this.props.deleteUserItem(item.itemId, this.props.userId)}
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
    userId: state.user.userDetails.userId,
    funds_balance: state.user.userDetails.funds_balance,
    username: state.user.userDetails.username,
  }
}

export default connect(
  mapStateToProps,
  {
    toggleWishList,
    deleteUserItem,
    buyItem,
    newTransaction,
    changeFunds,
  }
)(ItemCard)

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  border: 1px solid black;
  border-radius: 4px;
  margin: 1rem;
  background: lightgrey;
  div {
    img {
      max-width: 100%;
    }
  }
  p {
    margin: 0;
  }
`
