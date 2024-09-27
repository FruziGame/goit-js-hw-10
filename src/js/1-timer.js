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
    checkData();
  },
};

const datePicker = flatpickr(dataInput, options);

let userSelectedDate;

function checkData() {
  const currentData = new Date();

  if (userSelectedDate.getTime() < currentData.getTime()) {
    button.disabled = true;

    iziToast.show({
      color: 'red',
      message: 'Please choose a date in the future',
      position: "topCenter"
    });
  } else {
    button.disabled = false;
  }
}

button.addEventListener("click", () => {
  button.disabled = true;
  dataInput.disabled = true;
  tick();
});

function tick() {
  const intervalId = setInterval(() => {
    const currentTime = new Date();
    const getDataMs = userSelectedDate.getTime() - currentTime.getTime();

    updateTimerDisplay(getDataMs);

    if (getDataMs <= 0) {
      clearInterval(intervalId);
      resetTimerDisplay();
      dataInput.disabled = false;
    }
  }, 1000);
}

function updateTimerDisplay(ms) {
  const timeObject = convertMs(ms);
  document.querySelector('[data-days]').textContent = String(timeObject.days).padStart(2, '0');
  document.querySelector('[data-hours]').textContent = String(timeObject.hours).padStart(2, '0');
  document.querySelector('[data-minutes]').textContent = String(timeObject.minutes).padStart(2, '0');
  document.querySelector('[data-seconds]').textContent = String(timeObject.seconds).padStart(2, '0');
}

function resetTimerDisplay() {
  document.querySelector('[data-days]').textContent = '00';
  document.querySelector('[data-hours]').textContent = '00';
  document.querySelector('[data-minutes]').textContent = '00';
  document.querySelector('[data-seconds]').textContent = '00';
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
