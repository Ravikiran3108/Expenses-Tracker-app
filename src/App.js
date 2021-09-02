import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const AppDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAppExpense={AppDataHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
