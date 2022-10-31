import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  //Send data to app.js
  const saveExpanseDataHandler = (enteredExpanseData) => {
    //Save data in object to use later
    const expanseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };

    //State uplift
    //send data to App.js Component
    props.onAddExpense(expanseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseData={saveExpanseDataHandler} />
    </div>
  );
}

export default NewExpense;
