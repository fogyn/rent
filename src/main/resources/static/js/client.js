
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

    let imgElem = document.getElementById("imgElem");



    // превращение массива в строку
    let preview = document.getElementById("ImgPreview");
    let arrayByte = sessionStorage.getItem('Img');
    alert(arrayByte.length);
    // кодировка не совпадает с отправкой
    alert(arrayByte);
    //
    let str = "";
    for(i = 0; i<arrayByte.length; i++){
        str +=String.fromCharCode(parseInt(arrayByte[i], 16));
    }
    //str = String.fromCharCode(arrayByte);
    //alert(str);
    preview.src = str;





}

async function deletePerson(){

    alert(sessionStorage.getItem('Id'));
    let response = await fetch("http://localhost:9000/deletePerson/"+Number(sessionStorage.getItem('Id')));


    if(response.ok){
        window.location = "http://localhost:9000";
    }
    else{
        let deleteElement = document.getElementById('DeleteAnswer');
        deleteElement.innerText = 'удаление не удалось!';
    }

}
function updatePerson(){
    window.location = "http://localhost:9000/client/client-update.html";
}
