import React, { useState } from "react";

const Cell = ({ cell, resetAllDates, currentMonth, todaysDate, setSelectedDates, selectedDates }) => {
  const [selectedDate, setSelectedDate] = useState(false);

  let toggleCell = () => {
    setSelectedDates(false)
    setSelectedDate(!selectedDate);
    console.log(`The date you have selected is: ${cell} ${currentMonth} `);
  };

  return (
      <div
        className={`${selectedDate === true ? "active cell" : "cell"} ${
          selectedDates === false ? "cell" : null
        }`}
        onClick={toggleCell}
      >
        {cell !== 0 ? cell : null}
        {todaysDate === cell.toString() + " " + currentMonth ? (
          <div className="tick"></div>
        ) : null}
      </div>
  );
};

export default Cell;
