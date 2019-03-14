import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionHistory extends Component {

  arrayZip = (boughtArr, soldArr) => {
    const longer = boughtArr.length >= soldArr.length ? boughtArr : soldArr;
    const shorter = longer === boughtArr ? soldArr : boughtArr;
    let zippedArr = [];
    for (var i = 0; i < shorter.length; i++) {
      zippedArr.push(longer[i]);
      zippedArr.push(shorter[i]);
    }
    if (i < longer.length) {
      zippedArr.push(longer[i]);
    }
    return zippedArr
  }

  render() {
    const { boughtItems, soldItems } = this.props.transHist;
    const zippedArray = this.arrayZip(boughtItems, soldItems);
    return (
      <div>
        <h6>Transactions</h6>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>To/From</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {
              zippedArray.reverse().map(transaction => (
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

