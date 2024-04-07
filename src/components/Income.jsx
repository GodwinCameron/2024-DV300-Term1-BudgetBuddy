import React from "react";
import PersonIncomeRow from "./items/PersonIncomeRow";
import { Button, Form } from "react-bootstrap";
import { dummyIncome, iconOptions } from "../utils";

function Income(props) {
  const { income } = props;

  console.log(props.income);
  const handleIncome = (e) => {
    e.preventDefault();
    const icon = e.target.icon.value;
    const name = e.target.name.value;
    const salary = e.target.income.value;
    // tax section
    const taxedAmount = { percent: 0, extra: 0 };
    if (salary <= 237100) {
      taxedAmount.percent = 0.18;
      taxedAmount.extra = 0;
    } else if (salary <= 370500) {
      taxedAmount.percent = 0.26;
      taxedAmount.extra = 42678;
    } else if (salary <= 512800) {
      taxedAmount.percent = 0.31;
      taxedAmount.extra = 77362;
    } else if (salary <= 673000) {
      taxedAmount.percent = 0.36;
      taxedAmount.extra = 121475;
    } else if (salary <= 857900) {
      taxedAmount.percent = 0.39;
      taxedAmount.extra = 179147;
    } else if (salary <= 1817000) {
      taxedAmount.percent = 0.41;
      taxedAmount.extra = 251258;
    } else {
      taxedAmount.percent = 0.45;
      taxedAmount.extra = 644489;
    }
    const tax = {
      percent: taxedAmount.percent,
      extra: taxedAmount.extra,
      amount: salary * taxedAmount.percent + taxedAmount.extra,
    };
    if (icon === "-" || name === "" || salary === "") {
      alert("Please fill out all fields");
      return;
    }
    props.setIncome([...props.income, { icon, name, salary, tax }]);
    e.target.reset();
  };

  return (
    <div>
      <h3>Household Montly Salaries</h3>

      {/* Form */}
      <form data-testid="form" onSubmit={handleIncome} className="form-row">
        <Form.Select
          name="icon"
          defaultValue="-"
          autoComplete="off"
        >
          <option disabled>-</option>
          {iconOptions.map((icon, index) => (
            <option key={index} value={icon}>
              {icon}
            </option>
          ))}
        </Form.Select>
        <Form.Control
          type="text"
          id="name"
          name="name"
          placeholder="Member Name"
          autoComplete="off"
        />
        <Form.Control
          type="number"
          id="income"
          name="income"
          step="0.01"
          placeholder="0.00"
          autoComplete="off"
        />
        <Button type="submit" className="add-income">
          Add
        </Button>
      </form>

      {/* List */}
      <div className="income-outer hide-scroll">
        {/* {dummyIncome.map((item, index) => (
                <PersonIncomeRow key={index} index={index+1} person={item} />
            ))} */}
        {income &&
          income.map((item, index) => (
            <PersonIncomeRow key={index} index={index + 1} person={item} />
          ))}
      </div>
    </div>
  );
}

export default Income;
