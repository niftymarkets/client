import React, { Component } from 'react'
import { connect } from 'react-redux'

class Transaction extends Component {
  render() {
    // console.log(this.props.transaction)
    const { name, price, username, availability } = this.props.transaction

    return (
      <tr>
        <td>{name}</td>
        <td>$ {price}</td>
        <td>{username}</td>
        <td>{availability}</td>
      </tr>
      // <tr>
      //   <td>name</td>
      //   <td>$ price</td>
      //   <td>otherUser</td>
      //   <td>date</td>
      // </tr>
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
