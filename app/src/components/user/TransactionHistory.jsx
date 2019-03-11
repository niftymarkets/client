import React, { Component } from 'react'

class TransactionHistory extends Component {
  render() {
    return (
      <div>
        <h2>I'm the Transaction History!</h2>
        {
          this.props.transHist.map(transaction => (
            <ul key={transaction.id}>
              <li>
                <span>{transaction.date} - </span>
                {/* itemId needs to target an Item name in state.item */}
                <span>{transaction.itemId} - </span> 
                <span>{transaction.price} - </span>
                <span>{transaction.otherUser}</span>
              </li>
            </ul>
          ))
        }
      </div>
    );
  }
}

export default TransactionHistory
