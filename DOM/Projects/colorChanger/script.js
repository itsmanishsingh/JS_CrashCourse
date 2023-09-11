const buttons = document.querySelectorAll('.button');
console.log(buttons);

const body = document.querySelector('body');
// console.log(body);

buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);
        const color = event.target.id;

        body.style.backgroundColor = color;
    })
})