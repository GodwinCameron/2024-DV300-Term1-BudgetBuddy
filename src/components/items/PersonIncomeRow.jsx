import React from "react";

function PersonIncomeRow(props) {
  const { person, index } = props;

  return (
    <div className="card card-row p-2 mb-2 row-income">
      <span>
        <div className="avatar">{person.icon}</div>
        <p>
          {index}. {person.name}
        </p>
      </span>
      <p className="amount">
        {new Intl.NumberFormat('en-za', { style: 'currency', currency: 'ZAR' }).format(person.salary)}
      </p>
    </div>
  );
}

export default PersonIncomeRow;
