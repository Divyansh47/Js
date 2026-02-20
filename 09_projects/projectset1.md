# Project related to DOM
## project link
[Click here] (http://127.0.0.1:5500/.vscode2/index.html)

# Solution code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button) {
    console.log(button)
    button.addEventListener('click',function(e) {
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey')
            body.style.backgroundColor=e.target.id
        if(e.target.id==='white')
            body.style.backgroundColor=e.target.id
        if(e.target.id==='green')
            body.style.backgroundColor=e.target.id
        if(e.target.id==='yellow')
            body.style.backgroundColor=e.target.id
        if(e.target.id==='red')
            body.style.backgroundColor=e.target.id

    })
})


```

## Project-2 Solution

## Project link
[Click here] (http://127.0.0.1:5500/.vscode3/index.html)
```javascript
const form = document.querySelector('form')
form.addEventListener('submit',function(e) {
    e.preventDefault()
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#result')

if (height=== '' || height<0 || isNaN(height))
    result.innerHTML="please enter valid height"
else if (weight=== '' || weight<0 || isNaN(weight))
    result.innerHTML="please enter valid weight"
else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    result.innerHTML= `<span>${bmi}</span>`
}

})
```