import React from "react";
import findTaxAmountAndPercentage from "../../functions/taxBrackCalc.service";

function TaxBlock(props) {
  const { tax } = props;
  // const taxedAmount = { percent: 0, amount: 0 };
  console.log("tax is:", tax);

  const x = findTaxAmountAndPercentage(tax);

  return (
    <div data-testid="tax-block" className="card card-col p-2 row-tax">
      {tax && (
        <>
          <div className="card-row">
            <span>
              <div className="avatar">{tax.icon}</div>
              <p>{tax.name}</p>
            </span>

            <h4>{x.percent * 100}%</h4>
          </div>

          <p className="amount">
            -
            {new Intl.NumberFormat("en-za", {
              style: "currency",
              currency: "ZAR",
            }).format(x.finalAmountTaxed)}
          </p>
        </>
      )}
    </div>
  );
}

export default TaxBlock;
