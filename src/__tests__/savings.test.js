import { render, screen, waitFor } from "@testing-library/react";
import Savings from "../components/Savings";
import SavingsBlock from "../components/items/SavingsBlock";

describe("Tests for savings", () => {
  test("test default state of savings compoenet without array", () => {
    render(<Savings />);

    var title = screen.getByText("Savings Calculation");

    expect(title).toBeInTheDocument();
    console.log(
      "this helps by both testing if the component can redner in the test environment",
      "for further tests and tests how the component handles not recieving the starting array"
    );
  });
});

describe("Test for savingsBlock component", () => {
  test("test the default state of the savingsBlock", () => {
    render(<SavingsBlock />);

    var savingsBlockContainer = screen.getByTestId("savings-block");

    expect(savingsBlockContainer).toBeInTheDocument();
  });
  test("test the savingsBlock component with basic savedArray", async () => {
    var index = 0;
    var savedPercentage = 10;
    var savings = { icon: "👱‍♂️", name: "John", salary: "12500" };
    var savedArray = [{ index: 0, salary: "12500", saved: 1250 }];
    const mockSetSavedArray = jest.fn();

    render(
      <SavingsBlock
        savedArray={savedArray}
        index={index}
        savedPercentage={savedPercentage}
        savings={savings}
        // setSavedArray={mockSetSavedArray}
      />
    );
    var savingsBlockContainer = screen.getByTestId("savings-block");
    var savingsBlockName = screen.getByText("John");
    var savingsBlockSaved = screen.getByText("R 1,250.00");

    // await waitFor(() => {
    //   expect(mockSetSavedArray).toHaveBeenCalledWith([
    //     {
    //       index: index,
    //       salary: savings.salary,
    //       saved: savings.salary * (savedPercentage / 100),
    //     },
    //   ]);

      expect(savingsBlockContainer).toBeInTheDocument();
      expect(savingsBlockName).toBeInTheDocument();
      expect(savingsBlockSaved).toBeInTheDocument();
    // });
  });
});

describe("snapshots", () => {
  test("snapshot of savings", () => {
    const { asFragment } = render(<Savings />);
    expect(asFragment()).toMatchSnapshot();
  });
});
