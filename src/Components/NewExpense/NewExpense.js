import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense() {
  const saveExpanseDataHandler = (enteredExpanseData) => {
    const expanseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    console.log(expanseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseData={saveExpanseDataHandler} />
    </div>
  );
}

export default NewExpense;
