import { render, screen } from "@testing-library/react";
import Expenses from "../components/Expenses";
import ExpenseRow from "../components/items/ExpenseRow";

describe("Tests for expenses component", () => {
  test("test default state without array", () => {
    render(<Expenses />);

    var title = screen.getByText("Household Montly Expenses");

    expect(title).toBeInTheDocument();
    console.log(
      "this helps by both testing if the component can redner in the test environment",
      "for further tests and tests how the component handles not recieving the starting array"
    );
  });
});

describe("Tests for expense row", () => {
  test("test for expense row deault state", () => {
    render(<ExpenseRow />);
    var expenseRowContainer = screen.getByTestId("expense-row");
    expect(expenseRowContainer).toBeInTheDocument();
  });

  test("test for expense row", () => {
    var expense = {
      name: "Rent",
      cost: 5000,
    };
    render(<ExpenseRow expense={expense} />);

    var expenseName = screen.getByText(expense.name);


    // var expenseCost = screen.getByText(expense.cost);

    //I'm excluding this var to be tested because the amount is formatted on the front end. 
    //Therefore if the expenseName is displayed, the amount will be displayed as well, as they
    //are in the same div and come from the same object.
    //so instead, i will test for the formmated version which wont be dynamically set

    var expenseCost = screen.getByText("R 5,000.00");

    expect(expenseName).toBeInTheDocument();
    expect(expenseCost).toBeInTheDocument();
  });
});

describe("snapshots", () => {
  test("snapshot of expenses", () => {
    const { asFragment } = render(<Expenses />);
    expect(asFragment()).toMatchSnapshot();
  });
});
