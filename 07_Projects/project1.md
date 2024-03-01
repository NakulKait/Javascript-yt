# Project Related To DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-d8wfdp?file=index.html)

# Solution Code

``` javaScript
const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    body.style.backgroundColor = e.target.id
  })
})
```