let img ='';
async function loadClientforUpdate(){
    let nameElement = document.getElementById('Name');
    nameElement.value = sessionStorage.getItem('Name');

    let addressElement = document.getElementById('Address');
    addressElement.value = sessionStorage.getItem('Address');

    let cityElement = document.getElementById('City');
    cityElement.value = sessionStorage.getItem('City');

    let countryElement = document.getElementById('Country');
    countryElement.value = sessionStorage.getItem('Country');

    let phoneElement = document.getElementById('Phone');
    phoneElement.value = sessionStorage.getItem('Phone');

    let emailElement = document.getElementById('Email');
    emailElement.value = sessionStorage.getItem('Email');

    let passwordElement = document.getElementById("Password");
    passwordElement.value = sessionStorage.getItem('Password');

    let preview = document.getElementById("ImgPreview");
    img= sessionStorage.getItem('Img');
    preview.src = img;

}
function getClientParameters(){
    let idElement = sessionStorage.getItem('Id');
    let nameElement = document.getElementById('Name');
    let addressElement = document.getElementById('Address');
    let cityElement = document.getElementById('City');
    let countryElement = document.getElementById('Country');
    let phoneElement = document.getElementById('Phone');
    let emailElement = document.getElementById('Email');
    let passwordElement = document.getElementById("Password");
    let ratingElement = sessionStorage.getItem('Rating');

    return {
        id: idElement,
        namePerson: nameElement.value,
        cityPerson: cityElement.value,
        countryPerson: countryElement.value,
        addressPerson: addressElement.value,
        phone: phoneElement.value,
        email: emailElement.value,
        image: img,
        password: passwordElement.value,
        ratingPerson: ratingElement,

    };
}


async function updatePerson(){

    let updatePerson = getClientParameters();

    //
    let response = await fetch('http://localhost:9000/updatePerson',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatePerson)
    });
    if(response.ok) {
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
        sessionStorage.setItem('Img',answer.image);



        window.location = "http://localhost:9000/client/client-autentification.html";
    }
    else{
        alert('ошибка добавления данных');
        let updateElement = document.getElementById('UpdateAnswer');
        updateElement.innerText = 'редактирование не удалось!';
    }

}
function previewFile() {
    let preview = document.getElementById("ImgPreview");
    let preview2 = document.getElementById("ImgPreview2");
    let file    = document.getElementById("Img").files[0];
    let reader  = new FileReader();

    reader.onloadend = function () {
        let str = reader.result;
        preview.src = str;
        img = str;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
function back(){
    window.location = "http://localhost:9000/client/client-autentification.html";
}