
function getClientParameters(){
    //let idElement = document.getElementById('Id');
    let nameElement = document.getElementById('Name');
    let addressElement = document.getElementById('Address');
    let cityElement = document.getElementById('City');
    let countryElement = document.getElementById('Country');
    let phoneElement = document.getElementById('Phone');
    let emailElement = document.getElementById('Email');
    let passwordElement = document.getElementById("Password");

    return {
        id:  1,
        namePerson: nameElement.value,
        cityPerson: cityElement.value,
        countryPerson: countryElement.value,
        addressPerson: addressElement.value,
        phone: phoneElement.value,
        email: emailElement.value,
        password: passwordElement.value,
        ratingPerson: 10
    };
}

async function newPerson(){

    let client = getClientParameters();
    //client.id =0;
    let response = await fetch('http://localhost:9000/create-new-person',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(client)
    });
    if(response.ok) {
        alert("регистрация ok");
        let answer = await response.json();
        sessionStorage.setItem('Id',answer.id);
        sessionStorage.setItem('Name',answer.namePerson);
        sessionStorage.setItem('Address',answer.addressPerson);
        sessionStorage.setItem('City',answer.cityPerson);
        sessionStorage.setItem('Country',answer.countryPerson);
        sessionStorage.setItem('Phone',answer.phone);
        sessionStorage.setItem('Email',answer.email);
        sessionStorage.setItem('Password',answer.password);
        sessionStorage.setItem('Rating',answer.ratingPerson);



        window.location = "http://localhost:9000/client/client-autentification.html";
    }
    else{
        alert('ошибка добавления данных');
    }



}

