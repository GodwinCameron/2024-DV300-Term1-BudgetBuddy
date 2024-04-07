import { fireEvent, render, screen } from "@testing-library/react";
import Income from "../components/Income";
import PersonIncomeRow from "../components/items/PersonIncomeRow";

describe("Tests for Income component", () => {
  test("test component for default state", () => {
    // ARRANGE

    // ACT
    render(<Income />);
    var salariesTitle = screen.getByText("Household Montly Salaries");

    //ASSERT
    expect(salariesTitle).toBeInTheDocument();
  });
});

describe("Tests for PersonIncomeRow component", () => {
    test("test for PersonIncomeRow deault state", () => {
      render(<PersonIncomeRow />);
      var personIncomeRowContainer = screen.getByTestId("person-income-row");
      expect(personIncomeRowContainer).toBeInTheDocument();
    });

    test("test for PersonIncomeRow", () => {
      var index = 1;
        var person = {
            name: "John",
            salary: 5000,
        };
        const { container } = render(<PersonIncomeRow index={index} person={person} />);
        console.log(container.innerHTML);
  
      var personIncomeName = screen.getByText("John");
  
      expect(personIncomeName).toBeInTheDocument();
    });
});

describe("snapshots", () => {
  test("snapshot of income", () => {
    const { asFragment } = render(<Income />);
    expect(asFragment()).toMatchSnapshot();
  });
});