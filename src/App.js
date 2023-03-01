import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import Title from "./Components/Title/Title";

// Storage for new Expense
const EXPENSE_ARRAY = [];

function App() {
  const [expenses, setExpense] = useState(EXPENSE_ARRAY);
  //Function to get data from NewExpense
  const addExpenseHandler = (expense) => {
    //set Array and add new expense to top and dummy expense below
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <Title />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
