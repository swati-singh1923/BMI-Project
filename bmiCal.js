const form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height ${height}`;
    }else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height* height) / 10000)).toFixed(2);
        result.innerHTML = `<b>Body Mass Index is</b> : <span><b>${bmi}</></span>`;

        const weightGuide = document.querySelector("#guide");
        if(bmi < 19){
            weightGuide.innerHTML = `You are under weight ${bmi}`;
        }else if(bmi >= 19 && bmi <= 25){
            weightGuide.innerHTML = `Your weight range is normal ${bmi}`;
        }else if(bmi > 25){
            weightGuide.innerHTML = `You are over weight ${bmi}`;
        }
    }
});