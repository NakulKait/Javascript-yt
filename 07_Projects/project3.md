# Project Related To DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-d8wfdp?file=index.html)

# Solution Code

``` Javascript
let clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


