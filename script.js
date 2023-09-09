function updateDayAndTimeFields() {
  const currentDay = new Date().getUTCDay();
    
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
    
  // SET WEEK-DAY
  document.querySelector('.currentDay').innerHTML = `Today is: ${weekDays[currentDay]}`;
    
  // SET UTC MILLI-SEC TIME EVERY SECOND
  setInterval(() => {
    document.querySelector('.UTCTime').innerHTML = `UTC Time is: ${Date.now()}`;
  }, 1000);
};

updateDayAndTimeFields();
