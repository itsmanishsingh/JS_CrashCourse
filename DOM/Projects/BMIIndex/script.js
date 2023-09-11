// In case of forms , selecting the from action is must

const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    // First thing is to prevent the default action of the form that is to prevent the submition of the form
    e.preventDefault();

    // Always take the input values inside the eventListener
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);

        result.innerHTML = `<span>${bmi}</span>`;
    }


})