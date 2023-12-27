import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const expensesOnlyArray = props.chartData.map((monthData) => {
    return monthData.expenseValue;
  });

  const maxValue = Math.max(...expensesOnlyArray);

  return (
    <div className="chart">
      {props.chartData.map((monthData) => {
        return (
          <ChartBar
            key={monthData.expenseMonth}
            label={monthData.expenseMonth}
            value={monthData.expenseValue}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
