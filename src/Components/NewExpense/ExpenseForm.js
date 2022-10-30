import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // Define states for storing user input data
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Define Event Handler for onChange Event
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //Prevent browser from refreshing /BrowserDefault

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    //HTML form to get input from user
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>{" "}
          <input onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>{" "}
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.1"
            step="0.1"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>{" "}
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2022-01-01"
            max="2025-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
