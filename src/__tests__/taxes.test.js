import { render, screen } from "@testing-library/react";
import Taxes from "../components/Taxes";
import TaxBlock from "../components/items/TaxBlock";
import findTaxAmountAndPercentage from "../functions/taxBrackCalc.service";

describe("Tests for expenses", () => {
  test("test default state without array", () => {
    render(<Taxes />);

    var title = screen.getByText("Tax Bracket Calculation");

    expect(title).toBeInTheDocument();
    console.log(
      "this helps by both testing if the component can redner in the test environment",
      "for further tests and tests how the component handles not recieving the starting array"
    );
  });
});

describe("Tests for taxBlock component", () => {
  test("test the default state of the taxBlock", () => {
    render(<TaxBlock />);

    var taxBlockContainer = screen.getByTestId("tax-block");

    expect(taxBlockContainer).toBeInTheDocument();
  });

  describe("testing that tax is assigned to different brackets in taxBlock", () => {
    test("testing first bracket", () => {
      var tax = {
        icon: "👱‍♂️",
        name: "john",
        salary: 12500
      };
      expect(findTaxAmountAndPercentage(tax)).toEqual({
        amount: 0,
        percent: 0.18,
        finalAmountTaxed: 2250,
      });
    });

    test("testing second bracket", () => {
      var tax = {
        icon: "👱‍♂️",
        name: "john",
        salary: 300000
      };
      expect(findTaxAmountAndPercentage(tax)).toEqual({
        amount: 42678,
        percent: 0.26,
        finalAmountTaxed: 120678,
      });
    });

    test("testing third bracket", () => {
      var tax = {
        icon: "👱‍♂️",
        name: "john",
        salary: 375000
      };
      expect(findTaxAmountAndPercentage(tax)).toEqual({
        amount: 77362,
        percent: 0.31,
        finalAmountTaxed: 193612,
      });
    });

    test("testing fourth bracket", () => {
      var tax = {
        icon: "👱‍♂️",
        name: "john",
        salary: 625000
      };
      expect(findTaxAmountAndPercentage(tax)).toEqual({
        amount: 121475,
        percent: 0.36,
        finalAmountTaxed: 346475,
      });
    });
    test("testing fifth bracket", () => {
      var tax = {
        icon: "👱‍♂️",
        name: "john",
        salary: 795000
      };
      expect(findTaxAmountAndPercentage(tax)).toEqual({
        amount: 179147,
        percent: 0.39,
        finalAmountTaxed: 489197,
      });
    });
    test("testing sixth bracket", () => {
      var tax = {
        icon: "👱‍♂️",
        name: "john",
        salary: 1000000
      };
      expect(findTaxAmountAndPercentage(tax)).toEqual({
        amount: 251258,
        percent: 0.41,
        finalAmountTaxed: 661258,
      });
    });
    test("testing final bracket", () => {
      var tax = {
        icon: "👱‍♂️",
        name: "john",
        salary: 2500000
      };
      expect(findTaxAmountAndPercentage(tax)).toEqual({
        amount: 644489,
        percent: 0.45,
        finalAmountTaxed: 1769489,
      });
    });
  });
});

describe("snapshots", () => {
  test("snapshot of taxes", () => {
    const { asFragment } = render(<Taxes />);
    expect(asFragment()).toMatchSnapshot();
  });
});