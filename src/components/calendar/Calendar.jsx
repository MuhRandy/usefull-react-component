import { useState } from "react";
import CalendarDays from "./CalendarDays";

function Calendar() {
  const [currentDay, setCurrentDay] = useState(new Date());
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  };

  return (
    <div id="calendar" className="w-[900px] h-[600px] flex flex-col">
      <div id="calendar-header" className="h-[100px] w-full flex items-center">
        <h2>
          {months[currentDay.getMonth()]} {currentDay.getFullYear()}
        </h2>
      </div>
      <div id="calendar-body" className="w-full flex flex-grow flex-col">
        <div
          id="table-header"
          className="h-[100px] w-full flex items-center justify-around"
        >
          {weekdays.map((weekday) => (
            <div id="weekday" className="w-[100px] text-center">
              <p>{weekday}</p>
            </div>
          ))}
        </div>
        <div id="table" className="">
          <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
