let form = document.forms["car-log"];
form.addEventListener("submit", getValues);

let carLog = [];

function getValues(event){
    event.preventDefault();

    let formData = {
        "name": this.name.value,
        "veh-type":this['veh-type'].value,
        "make": this.make.value,
        "model": this.model.value,
        "registration": this.registration.value,
        "condition":this['condition'].value,
        "value": parseInt(this.value.value)
    }

    let out = `
    <p>Nickname: <span>${formData.name}</span></p>
    <p>Vehicle Type: <span>${formData['veh-type']}</span></p>
    <p>Make: <span>${formData.make}</span></p>
    <p>Model: <span>${formData.model}</span></p>
    <p>Registration: <span>${formData.Registration}</span></p>
    <p>Condition: <span>${formData['condition']}</span></p
    <p>Value: <span>${formData.value}</span></p>
    `

    document.querySelector(".out code").innerHTML = out;

    carLog.push(formData);

    document.getElementById('carsTotalAmount').innerHTML = carLog.length;

    let totalValue= 0;
    for (i= 0; i < carLog.length; i++){
        totalValue+= carLog[i].value;
    }

    document.getElementById('totalValue').innerHTML = "R" + totalValue;
}