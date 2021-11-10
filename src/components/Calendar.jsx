import React, { useState } from "react";
import "./calendar.css";
import moment from "moment";
import Cell from "./Cell";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(
    moment().format("MMMM YYYY")
  );
  const [selectedDate, setSelectedDate] = useState(null);

  let weekdays = moment.weekdaysShort();

  let todaysDate = moment().format('D MMMM YYYY')
  console.log(todaysDate)

  let prevMonth = () => {
    setCurrentMonth(
      moment(currentMonth).subtract(1, "months").format("MMMM YYYY")
    );
  };

  let nextMonth = () => {
    setCurrentMonth(moment(currentMonth).add(1, "months").format("MMMM YYYY"));
  };

  const startDate = moment(currentMonth)
    .startOf("month")
    .format("YYYY-MM-DD hh:mm");

  const endDate = moment(currentMonth)
    .endOf("month")
    .format("YYYY-MM-DD hh:mm");

  const monthStart = moment(startDate).day();
  const monthEnd = moment(endDate).day();

//   let resetAllDates = () => {
//     setSelectedDates(false);
//   };

  let numDaysInMonth = [];

  let daysInMonth = () => {
    let monthTotalDays = moment(currentMonth).daysInMonth();

    for (let i = 0; i < monthStart - 1; i++) {
      numDaysInMonth.unshift(0);
    }

    for (let i = 0; i <= monthTotalDays; i++) {
      numDaysInMonth.push(i);
    }
    return numDaysInMonth.map((num) => {
      return (
        <Cell
          cell={num}
        //   resetAllDates={resetAllDates}
          currentMonth={currentMonth}
          todaysDate={todaysDate}
          setSelectedDates={setSelectedDate}
          selectedDates={selectedDate}
        />
      );
    });
  };

  console.log()

  return (
    <div className="Calendar">
      <h1>Calendar</h1>
      <div className="month-container">
        <div className="arrow" onClick={prevMonth}>
          ←
        </div>
        {currentMonth}
        <div className="arrow" onClick={nextMonth}>
          →
        </div>
      </div>
      <div className="day-container">
        {weekdays.map((day) => {
          return (
            <h3 key={day} className="weekday">
              {day}
            </h3>
          );
        })}
      </div>
      <div className="cells">{daysInMonth()}</div>
    </div>
  );
}

export default Calendar;
