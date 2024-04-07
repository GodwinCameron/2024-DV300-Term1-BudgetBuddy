import React from "react";

function TotalCardCopy(props) {
  const { label, icon, income, savedArray, expenses } = props;
  console.log("expenses:", expenses);
  console.log("income:", income);
  console.log("savedArray:", savedArray);
  console.log("label:", label);
  console.log("icon:", icon);

  //savings.png expense.png tax.png

  if (income) {
    var mappedIncome = income.map((item) => item.salary - item.tax.amount).reduce((acc, item) => acc + item, 0)
  }

  if (expenses) {
    var mappedExpenses = expenses.map((item) => item.cost).reduce((acc, item) => acc + item, 0)
  }

  if (savedArray){
    var mappedSavedArray = savedArray.map((item) => item.saved).reduce((acc, item) => acc + item, 0)
  }

  return (
    <div data-testid="total-card-copy" className="total-card p-2">
      <div className="icon" style={{ backgroundColor: props.color }}>
        <img src={icon} width={40} height={40} />
      </div>
      <div className="labels">
        {savedArray ? (
          <h4>
            {new Intl.NumberFormat("en-za", {
              style: "currency",
              currency: "ZAR",
            }).format(mappedSavedArray)}
          </h4>
        ) : expenses ? (
          <h4 data-testid="total-expense-amount" className="testername">
            {new Intl.NumberFormat("en-za", {
              style: "currency",
              currency: "ZAR",
            }).format(mappedExpenses)}
          </h4>
        ) : (
          <h4>
            {new Intl.NumberFormat("en-za", {
              style: "currency",
              currency: "ZAR",
            }).format(mappedIncome)}
          </h4>
        )}
        <p>{label}</p>
      </div>
    </div>
  );
}

export default TotalCardCopy;
