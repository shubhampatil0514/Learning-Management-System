import React from "react";
import Calendar from "react-calendar";
import '../index.css'
import "react-calendar/dist/Calendar.css";

const CurrentDayCalendar = ({ selectedDate, onDateChange }) => {
  return (
    <div className="calendar-container mt-4">
      <Calendar onChange={onDateChange} value={selectedDate} />
    </div>
  );
};

export default CurrentDayCalendar;
