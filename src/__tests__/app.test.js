import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import TotalCard from "../components/items/TotalCard";
import TotalCardCopy from "../components/items/TotalCardcopy";

describe("Tests for App", () => {
  test("test component for default state", () => {
    // ARRANGE

    // ACT
    render(<App />);
    var mainTitle = screen.getByText("BudgetBuddy");

    //ASSERT
    expect(mainTitle).toBeInTheDocument();
  });
});

describe("Tests for totalCard component", () => {
  test("test for totalCard deault state", () => {
    render(<TotalCard />);
    var totalCardContainer = screen.getByTestId("total-card");
    expect(totalCardContainer).toBeInTheDocument();
  });
});

describe("Tests for totalCardCopy component", () => {
  
  test("test for totalCardCopy with a basic default savedArray", () => {
    var savedArray = [{ index: 0, salary: "12500", saved: 1250 }];
    var expenses = [{ name: "Netflix", cost: 200 }, { name: "Petrol", cost: 2500 }];
    var label = "Total Expenses";
    var icon = "savings.png";
    var income = [{ icon: "👱‍♂️", name: "John", salary: 12500, tax: {amount: 2250, extra: 0, percent: 0.18} }];
    render(<TotalCardCopy avedArray={savedArray} expenses={expenses} label={label} icon={icon} income={income} />);
    var totalCardCopyContainer = screen.getByTestId("total-card-copy");
    var totalExpeseAmount = screen.getByTestId("total-expense-amount");

    expect(totalCardCopyContainer).toBeInTheDocument();
    expect(totalExpeseAmount).toBeInTheDocument();
    expect(totalExpeseAmount).toBeInTheDocument(); // Use toHaveTextContent for checking text content
});
});

describe("snapshots", () => {
  test("snapshot of App", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});