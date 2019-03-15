import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class Transaction extends Component {
  render() {
    const { name, price, buyer, seller } = this.props.transaction

    return (
      <TableLine>
        <td>{name}</td>
        <td>$ {price}</td>
        <td>{buyer}</td>
        <td>{seller}</td>
      </TableLine>
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

const TableLine = styled.tr`
  padding: 0 0.5rem;
  color: #fcfcfc;
`