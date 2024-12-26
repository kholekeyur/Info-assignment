import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchTransactions } from '../../utils/api';
import { calculatePoints } from '../../utils/calculatePoints';
import './TransactionList.css';
import { Transaction } from '../../App';

interface TransactionListProps {
    transactions: Transaction[];
  }
  
  const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
    return (
      <div className='treansaction-s'>
        <h2>Transaction List</h2>
        <ul>
          {transactions.map((txn) => (
            <li key={txn.id}>
              {txn.date}: ${txn.amount}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TransactionList;
  
