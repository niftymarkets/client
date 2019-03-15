import React, { Component } from 'react';
import styled from 'styled-components';
import Transaction from './Transaction';

class TransactionHistory extends Component {

  render() {

    if (!this.props.transHist) {
      return <LoadingDiv>Loading transactions...</LoadingDiv>
    }

    return (
      <TransactionContainer>
        <h6>Transactions</h6>
        <StyledTable>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Buyer</th>
              <th>Seller</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.transHist.lenght < 1 ?
              <LoadingDiv>There are no transactions...</LoadingDiv>
              :
              this.props.transHist.map(transaction => (
                <Transaction
                  transaction={transaction}
                  key={transaction.transactionId}
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

const LoadingDiv = styled.p`
  color: #fcfcfc;
  margin: 1rem auto;
`

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


