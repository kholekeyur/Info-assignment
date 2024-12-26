import React, { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList/TransactionList';
import TransactionForm from './components/TransactionForm/TransactionForm';
import PointsSummary from './components/PointsSummary/PointsSummary';
import { fetchTransactions } from './utils/api';
import { calculatePoints } from './utils/calculatePoints';
import './App.css';

export interface Transaction {
  id: number;
  date: string;
  amount: number;
}

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [pointsByMonth, setPointsByMonth] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
        updatePoints(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };
    loadTransactions();
  }, []);

  const updatePoints = (transactions: Transaction[]) => {
    const points = transactions.reduce((acc, txn) => {
      const month = txn.date.slice(0, 7);
      const points = calculatePoints(txn.amount);
      acc[month] = (acc[month] || 0) + points;
      return acc;
    }, {} as { [key: string]: number });
    setPointsByMonth(points);
  };

  const handleAddTransaction = (newTxn: Transaction) => {
    const updatedTransactions = [...transactions, newTxn];
    setTransactions(updatedTransactions);
    updatePoints(updatedTransactions);
  };

  if (loading) return <p>Loading transactions...</p>;

  return (
    <div className="App">
      <h1>Reward Points Calculator</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
      <PointsSummary pointsByMonth={pointsByMonth} />
    </div>
  );
};

export default App;