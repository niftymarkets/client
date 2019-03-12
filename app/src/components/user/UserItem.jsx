import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemCard from '../common/ItemCard'

class UserItem extends Component {
  render() {
    const userItem = this.props.gameItems.filter(
      item => item.itemId === this.props.item
    )

    return <ItemCard item={userItem[0]} hasDeleteButton={true} />
  }
}

const mapStateToProps = state => {
  return {
    gameItems: state.gameItems
  }
}

export default connect(
  mapStateToProps,
  {}
)(UserItem)
