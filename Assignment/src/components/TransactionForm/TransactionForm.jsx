
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TransactionForm.css';

const TransactionForm = ({ onAddTransaction }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !date) return alert('Both fields are required!');
    onAddTransaction({ amount: parseFloat(amount), date });
    setAmount('');
    setDate('');
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        step="0.01"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <div className='But'>
      <button type="submit">Add Transaction</button>
      </div>
    </form>
  );
};

TransactionForm.propTypes = {
  onAddTransaction: PropTypes.func.isRequired,
};

export default TransactionForm;
