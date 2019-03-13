import React, { Component } from 'react'
import { connect } from 'react-redux'

class Transaction extends Component {
  render() {
    const { itemId, price, otherUser, date } = this.props.transaction
    const transactedItem = this.props.marketItems.filter(
      item => item.itemId === itemId
    )
    return (
      <tr>
        <td>{transactedItem[0].name}</td>
        <td>$ {price}</td>
        <td>{otherUser}</td>
        <td>{date}</td>
      </tr>
    )
  }
}

const mapStateToProps = state => {
  return {
    marketItems: state.marketItems
  }
}

export default connect(
  mapStateToProps,
  {}
)(Transaction)
