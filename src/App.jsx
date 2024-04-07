import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import Taxes from "./components/Taxes";
import TotalCard from "./components/items/TotalCard";
import { dummyCards, lastTotalCard } from "./utils";
import Savings from "./components/Savings";
import LastTotalCard from "./components/items/LastTotalCard";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import TotalCardCopy from "./components/items/TotalCardcopy";

function App() {
  const [income, setIncome] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalTaxed, setTotalTaxed] = useState(0);
  const [savedPercentage, setSavedPercentage] = useState(0);
  const [savedArray, setSavedArray] = useState([]);
  const [expenses, setExpenses] = useState([
    { name: "Netflix", cost: 200 },
    { name: "Petrol", cost: 2500 },
  ]);
  const [finalAmount, setFinalAmount] = useState(0);

  useEffect(() => {
    const total = income.reduce((acc, curr) => {
      return acc + Number(curr.salary);
    }, 0);
    setTotal(total);
  }, [income]);

  useEffect(() => {
    const wallet = income
      .map((item) => item.salary - item.tax.amount)
      .reduce((acc, item) => acc + item, 0);
    const totalExpenses = expenses
      .map((item) => item.cost)
      .reduce((acc, item) => acc + item, 0);
    const totalSavings = savedArray
      .map((item) => item.saved)
      .reduce((acc, item) => acc + item, 0);
    setFinalAmount(wallet - totalExpenses - totalSavings);
  }, [income, expenses, savedArray]);

  const handleResetValues = () => {
    setIncome([]);
    setTotal(0);
    setTotalTaxed(0);
    setSavedPercentage(0);
    setSavedArray([]);
    setExpenses([
      { name: "Netflix", cost: 200 },
      { name: "Petrol", cost: 2500 },
    ]);
  };

  return (
    <Container fluid>
      {/* ==========================================Top Bar============================================= */}
      <Row>
        <Col xs={12} className="topbar p-3 mb-4">
          <h2 className="title">
            <img src="logo512.png" width={60} height={60} />
            <span>BudgetBuddy</span>
          </h2>
          <Button onClick={handleResetValues}>
            <img src="reset.png" width={30} height={30} />
          </Button>
        </Col>
      </Row>

      <Row>
        {/* ==========================================First Column======================================= */}
        <Col xs={12} sm={12} md={5}>
          <div className="card shadow-sm p-3 mb-4 bg-white rounded">
            <Income income={income} setIncome={setIncome} />
          </div>
          <div className="card shadow-sm p-3 mb-4 bg-white rounded">
            <Taxes
              income={income}
              totalTaxed={totalTaxed}
              setTotalTaxed={setTotalTaxed}
            />
          </div>
          <div className="card shadow-sm p-3 mb-4 bg-white rounded">
            <Savings
              savedArray={savedArray}
              setSavedArray={setSavedArray}
              savedPercentage={savedPercentage}
              setSavedPercentage={setSavedPercentage}
              income={income}
            />
          </div>
        </Col>

        {/* ==========================================Second Column======================================= */}
        <Col xs={12} md={4}>
          <div className="card shadow-sm p-3 mb-4 bg-white rounded">
            <Expenses expenses={expenses} setExpenses={setExpenses} />
          </div>
        </Col>

        {/* ==========================================Third Column======================================= */}
        <Col xs={12} md={3}>
          {total > 0 && (
            <div className="card shadow-sm p-3 mb-4 rounded">
              <TotalCard total={total} />
            </div>
          )}
          {income.length > 0 && (
            <>
              <div className="card shadow-sm p-3 mb-4 rounded">
                <TotalCardCopy
                  icon={"tax.png"}
                  income={income}
                  color={"#FFEED2"}
                  label={"Income after tax"}
                />
              </div>
              <div className="card shadow-sm p-3 mb-4 rounded">
                <TotalCardCopy
                  icon={"expense.png"}
                  income={income}
                  color={"#FFE2D3"}
                  label={"Total Expenses"}
                  expenses={expenses}
                />
              </div>
              <div className="card shadow-sm p-3 mb-4 rounded">
                <TotalCardCopy
                  icon={"savings.png"}
                  income={income}
                  color={"#DDDDF7"}
                  label={"Total Savings"}
                  savedArray={savedArray}
                />
              </div>
            </>
          )}

          <div className="card shadow-sm p-3 mb-4 rounded last-total-card">
            <LastTotalCard total={lastTotalCard} amount={finalAmount} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
