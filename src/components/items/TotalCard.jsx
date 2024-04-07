import React from "react";

function TotalCard(props) {
  return (
    <div data-testid="total-card" className="total-card p-2">
      {/* <div className='icon' style={{backgroundColor: total.color}}> */}
      <div className="icon" style={{ backgroundColor: "#E4FDCD" }}>
        {/* <img src={total.icon} width={40} height={40} /> */}
        <img src={"income.png"} width={40} height={40} />
      </div>
      <div className="labels">
        {props && (
          <>
            <h4>
              {new Intl.NumberFormat("en-za", {
                style: "currency",
                currency: "ZAR",
              }).format(props.total)}
            </h4>
            {/* <p>{total.label}</p> */}
          </>
        )}
        <p>Income before tax</p>
      </div>
    </div>
  );
}

export default TotalCard;
