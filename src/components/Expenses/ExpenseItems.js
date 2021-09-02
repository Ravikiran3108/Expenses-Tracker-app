import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

const ExpenseItem = (props) => {
  return (
    <div>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">Rs {props.amount}</div>
          </div>
        </Card>
      </li>
    </div>
  );
};

export default ExpenseItem;
