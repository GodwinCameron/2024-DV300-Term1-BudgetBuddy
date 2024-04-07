import React from "react";
import TaxBlock from "./items/TaxBlock";
import { dummyIncome } from "../utils";

function Taxes(props) {
  const { income, totalTaxed, setTotalTaxed } = props;
  return (
    <div data-toggle="tooltip" title="Those bastards!">
      <h3>Tax Bracket Calculation</h3>

      {/* List */}
      <div className="scroll-row hide-scroll">
        {income &&  (
          <>
            {income.map((item, index) => (
              <TaxBlock key={index} tax={item} totalTaxed={totalTaxed} setTotalTaxed={setTotalTaxed} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Taxes;
