import React, { useEffect } from "react";

function SavingsBlock(props) {
  const { index, savings, savedPercentage, savedArray, setSavedArray } = props;
  console.log(props);

  useEffect(() => {

    setSavedArray &&
    setSavedArray((prevSavedArray) => {
      const updatedArray = [...prevSavedArray];
      const existingIndex = updatedArray.findIndex(
        (item) => item && item.index === index
      );

      if (existingIndex !== -1) {
        updatedArray[existingIndex] = {
          index: index,
          salary: savings.salary,
          saved: savings.salary * (savedPercentage / 100),
        };
      } else {
        updatedArray.push({
          index: index,
          salary: savings.salary,
          saved: savings.salary * (savedPercentage / 100),
        });
      }

      return updatedArray;
    });


  }, [savedPercentage]);

  return (
    <div data-testid="savings-block" className="card card-col p-2 row-savings">
      {savings && (
        <>
          <div className="card-row">
            <span>
              <div className="avatar">{savings.icon}</div>
              <p>{savings.name}</p>
            </span>
          </div>

          <p className="amount amount-save">
            {new Intl.NumberFormat("en-za", {
              style: "currency",
              currency: "ZAR",
            }).format(savings.salary * (savedPercentage / 100))}
          </p>
        </>
      )}
    </div>
  );
}

export default SavingsBlock;
