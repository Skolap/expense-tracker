import React, { useState } from "react";
import "./ExpenseForm.css";

// Get Props from NewExpense
const ExpenseForm = (props) => {
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

    //Save data in object to use later
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //State uplift
    //send data to NewExpense Component >> App.js
    props.onSaveExpanseData(expenseData);

    //Set empty string to clear input field after submitting form and set value field in input
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    //HTML form to get input from user
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>{" "}
          <input
            type="text"
            required="true"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>{" "}
          <input
            type="number"
            min="0.1"
            step="0.01"
            max="99999999999"
            required="true"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>{" "}
          <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            required="true"
            value={enteredDate}
            onChange={dateChangeHandler}
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
