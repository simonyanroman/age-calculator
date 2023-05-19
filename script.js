let currentDate = new Date();

var monthArr = [
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

let dayPicker = document.querySelector("#day-picker");
const minDay = parseInt(dayPicker.getAttribute("min"));
const maxDay = parseInt(dayPicker.getAttribute("max"));

let dayPickerLabel = document.querySelector("#day-picker-label");

let monthPicker = document.querySelector("#month-picker");
const minMonth = parseInt(monthPicker.getAttribute("min"));
const maxMonth = parseInt(monthPicker.getAttribute("max"));

let monthPickerLabel = document.querySelector("#month-picker-label");

let yearPicker = document.querySelector("#year-picker");

yearPicker.setAttribute("max", currentDate.getFullYear());
// const minYear = parseInt(yearPicker.getAttribute("min"));
const zeroDate = new Date(0, 0, 1);
const minYear = zeroDate.getFullYear();
const maxYear = parseInt(yearPicker.getAttribute("max"));

let yearPickerLabel = document.querySelector("#year-picker-label");

let dayWrapper = document.querySelector("#day-picker-wrapper");
let monthWrapper = document.querySelector("#month-picker-wrapper");
let yearWrapper = document.querySelector("#year-picker-wrapper");

let resultDays = document.querySelector("#days");
let resultMonths = document.querySelector("#months");
let resultYears = document.querySelector("#years");

let datePicker = document.querySelector(".date-picker");

let submitButton = document.querySelector("#submit");

datePicker.addEventListener("submit", function (e) {
  e.preventDefault();
});

submitButton.addEventListener("click", function () {
  isDateValid(yearPicker.value, monthPicker.value, dayPicker.value);
});

dayPicker.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();

      if (dayPicker.value == null || dayPicker.value == "") {
        dayWrapper.classList.add("empty");
        dayPicker.style.border = "0.1rem solid var(--light-red)";
        dayPickerLabel.style.color = "var(--light-red)";

        return;
      }

      if (dayPicker.value < minDay || dayPicker.value > maxDay) {
        dayWrapper.classList.add("invalid");
        dayPicker.style.border = "0.1rem solid var(--light-red)";
        dayPickerLabel.style.color = "var(--light-red)";

        return;
      }
    };
  })(),
  true
);

dayPicker.addEventListener("input", function () {
  dayWrapper.classList.remove("empty");
  dayWrapper.classList.remove("invalid");

  datePicker.classList.remove("invalid_date");
  datePicker.classList.remove("record");

  // Reset mistake indication
  dayPicker.style.border = "0.1rem solid var(--light-grey)";
  dayPickerLabel.style.color = "var(--smokey-grey)";
  datePicker.classList.remove("born");

  // Reset result age
  resultDays.textContent = "--";
  resultMonths.textContent = "--";
  resultYears.textContent = "--";
});

monthPicker.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();

      if (monthPicker.value == null || monthPicker.value == "") {
        monthWrapper.classList.add("empty");
        monthPicker.style.border = "0.1rem solid var(--light-red)";
        monthPickerLabel.style.color = "var(--light-red)";

        return;
      }

      if (monthPicker.value < minMonth || monthPicker.value > maxMonth) {
        monthWrapper.classList.add("invalid");
        monthPicker.style.border = "0.1rem solid var(--light-red)";
        monthPickerLabel.style.color = "var(--light-red)";

        return;
      }
    };
  })(),
  true
);

monthPicker.addEventListener("input", function () {
  monthWrapper.classList.remove("empty");
  monthWrapper.classList.remove("invalid");

  datePicker.classList.remove("invalid_date");
  datePicker.classList.remove("record");
  datePicker.classList.remove("born");

  // Reset mistake indication
  monthPicker.style.border = "0.1rem solid var(--light-grey)";
  monthPickerLabel.style.color = "var(--smokey-grey)";

  // Reset result age
  resultDays.textContent = "--";
  resultMonths.textContent = "--";
  resultYears.textContent = "--";
});

yearPicker.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();

      if (yearPicker.value == null || yearPicker.value == "") {
        yearWrapper.classList.add("empty");
        yearPicker.style.border = "0.1rem solid var(--light-red)";
        yearPickerLabel.style.color = "var(--light-red)";

        return;
      }

      if (yearPicker.value > maxYear) {
        yearWrapper.classList.add("future");
        yearPicker.style.border = "0.1rem solid var(--light-red)";
        yearPickerLabel.style.color = "var(--light-red)";

        return;
      }
    };
  })(),
  true
);

yearPicker.addEventListener("input", function () {
  yearWrapper.classList.remove("empty");
  yearWrapper.classList.remove("invalid");
  yearWrapper.classList.remove("future");

  datePicker.classList.remove("invalid_date");
  datePicker.classList.remove("record");
  datePicker.classList.remove("born");

  // Reset mistake indication
  yearPicker.style.border = "0.1rem solid var(--light-grey)";
  yearPickerLabel.style.color = "var(--smokey-grey)";

  // Reset result age
  resultDays.textContent = "--";
  resultMonths.textContent = "--";
  resultYears.textContent = "--";
});

function isDateValid(year, month, day) {
  let birthDay = parseInt(day);
  let birthMonth = parseInt(month) - 1;
  let birthYear = parseInt(year);

  let birthDate = new Date(birthYear, birthMonth, birthDay);

  if (
    birthDate instanceof Date &&
    isFinite(birthDate.getTime()) &&
    birthDate.getDate() == birthDay &&
    birthYear >= minYear &&
    birthYear <= maxYear
  ) {
    calculateAge(birthYear, birthMonth, birthDay);
  } else if (
    birthYear < minYear &&
    birthDay >= minDay &&
    birthDay <= maxDay &&
    month >= minMonth &&
    month <= maxMonth
  ) {
    datePicker.classList.add("record");
    calculateAge(birthYear, birthMonth, birthDay);
    return;
  } else if (
    birthYear > maxYear ||
    birthDay == 0 ||
    month == 0 ||
    birthDate == "Invalid Date"
  ) {
    return;
  } else {
    datePicker.setAttribute(
      "data-invalidDate",
      `No such day in ${monthArr[birthMonth]} of ${birthYear}`
    );
    datePicker.classList.add("invalid_date");
  }
}

function calculateAge(birthYear, birthMonth, birthDay) {
  console.log("triggered");

  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  let ageYears = currentYear - birthYear;
  let ageMonths;
  let ageDays;

  //Check for future
  let dateChecker = new Date(birthYear, birthMonth, birthDay);

  if (currentDate.getTime() < dateChecker.getTime()) {
    datePicker.classList.add("born");

    resultDays.textContent = 0;
    resultMonths.textContent = 0;
    resultYears.textContent = 0;

    return;
  } else {
    if (currentMonth >= birthMonth) {
      ageMonths = currentMonth - birthMonth;
    } else {
      ageYears--;
      ageMonths = 12 + currentMonth - birthMonth;
    }

    if (currentDay >= birthDay) ageDays = currentDay - birthDay;
    else {
      ageMonths--;
      ageDays = 31 + currentDay - birthDay;
    }

    if (ageMonths < 0) {
      ageMonths = 11;
      ageYears--;
    }

    resultDays.textContent = ageDays;
    resultMonths.textContent = ageMonths;
    resultYears.textContent = ageYears;
  }
}
