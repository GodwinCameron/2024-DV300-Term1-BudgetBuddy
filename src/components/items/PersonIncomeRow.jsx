import React from "react";

function PersonIncomeRow(props) {
  const { person, index } = props;

  return (
    <div data-testid="person-income-row" className="card card-row p-2 mb-2 row-income">
        {person && (
          <>
            <span>
              <div className="avatar">{person.icon}</div>
              <p>
                {index}. <span>{person.name}</span>
              </p>
            </span>
            <p className="amount">
              {new Intl.NumberFormat("en-za", {
                style: "currency",
                currency: "ZAR",
              }).format(person.salary)}
            </p>
          </>
        )}
    </div>
  );
}

export default PersonIncomeRow;
