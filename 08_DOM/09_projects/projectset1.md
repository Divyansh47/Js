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