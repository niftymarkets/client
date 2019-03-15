import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  toggleWishList,
  deleteUserItem,
  // buyItem,
  newTransaction,
  changeFunds,
  changeItemAvailability
} from '../../actions/actionCreators'
import { Link } from 'react-router-dom'

class ItemCard extends Component {
  buyClickHandler = () => {
    const itemOwnerId = this.props.item.userId
    const currentUserBuyingItemId = this.props.userId

    // const newItemObject = {
    //   ...this.props.item,
    //   buyerId: currentUserBuyingItemId,
    //   userId: currentUserBuyingItemId,
    //   username: this.props.username,
    //   availability: 0,
    // }
    const newTransaction = {
      buyerId: currentUserBuyingItemId,
      sellerId: itemOwnerId,
      itemId: this.props.item.itemId
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
        `Do you really want to buy ${this.props.item.name} for ${
          this.props.item.price
        }?`
      )

      if (userConfirm) {
        // ITEM PUT request to change users owner
        // this.props.buyItem(this.props.item.itemId, newItemObject)

        // USER state change in transaction history
        this.props.newTransaction(currentUserBuyingItemId, newTransaction)
        // USER PUT request to change users funds_balance
        this.props.changeFunds(currentUserBuyingItemId, newUserFunds)
      }
    }
  }

  radioHandler = e => {
    this.props.changeItemAvailability(
      this.props.item.itemId,
      this.props.userId,
      {
        availability: e.target.value
      }
    )
  }

  render() {
    const {
      item,
      toggleWishList,
      wishList,
      hasBuyButton,
      hasWishlist,
      hasDeleteButton,
      userId
    } = this.props

    const checkWishlist =
      wishList && wishList.find(list => list.itemId === item.itemId)

    return (
      <CardWrap>
        <ImageWrap>
          <img src={item.img_url} alt='Item' />
        </ImageWrap>

        <ItemName>
          {item.name} • ${item.price}
        </ItemName>
        <ItemDetails>
          <Description>{item.description}</Description>

          <Meta>
            <Paragraph>
              <Icons className='fas fa-user' />
              {item.username}
            </Paragraph>
            <Paragraph>
              <Icons className='fas fa-tags' />
              {item.category}
            </Paragraph>
          </Meta>
        </ItemDetails>

        {/* Conditonals for card options */}
        <MarketOptions>
          {hasBuyButton ? (
            localStorage.getItem('jwt') ? (
              <Button onClick={this.buyClickHandler}>Buy</Button>
            ) : (
              <Link to='/login'>
                <Button>Buy</Button>
              </Link>
            )
          ) : null}

          {hasWishlist && localStorage.getItem('jwt') ? (
            <div onClick={() => toggleWishList(userId, item.itemId, wishList)}>
              {checkWishlist ? (
                <Button>
                  <i className='fas fa-star' /> Remove from Wishlist
                </Button>
              ) : (
                <Button>
                  <i class='far fa-star' /> Add to Wishlist
                </Button>
              )}
            </div>
          ) : null}
        </MarketOptions>

        {hasDeleteButton ? (
          <UserOptions>
            <p>Should the item be available on the market?</p>
            <SellOption>
              <RadioLabel>
                <input
                  type='radio'
                  value='1'
                  checked={item.availability === 1}
                  name='availability'
                  onChange={this.radioHandler}
                />
                Yes
              </RadioLabel>

              <RadioLabel>
                <input
                  type='radio'
                  value='0'
                  checked={item.availability === 0}
                  name='availability'
                  onChange={this.radioHandler}
                />
                No
              </RadioLabel>
            </SellOption>

            <Button
              onClick={() =>
                this.props.deleteUserItem(item.itemId, this.props.userId)
              }
            >
              Delete Item
            </Button>
          </UserOptions>
        ) : null}
      </CardWrap>
    )
  }
}

const mapStateToProps = state => {
  return {
    wishList: state.user.wishList,
    userId: state.user.userDetails.userId,
    funds_balance: state.user.userDetails.funds_balance,
    username: state.user.userDetails.username
  }
}

export default connect(
  mapStateToProps,
  {
    toggleWishList,
    deleteUserItem,
    // buyItem,
    newTransaction,
    changeFunds,
    changeItemAvailability
  }
)(ItemCard)

const CardWrap = styled.div`
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 3px;
  margin: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
  background: #212b38;

  @media (max-width: 550px) {
    flex: 0 0 95%;
    margin: 10px;
  }
`

const ImageWrap = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 5px 5px 0 0;
  text-align: center;
  padding: 5px;
  img {
    max-width: 100%;
    height: 100%;
  }
`

const ItemName = styled.h4`
  font-size: 1.2rem;
  text-align: center;
  margin: 10px 0 5px 0;
`
const ItemDetails = styled.div`
  padding: 0 10px;
`

const Paragraph = styled.p`
  color: white;
  margin-bottom: 5px;
`

const Description = styled.p`
  color: white;
  font-style: italic;
  font-size: 0.8rem;
  text-align: center;
`

const Meta = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  p:first-child {
    margin-right: 10px;
  }
`
const Icons = styled.i`
  font-size: 0.7rem;
  margin-right: 5px;
  color: #01d6c8;
`

const MarketOptions = styled.div`
  display: flex;
  flex-direction: column;
`
const Button = styled.div`
  text-align: center;
  border-radius: 4px;
  padding: 5px 0;
  width: 80%;
  margin: 0 auto 10px auto;
  color: white;
  background: #0299a0;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Ubuntu', sans-serif;
  &:hover {
    background: #85bdbf;
  }
`

const UserOptions = styled.div`
  p {
    color: white;
    text-align: center;
  }
`

const RadioLabel = styled.label`
  color: white;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  :first-child {
    margin-right: 10px;
  }
  input {
    cursor: pointer;
  }
`

const SellOption = styled.form`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`
