async function updatePerson(){
    alert("редактирование");
    // let client = getClientParameters();
    // //client.id =0;
    // let response = await fetch('http://localhost:9000/create-new-person',{
    //     method: 'POST',
    //     headers:{
    //         'Content-Type':'application/json;charset=utf-8'
    //     },
    //     body: JSON.stringify(client)
    // });
    // if(response.ok) {
    //     alert("регистрация ok");
    //     window.location = "http://localhost:9000/client/client-autentification.html";
    // }
    // else{
    //     alert('ошибка добавления данных');
    // }



}
async function deletePerson(){
    alert("удаление");

    // let client = getClientParameters();
    // //client.id =0;
    // let response = await fetch('http://localhost:9000/create-new-person',{
    //     method: 'POST',
    //     headers:{
    //         'Content-Type':'application/json;charset=utf-8'
    //     },
    //     body: JSON.stringify(client)
    // });
    // if(response.ok) {
    //     alert("регистрация ok");
    //     window.location = "http://localhost:9000/client/client-autentification.html";
    // }
    // else{
    //     alert('ошибка добавления данных');
    // }



}
async function loadClients(){
    let nameElementSpan = document.getElementById('NameSpan');
    nameElementSpan.innerText = sessionStorage.getItem('Name');

    let idElement = document.getElementById('Id');
    idElement.innerText = sessionStorage.getItem('Id');

    let nameElement = document.getElementById('Name');
    nameElement.innerText = sessionStorage.getItem('Name');

    let addressElement = document.getElementById('Address');
    addressElement.innerText = sessionStorage.getItem('Address');

    let cityElement = document.getElementById('City');
    cityElement.innerText = sessionStorage.getItem('City');

    let countryElement = document.getElementById('Country');
    countryElement.innerText = sessionStorage.getItem('Country');

    let phoneElement = document.getElementById('Phone');
    phoneElement.innerText = sessionStorage.getItem('Phone');

    let emailElement = document.getElementById('Email');
    emailElement.innerText = sessionStorage.getItem('Email');

    let passwordElement = document.getElementById("Password");
    passwordElement.innerText = sessionStorage.getItem('Password');

    let ratingElement = document.getElementById("Rating");
    ratingElement.innerText = sessionStorage.getItem('Rating');

    // let key = sessionStorage.getItem('userKey');
    // if(key==null)
    //     window.location = "http://localhost:8080/clients/authorize.html"
    // let response =  await fetch("http://localhost:8080/api/Clients/apikey="+key);
    // if(response.ok) {
    //     let clients = await response.json();
    //     let table = document.getElementById('Clients');
    //     for(let i=0;i<clients.length;i++) {
    //         let str = document.createElement('tr');
    //         let name = document.createElement('td');
    //         let view = document.createElement('a');
    //         view.href = "http://localhost:8080/clients/view.html?id="+clients[i].id;
    //         view.innerText = clients[i].name;
    //         name.appendChild(view);
    //         str.appendChild(name);
    //         let address = document.createElement('td');
    //         address.innerText = clients[i].address;
    //         str.appendChild(address);
    //         let phone = document.createElement('td');
    //         phone.innerText = clients[i].phone;
    //         str.appendChild(phone);
    //         let edit = document.createElement('td');
    //         let editLink = document.createElement('a');
    //         editLink.href = "http://localhost:8080/clients/edit.html?id="+clients[i].id;
    //         editLink.innerText = "edit";
    //         edit.appendChild(editLink);
    //         str.appendChild(edit);
    //         table.appendChild(str);
    //     }
    // }
    // else
    //     alert("request has been failed");
}
