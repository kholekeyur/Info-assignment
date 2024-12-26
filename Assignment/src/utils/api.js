export const fetchTransactions = async () => {
    const transactions = [
      { id: 1, date: '2023-12-15', amount: 120.5 },
      { id: 2, date: '2024-01-05', amount: 99.9 },
      { id: 3, date: '2024-02-12', amount: 105.3 },
    ];
    return new Promise((resolve) => setTimeout(() => resolve(transactions), 1000));
  };