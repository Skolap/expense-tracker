import React from "react";
import Chart from "../Chart/Chart";

// Getting Props from Chart
const ExpensessChart = (props) => {
  const chartDataPoint = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Des", value: 0 },
  ];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //Starting from 0 => Jan
    chartDataPoint[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoint} />;
};

export default ExpensessChart;
