# Project Related To DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-d8wfdp?file=index.html)

# Solution Code
``` JavaScript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Enter the valid Height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Enter the valid Weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `${bmi}`;
  }
});


```
