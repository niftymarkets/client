import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionHistory extends Component {
  render() {
    return (
      <div>
        <h2>I'm the Transaction History!</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>To/From</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.transHist.boughtItems.map(transaction => (
                <Transaction
                  transaction={transaction}
                  key={transaction.itemId}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}


export default TransactionHistory;

