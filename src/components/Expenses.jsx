import React from "react";
import { Form, Button } from "react-bootstrap";
import ExpenseRow from "./items/ExpenseRow";
import { dummyExpenses } from "../utils";

function Expenses(props) {
  const { expenses, setExpenses } = props;

  const handleForm = (e) => {
    e.preventDefault();
    const name = document.getElementById("title").value;
    const cost = document.getElementById("expense").value;
    if (name === "" || cost === "") {
      alert("Please fill out all fields");
      return;
    }
    setExpenses([
      ...expenses,
      {
        name: name.charAt(0).toUpperCase() + name.slice(1),
        cost: Number(cost),
      },
    ]);
    document.getElementById("title").value = "";
    document.getElementById("expense").value = "";
  };

  return (
    <div>
      <h3>Household Montly Expenses</h3>
      {/* Form */}

      <div className="form-row">
        <Form.Control
          type="text"
          id="title"
          name="title"
          placeholder="Expense Title"
          autoComplete="off"
        />
        <Form.Control
          type="number"
          id="expense"
          name="expense"
          step="0.01"
          placeholder="0.00"
          autoComplete="off"
        />
        <Button onClick={handleForm} className="add-expenses">
          Add
        </Button>
      </div>

      {/* List */}
      <div className="expense-outer hide-scroll">
        {expenses &&
          expenses.map((item, index) => (
            <ExpenseRow key={index} expense={item} />
          ))}
      </div>
    </div>
  );
}

export default Expenses;
