//import * as flat from './flat.js';
//import {deleteFlat, editFlat} from "./flat";
let varFlat = require('./flat')

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

    let preview = document.getElementById("ImgPreview");
    let str2 = sessionStorage.getItem('Img');
    preview.src = str2;

   loadFlats(sessionStorage.getItem('Id'));

}

//запрос списка недвижимости
async function loadFlats(id){
    let response = await fetch('http://localhost:9000/flatByPerson//'+Number(id));
    if(response.ok){
        alert('пришел');
        let resp = [];
        resp = await response.json();
        alert('размер массива - '+resp.length);
        //return resp;
        if(resp.length>0){
            let list = document.getElementById('ListFlat');
            list.style.border='1px solid black';

            let title = document.createElement('h3');
            title.innerText='Список состоит из - '+resp.length;
            //list.innerText = 'Список состоит из - '+resp.length;
            list.appendChild(title);

            let divFlat = document.createElement('div');
            divFlat.style.height='200px';

            divFlat.style.overflow='scroll';



            for(let i=0;i<resp.length;i++) {
                //div - ячейка для данных по 1 кв
                let div1 = document.createElement('div');
                div1.style.display="flex";
                div1.style.border="1px solid blue";

                //i
                let divI = document.createElement('div');
                divI.style.marginRight='10px';
                divI.innerText = i+1;
                div1.appendChild(divI);
                //name
                let divName = document.createElement('div');
                divName.style.marginRight='10px';
                divName.innerText = resp[i].nameFlat;
                div1.appendChild(divName);
                //price
                let divPrice = document.createElement('div');
                divPrice.style.marginRight='10px';
                divPrice.innerText = resp[i].price;
                div1.appendChild(divPrice);
                //rating
                let divRating = document.createElement('div');
                divRating.style.marginRight='10px';
                divRating.innerText = resp[i].ratingFlat;
                div1.appendChild(divRating);
                // //Address
                let divAddress = document.createElement('div');
                divAddress.style.marginRight='10px';
                divAddress.innerText = 'Адрес - '+resp[i].countryFlat+', '+resp[i].cityFlat+', '+resp[i].addressFlat;
                div1.appendChild(divAddress);
                // //ссылка на владельца
                // let view = document.createElement('a');
                // view.href = "http://localhost:9000/flat/flat-person.html";
                // view.innerText='Person';
                // view.style.marginRight='10px';
                // div1.appendChild(view);
                //edit
                let butUpdate = document.createElement('input');
                butUpdate.type='button';
                butUpdate.addEventListener('click', function(){
                    editFlat(resp[i].idFlat);
                });
                butUpdate.style.marginRight='10px';
                butUpdate.value = 'Edit';
                div1.appendChild(butUpdate);

                //delete
                let butDelete = document.createElement('input');
                butDelete.type='button';
                butDelete.addEventListener('click', function(){
                    deleteFlat(resp[i].idFlat);
                });
                butDelete.style.marginRight='10px';
                butDelete.value = 'Delete';
                div1.appendChild(butDelete);
                //вторая строка

                let div2 = document.createElement('div');
                div2.style.display='flex';
                div2.style.border="1px solid blue";

                //image
                let divImage = document.createElement('div');
                let img = document.createElement('img');
                img.height=200;
                img.src=resp[i].image;
                divImage.appendChild(img);
                div2.appendChild(divImage);
                //
                //about
                let divAbout = document.createElement('div');
                divAbout.innerText = resp[i].about;
                div2.appendChild(divAbout);

                let divAll = document.createElement('div');
                divAll.appendChild(div1);
                divAll.appendChild(div2);
            // вставляем все данные по 1 объекту в scroll
                divFlat.appendChild(divAll);

            }
            list.appendChild(divFlat);

        }
        else{
            let list = document.getElementById('ListFlat');
            list.innerText = 'Список пуст';
        }
    }
    else{
        alert('Ошибка');

    }
}

async function deletePerson(){

    //alert(sessionStorage.getItem('Id'));
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
async function editFlat(idFlat){
    alert('edit - '+idFlat);
    let response = await fetch("http://localhost:9000/getFlatById/"+Number(idFlat));

    if(response.ok){
        alert("запрос на редактирование ok");
        let answer = await response.json();

        sessionStorage.setItem('IdFlat',answer.idFlat);
        sessionStorage.setItem('NameFlat',answer.nameFlat);
        sessionStorage.setItem('AddressFlat',answer.addressFlat);
        sessionStorage.setItem('CityFlat',answer.cityFlat);
        sessionStorage.setItem('CountryFlat',answer.countryFlat);
        sessionStorage.setItem('Price',answer.price);
        sessionStorage.setItem('About',answer.about);
        sessionStorage.setItem('RatingFlat',answer.ratingFlat);
        sessionStorage.setItem('ImgFlat',answer.image);

        window.location = "http://localhost:9000/flat/flat-update.html";
    }
    else{
        let deleteElement = document.getElementById('InformFlat');
        deleteElement.innerText = 'запрос на редактирование не прошел';
    }

}
async function deleteFlat(idFlat){
    alert('delete - '+idFlat);
    let response = await fetch("http://localhost:9000/deleteFlatById/"+Number(idFlat));

    if(response.ok){
        location.reload();
        //location.href=location.href;
    }
    else{
        let deleteElement = document.getElementById('InformFlat');
        deleteElement.innerText = 'удаление не удалось!';
    }
}
