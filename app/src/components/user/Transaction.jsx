import React, { Component } from 'react'
import { connect } from 'react-redux'

class Transaction extends Component {
  render() {
    const { name, price, username, category } = this.props.transaction

    return (
      <tr>
        <td>{name}</td>
        <td>$ {price}</td>
        <td>{username}</td>
        <td>{category}</td>
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
