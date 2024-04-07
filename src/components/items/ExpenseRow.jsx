import React from "react";

function ExpenseRow(props) {
  const { expense } = props;

  return (
    <div data-testid='expense-row' className="card card-row p-3 mb-2 row-expense">
      {expense && (
        <>
          <p>{expense.name}</p>
          <p className="amount">
            {new Intl.NumberFormat("en-za", {
              style: "currency",
              currency: "ZAR",
            }).format(expense.cost)}
          </p>
        </>
      )}
    </div>
  );
}

export default ExpenseRow;
