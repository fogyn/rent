function getClientParameters(){

    let phoneElement = document.getElementById('Phone');
    let passwordElement = document.getElementById("Password");

    return {
        phone: phoneElement.value,
        password: passwordElement.value,
        };
}

async function autorizeClient(){
    let clientAutentification = getClientParameters();
    //client.id =0;
    let response = await fetch('http://localhost:9000/autentification',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(clientAutentification)
    });
    if(response.ok) {
        alert("аутентификация ok");
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
        alert('ошибка аутентификации данных');
        let errorElement = document.getElementById('ErrorAutentification');
        errorElement.innerText='ошибка аутентификации данных';

    }


}