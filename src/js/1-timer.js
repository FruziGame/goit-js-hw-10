import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";




const dataInput = document.querySelector("#datetime-picker");
const button = document.querySelector("button[data-start]");

button.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      userSelectedDate = selectedDates[0];
      userSelectedDate.getTime()
      checkData()
    },
  };

  
  const datePicker = flatpickr(dataInput, options);


let userSelectedDate;
let timeObject;
let getDataMs;

function checkData() {


  let currentData = new Date();

    if (userSelectedDate.getTime() < currentData.getTime()) {

      button.disabled = true;
      window.alert("Please choose a date in the future");
      
     } else {

      button.disabled = false;
      getDataMs = userSelectedDate.getTime() - currentData.getTime();
    }
}


button.addEventListener("click", () => {
    console.log("started")
    button.disabled = true;

  //    не работает все 
  //   datePicker.set('clickOpens', false);
  //   datePicker.set('allowInput', false);
  //   dataInput.disabled = true;
   
  //  dataInput.addEventListener("click", (e) => {
  //     e.preventDefault(); // Запрещаем открытие при клике
  // }); 

    tick()
});



function tick() {


   let intervalId = setInterval(() => {

    timeObject = convertMs(getDataMs);
    console.log(timeObject);

    document.querySelector('[data-days]').textContent = String(timeObject.days).padStart(2, '0');
    document.querySelector('[data-hours]').textContent = String(timeObject.hours).padStart(2, '0');
    document.querySelector('[data-minutes]').textContent = String(timeObject.minutes).padStart(2, '0');
    document.querySelector('[data-seconds]').textContent = String(timeObject.seconds).padStart(2, '0');

    getDataMs -= 1000;

    if(getDataMs <= 0) {
      clearInterval(intervalId);
      return;
    }

  }, 1000);
}




// наприклад addLeadingZero(value), 
// яка використовує метод рядка padStart() і перед відмальовуванням 
// інтерфейсу форматує значення.







function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}









 


