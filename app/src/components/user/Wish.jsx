import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { removeWish } from '../../actions/actionCreators'

class Wish extends Component {
  onClickHandler = () => {
    this.props.removeWish(this.props.userDetails.userId, this.props.wish)
  }

  render() {
    return (
      <StyledWish>
        <span>{this.props.wish.name}</span> <button onClick={this.onClickHandler}>X</button>
      </StyledWish>
    )
  }
}

const mapStateToProps = state => {
  return {
    userDetails: state.user.userDetails,
    wishList: state.user.wishList
  }
}

export default connect(
  mapStateToProps,
  { removeWish }
)(Wish)

const StyledWish = styled.div`
  width: 100%;
  background-color: #212b38;
  border-radius: 4px;
  color: #fcfcfc;
  padding: 0.5rem;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-between;
  font-weight: 600;

`
// <i className='fas fa-times' onClick={() => this.clearSearch()} />