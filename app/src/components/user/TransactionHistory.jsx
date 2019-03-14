import React, { Component } from 'react';
import styled from 'styled-components';
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
      <TransactionContainer>
        <h6>Transactions</h6>
        <StyledTable>
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
        </StyledTable>
      </TransactionContainer>
    );
  }
}


export default TransactionHistory;

const TransactionContainer = styled.div`
  margin: 1rem 0;

  h6 {
    margin-bottom: 0.5rem;
  }
`


const StyledTable = styled.table`
  border: 1px solid #212b38;
  border-radius: 4px;
  padding: 0.5rem;
  min-width: 350px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);

  thead {
    background-color: #212b38;
    color:  #0299a0;
    font-weight: 600;
    text-align: center;

    th {
      padding: 0 0.5rem;
    }

    th:first-child {
      min-width: 145px;
    }
  }

  tbody {
    text-align: center;
  }
`


