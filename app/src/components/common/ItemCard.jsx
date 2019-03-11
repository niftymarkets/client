import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { toggleWishList } from '../../actions/actionCreators'

// item, isAuthed, toggleWishList
class ItemCard extends Component {
  render() {
    // console.log(this.props)
    const { item, toggleWishList, wishlist, isAuthed } = this.props
    return (
      <ItemWrap>
        <div>
          <img src={item.imgUrl} alt='Item' />
        </div>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <p>{item.owner}</p>
        <p>#{item.category}</p>
        {isAuthed ? (
          <div>
            <button>Buy</button>
          </div>
        ) : (
          <button>Buy</button>
        )}
        <button onClick={() => toggleWishList(item.itemId, wishlist)}>
          Toggle wishlist
        </button>
      </ItemWrap>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    isAuthed: state.isAuthed,
    wishlist: state.user.wishList
  }
}

export default connect(
  mapStateToProps,
  { toggleWishList }
)(ItemCard)

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  border: 1px solid black;
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
`;
