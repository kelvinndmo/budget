import React from "react";

export default (expenses, { text, startDate, EndDate, sortBy }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const EndDateMatch =
        typeof EndDate !== "number" || expense.createdAt <= EndDate;
      // const textMatch = expense.description
      //   .toLowerCase()
      //   .includes(text.toLowerCase());

      return startDateMatch && EndDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
