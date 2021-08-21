//import * as b64 from '../base64/base64.js';

//const b64 = require("../base64/base64");
//const base64js = require("../base64/node_modules.base64-js/base64js.min");

let img ='';
function getClientParameters(){
    //let idElement = document.getElementById('Id');
    let nameElement = document.getElementById('Name');
    let addressElement = document.getElementById('Address');
    let cityElement = document.getElementById('City');
    let countryElement = document.getElementById('Country');
    let phoneElement = document.getElementById('Phone');
    let emailElement = document.getElementById('Email');
    let passwordElement = document.getElementById("Password");
    //let imageElement = document.getElementById("Img").files[0];

    // if(nameElement.value==null || addressElement.value==null || cityElement.value==null || countryElement.value==null || phoneElement.value==null ||
    //     emailElement.value == null || passwordElement.value == null){
    //     let error = document.getElementById('ErrorRegistration');
    //     error.innerText  = 'не все поля заполнены';
    // }
    // else{
        return {

            namePerson: nameElement.value,
            cityPerson: cityElement.value,
            countryPerson: countryElement.value,
            addressPerson: addressElement.value,
            phone: phoneElement.value,
            email: emailElement.value,
            image: img,
            password: passwordElement.value,
            ratingPerson: 10
        };
    //}




}

async function newPerson(){
//alert('Да');
    let client = getClientParameters();
    //alert(client.namePerson);
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
        // alert(answer.image.length);
        // alert(answer.image);
        sessionStorage.setItem('Img',answer.image);

        window.location = "http://localhost:9000/client/client-autentification.html";
    }
    else{
        alert('ошибка добавления данных');
    }
}

function previewFile() {
    //alert('есть');
    let preview = document.getElementById("ImgPreview");
    let preview2 = document.getElementById("ImgPreview2");
    let file    = document.getElementById("Img").files[0];
    let reader  = new FileReader();

    reader.onloadend = function () {
        let str = reader.result;
        //alert(str);

        // let imgMas = [];
        preview.src = str;
        // for(let i=0;i<str.length;i++){
        //     let code = str.charCodeAt(i);
        //     imgMas.push(code);
        //
        // }
        img = str;

        //let str2 = String.fromCharCode(imgMas);
        // let str2 = '';
        // for(i = 0; i<imgMas.length; i++){
        //     str2 +=String.fromCharCode(imgMas[i]);
        // }
        // alert('востановленная строка - '+str2);
        // preview2.src = str2;
     }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}