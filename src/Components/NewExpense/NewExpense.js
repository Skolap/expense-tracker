import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const saveExpanseDataHandler = (enteredExpanseData) => {
    const expanseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expanseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseData={saveExpanseDataHandler} />
    </div>
  );
}

export default NewExpense;
