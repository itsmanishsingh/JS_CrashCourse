const buttons = document.querySelectorAll('button');
console.log(buttons);

const body = document.querySelector('body');
// console.log(body);

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('onclick',function(event){
        console.log(event);
    })
})