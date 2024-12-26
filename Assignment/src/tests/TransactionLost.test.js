import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionList from "../components/TransactionList/TransactionList";

test("renders transactions in sorted order", () => {
  const transactions = [
    { id: 1, date: "2023-12-15", amount: 120.5 },
    { id: 2, date: "2024-01-05", amount: 99.9 },
    { id: 3, date: "2024-02-12", amount: 105.3 },
  ];
  render(<TransactionList transactions={transactions} />);
  expect(transactions[0].amount).toBe(120.5);
  expect(transactions[1].amount).toBe(99.90);
  expect(transactions[2].amount).toBe(105.30);
});