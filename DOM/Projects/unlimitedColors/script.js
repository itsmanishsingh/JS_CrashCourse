/*

const start = document.getElementById('start');
console.log("This is fun1");
start.addEventListener('click',()=>{
    console.log("This is fun2");
    const randomNumber = Math.floor(Math.random()*100 +1);
    console.log(randomNumber);
    document.body.style.backgroundColor = `rgb(${randomNumber}, ${randomNumber *10}, ${randomNumber *20})`;
})

*/

const randomColor = ()=>{
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }

    return color;
}

let intervalId;
function startChangingColor(){
    if(!intervalId){
        intervalId = setInterval(changeBgcolor,1000);
    }

    function changeBgcolor (){
        document.body.style.backgroundColor = randomColor();
    }
}

document.getElementById('start').addEventListener('click',startChangingColor);
document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId = null;
    console.log("have fun");
})