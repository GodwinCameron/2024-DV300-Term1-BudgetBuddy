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

  useEffect(() => {
    const total = income.reduce((acc, curr) => {
      return acc + Number(curr.salary);
    }, 0);
    setTotal(total);
    console.log("total:", total);
  }, [income]);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="topbar p-3 mb-4">
          <h2 className="title">
            <img src="logo512.png" width={60} height={60} />
            <span>BudgetBuddy</span>
          </h2>
          <Button>
            <img src="reset.png" width={30} height={30} />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={5}>
          <div className="card shadow-sm p-3 mb-4 bg-white rounded">
            <Income income={income} setIncome={setIncome} />
          </div>
          <div className="card shadow-sm p-3 mb-4 bg-white rounded">
            <Taxes />
          </div>
          <div className="card shadow-sm p-3 mb-4 bg-white rounded">
            <Savings />
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="card shadow-sm p-3 mb-4 bg-white rounded">
            <Expenses />
          </div>
        </Col>

        <Col xs={12} md={3}>
          {total > 0 && (
            <div className="card shadow-sm p-3 mb-4 rounded">
              <TotalCard total={total} />
            </div>
          )}
          {dummyCards.map((total, index) => (
            <div key={index} className="card shadow-sm p-3 mb-4 rounded">
              <TotalCardCopy total={total} />
            </div>
          ))}
          <div className="card shadow-sm p-3 mb-4 rounded last-total-card">
            <LastTotalCard total={lastTotalCard} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
