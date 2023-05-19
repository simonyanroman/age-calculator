# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshotDesktop.png)
![](./screenshotMobile.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/age-calculator-app-s9mhc14IEZ
- Live Site URL: https://simonyanroman.github.io/age-calculator

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learned a lot of things during this challenge.

One of my favotite is implementing CSS managing through JS with [data-] attributes. This exaple also shows using [::after] pseudo-class and [attr()] function.

```html
<div
  class="input-wrapper"
  id="day-picker-wrapper"
  data-empty="This field is required"
  data-invalid="Must be a valid day"
></div>
```

```css
.empty::after {
  content: attr(data-empty);
}
.invalid::after {
  content: attr(data-invalid);
}
```

```js
datePicker.setAttribute(
  "data-invalidDate",
  `No such day in ${monthArr[birthMonth]} of ${birthYear}`
);
```

### Continued development

I need a lot of practice in working with [Date()] objects. I don't think my solution is coded accurate and right, but throughout testing it showed perfect results for me.

My code needs more simplicity and accuracy.

### Useful resources

- [Styling Form Validation Errors - HTML & CSS Web Design Tutorial](https://www.youtube.com/watch?v=6NdWrZ77YO4&t=355s) - This helped me to understand how organize CSS pseudo-classes for custom form validation error messages and how to call whis messages.

## Author

- Website - [Roman Simonyan](https://www.linkedin.com/in/simonyanrr)
- Frontend Mentor - [@simonyanroman](https://www.frontendmentor.io/profile/simonyanroman)
