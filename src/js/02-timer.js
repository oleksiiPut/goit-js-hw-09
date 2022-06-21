import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button');
const timerField = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');
const labels = document.querySelectorAll('.label');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

btnStart.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (options.defaultDate > selectedDates[0]) {
      Notify.failure('Please choose a date in the future');
    } else {
      btnStart.removeAttribute('disabled');
      btnStart.addEventListener('click', timer);
    }
  },
};

const fp = flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function renderTimer(number) {
  dataDays.textContent = addLeadingZero(number.days);
  dataHours.textContent = addLeadingZero(number.hours);
  dataMinutes.textContent = addLeadingZero(number.minutes);
  dataSeconds.textContent = addLeadingZero(number.seconds);
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

function timer() {
  const timerId = setInterval(() => {
    const selectedDate = fp.selectedDates[0].getTime();
    const delta = selectedDate - Date.now();
    if (delta <= 0) {
      clearInterval(timerId);
      return;
    }
    let dataItem = convertMs(delta);
    renderTimer(dataItem);
  }, 1000);
  input.disabled = true;

  btnStart.setAttribute('disabled', true);
}

timerField.style.display = 'flex';
timerField.style.flexDirection = 'row';

input.style.borderRadius = '15px';
input.style.fontSize = '25px';

btnStart.style.fontSize = '25px';
btnStart.style.borderRadius = '15px';

dataDays.style.fontSize = '35px';
dataHours.style.fontSize = '35px';
dataMinutes.style.fontSize = '35px';
dataSeconds.style.fontSize = '35px';

[...fields].forEach(item => {
  item.style.display = 'flex';
  item.style.flexDirection = 'column';
  item.style.alignItems = 'center';
  item.style.marginRight = '10px';
});

[...labels].forEach(label => {
  label.style.fontSize = '25px';
});
