//import * as flat from './flat.js';
//import {deleteFlat, editFlat} from "./flat";
let varFlat = require('./flat')
//var token1 = sessionStorage.getItem('userKey')

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

   await loadFlats(sessionStorage.getItem('Id'));
   await loadOrder2(sessionStorage.getItem('Id'));
   await loadOrder3(sessionStorage.getItem('ListFlatId'));

}

//запрос списка недвижимости
async function loadFlats(id){
    let token = sessionStorage.getItem('userKey')
    //alert(token)
    let response = await fetch('http://localhost:9000/flatByPerson//'+Number(id), {

        headers:{
            Authorization:token
        }

    });



    if(response.ok){
        //alert('пришел');
        let resp = [];
        resp = await response.json();
        let listFlatId = [];

        //alert('размер массива - '+resp.length);
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
                listFlatId.push(resp[i].idFlat);
                //alert("формируемый массив - "+listFlatId.length);
                let div1 = document.createElement('div');
                div1.style.display="flex";
                div1.style.border="1px solid blue";

                //порядковый номер
                let divI = document.createElement('div');
                divI.style.marginRight='10px';
                divI.innerText = i+1;
                div1.appendChild(divI);
                //id flat
                let divIFlat = document.createElement('div');
                divIFlat.style.marginRight='10px';
                //вставляем id квартиры из тбазы данных
                divIFlat.innerText = 'id-'+resp[i].idFlat;
                div1.appendChild(divIFlat);
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
            sessionStorage.setItem('ListFlatId', listFlatId);

        }
        else{
            //sessionStorage.setItem('ListFlatId', listFlatId);
            let list = document.getElementById('ListFlat');
            list.innerText = 'Список пуст';
            sessionStorage.setItem('ListFlatId', 0);
        }

        //alert("созданный массив id - "+listFlatId.length);
        //sessionStorage.setItem('ListFlatId', listFlatId);
    }
    else{
        alert('Ошибка');

    }
}

async function deletePerson(){
    let token = sessionStorage.getItem('userKey')
    //alert(sessionStorage.getItem('Id'));
    let response = await fetch("http://localhost:9000/deletePerson/"+Number(sessionStorage.getItem('Id')),{

        headers:{
            Authorization:token
        }

    });


    if(response.ok){
        sessionStorage.removeItem('userKey')
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
    let token = sessionStorage.getItem('userKey')
    alert('edit - '+idFlat);
    let response = await fetch("http://localhost:9000/getFlatById/"+Number(idFlat), {

        headers:{
            Authorization:token
        }

    });

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
    let token = sessionStorage.getItem('userKey')
    alert('delete - '+idFlat);
    let response = await fetch("http://localhost:9000/deleteFlatById/"+Number(idFlat), {

        headers:{
            Authorization:token
        }

    });

    if(response.ok){
        location.reload();
        }
    else{
        let deleteElement = document.getElementById('InformFlat');
        deleteElement.innerText = 'удаление не удалось!';
    }
}
// я арендовал - мой id
async function loadOrder2(personId){
    //alert("заказчик по id!!!!!!!!!!!!!="+personId)
    let token = sessionStorage.getItem('userKey');

    let personDTO = {
        person: {
            id:Number(personId)
        },
        dateBoolean: true
    }

    let responseOrder = await fetch('http://localhost:9000/orderByPerson',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
            Authorization:token
        },
        body: JSON.stringify(personDTO)
    });

    if(responseOrder.ok){
        let list = await responseOrder.json();
        //alert("список пришел");
        let orderPerson = document.getElementById('listFlat2');
        //alert(list.value);

        if(list.length>0){
            //alert("id первого объекта - "+list[0].orderId);

            orderPerson.style.border='1px solid black';
            let title = document.createElement('h3');
            title.innerText='Список состоит из - '+list.length;
            orderPerson.appendChild(title);
            let divFlat = document.createElement('div');
            divFlat.style.height='200px';
            divFlat.style.overflow='scroll';
            //orderPerson.innerText = 'число недвижимости которую вы заказали = '+Number(list.length);
            //

            // alert(list[0].startDate);
            // alert(list[0].endDate);


            for(let i=0;i<list.length;i++) {
                let flat = list[i].flat;
                let person = list[i].person;
                //div - ячейка для данных по 1 кв
                //listFlatId.push(resp[i].idFlat);
                //alert("формируемый массив - "+listFlatId.length);
                let div1 = document.createElement('div');
                div1.style.display="flex";
                div1.style.border="1px solid blue";

                //i
                // let divI = document.createElement('div');
                // divI.style.marginRight='10px';
                // //вставляем id квартиры из тбазы данных
                // divI.innerText = list[i].orderId;
                // div1.appendChild(divI);
                //name
                let divName = document.createElement('div');
                divName.style.marginRight='10px';
                divName.innerText = flat.nameFlat;
                div1.appendChild(divName);
                //price
                let divPrice = document.createElement('div');
                divPrice.style.marginRight='10px';
                divPrice.innerText = flat.price;
                div1.appendChild(divPrice);
                //rating
                let divRating = document.createElement('div');
                divRating.style.marginRight='10px';
                divRating.innerText = flat.ratingFlat;
                div1.appendChild(divRating);
                // //Address
                let divAddress = document.createElement('div');
                divAddress.style.marginRight='10px';
                divAddress.innerText = 'Адрес - '+flat.countryFlat+', '+flat.cityFlat+', '+flat.addressFlat;
                div1.appendChild(divAddress);

                //close order
                let butUpdate = document.createElement('input');
                butUpdate.type='button';
                butUpdate.addEventListener('click', function(){
                    closeOrder(list[i].orderId, 1);
                });
                butUpdate.style.marginRight='10px';
                butUpdate.value = 'Close';
                div1.appendChild(butUpdate);
                //вторая строка
                let div2 = document.createElement('div');
                div2.style.display='flex';
                div2.style.border="1px solid blue";
                //image
                let divImage = document.createElement('div');
                divImage.style.marginRight='10px';
                let img = document.createElement('img');
                img.height=200;
                img.src=flat.image;
                divImage.appendChild(img);
                div2.appendChild(divImage);
                 //about
                let divAbout = document.createElement('div');
                divAbout.style.marginRight='10px';
                divAbout.innerText = flat.about;
                div2.appendChild(divAbout);
                //
                //startDate
                let startDate = document.createElement('div');
                startDate.style.marginRight='10px';
                startDate.innerText =new Date(list[i].startDate).toLocaleDateString();
                    div2.appendChild(startDate);
                //
                //endDate
                let endDate = document.createElement('div');
                endDate.style.marginRight='10px';
                endDate.innerText = new Date(list[i].endDate).toLocaleDateString();
                div2.appendChild(endDate);
                //
                let personRating = document.createElement('div');
                personRating.style.marginRight='10px';
                personRating.innerText = flat.person.ratingPerson;
                div2.appendChild(personRating);
                //сборка

                let divAll = document.createElement('div');
                divAll.appendChild(div1);
                divAll.appendChild(div2);
                // вставляем все данные по 1 объекту в scroll
                divFlat.appendChild(divAll);
            }
            orderPerson.appendChild(divFlat);

        }
        else{

            orderPerson.innerText = "Список ваших заказов пуст.";
        }
    }
    else{
        alert("где то ошибка")
    }
}
// арендовали у меня - список id моих flat
async function loadOrder3(listFlatId){
    let listId = [];
    //alert(listFlatId);
    if(Number(listFlatId)===0){
       // alert("список недвижимости 0000000 - "+listFlatId);
        let orderFlat = document.getElementById('listFlat3');
        orderFlat.innerText = "Список заказов на вашу недвижимость пуст.";
    }
    else{
        let mas = listFlatId.split(",");

        for(let i=0; i<mas.length;i++){
            //console.log(mas[i]);
            listId.push(Number(mas[i]));
        }
        alert("список недвижимости !!!!!!!!!- "+listId .length)
//


        let token = sessionStorage.getItem('userKey');

        let list = [];
        for(let i=0; i<listId.length;i++){
            let flat = {
                idFlat:Number(listId[i])
            }
            list.push(flat);
        }
//alert(list.length)
// нужен список всех квартир
        let orderDTO = {
            listFlat: list,
            dateBoolean: true
        }

        let responseOrder = await fetch('http://localhost:9000/orderByFlats',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json;charset=utf-8',
                Authorization:token
            },
            body: JSON.stringify(orderDTO)
        });

        if(responseOrder.ok){
            let list = await responseOrder.json();
            //alert("список пришел");
            let orderFlat = document.getElementById('listFlat3');
            //alert(list.value);

            if(list.length>0){


                //orderFlat.innerText = "число недвижимости заказанной у вас = "+Number(list.length);

                orderFlat.style.border='1px solid black';
                let title = document.createElement('h3');
                title.innerText='Список состоит из - '+list.length;
                orderFlat.appendChild(title);
                let divFlat = document.createElement('div');
                divFlat.style.height='200px';
                divFlat.style.overflow='scroll';
                //orderPerson.innerText = 'число недвижимости которую вы заказали = '+Number(list.length);
                //

                // alert(list[0].startDate);
                // alert(list[0].endDate);


                for(let i=0;i<list.length;i++) {
                    let flat = list[i].flat;
                    let person = list[i].person;
                    //div - ячейка для данных по 1 кв
                    //listFlatId.push(resp[i].idFlat);
                    //alert("формируемый массив - "+listFlatId.length);
                    let div1 = document.createElement('div');
                    div1.style.display="flex";
                    div1.style.border="1px solid blue";

                    //orderId
                    // let divI = document.createElement('div');
                    // divI.style.marginRight='10px';
                    // //вставляем id квартиры из тбазы данных
                    // divI.innerText = list[i].orderId;
                    // div1.appendChild(divI);
                    //flatId
                    let divIdFlat = document.createElement('div');
                    divIdFlat.style.marginRight='10px';
                    //вставляем id квартиры из тбазы данных
                    divIdFlat.innerText = 'idFlat -'+flat.idFlat;
                    div1.appendChild(divIdFlat);
                    // //name
                    // let divName = document.createElement('div');
                    // divName.style.marginRight='10px';
                    // divName.innerText = flat.nameFlat;
                    // div1.appendChild(divName);
                    // //price
                    // let divPrice = document.createElement('div');
                    // divPrice.style.marginRight='10px';
                    // divPrice.innerText = flat.price;
                    // div1.appendChild(divPrice);
                    // //rating
                    // let divRating = document.createElement('div');
                    // divRating.style.marginRight='10px';
                    // divRating.innerText = flat.ratingFlat;
                    // div1.appendChild(divRating);
                    // // //Address
                    // let divAddress = document.createElement('div');
                    // divAddress.style.marginRight='10px';
                    // divAddress.innerText = 'Адрес - '+flat.countryFlat+', '+flat.cityFlat+', '+flat.addressFlat;
                    // div1.appendChild(divAddress);

                    //close order
                    let butUpdate = document.createElement('input');
                    butUpdate.type='button';
                    butUpdate.addEventListener('click', function(){
                        closeOrder(list[i].orderId, 2);
                    });
                    butUpdate.style.marginRight='10px';
                    butUpdate.value = 'Close';
                    div1.appendChild(butUpdate);
                    //вторая строка
                    let div2 = document.createElement('div');
                    div2.style.display='flex';
                    div2.style.border="1px solid blue";
                    // //image
                    // let divImage = document.createElement('div');
                    // divImage.style.marginRight='10px';
                    // let img = document.createElement('img');
                    // img.height=200;
                    // img.src=flat.image;
                    // divImage.appendChild(img);
                    // div2.appendChild(divImage);
                    // //about
                    // let divAbout = document.createElement('div');
                    // divAbout.style.marginRight='10px';
                    // divAbout.innerText = flat.about;
                    // div2.appendChild(divAbout);
                    //
                    //startDate
                    let startDate = document.createElement('div');
                    startDate.style.marginRight='10px';
                    startDate.innerText =new Date(list[i].startDate).toLocaleDateString();
                    div2.appendChild(startDate);
                    //
                    //endDate
                    let endDate = document.createElement('div');
                    endDate.style.marginRight='10px';
                    endDate.innerText = new Date(list[i].endDate).toLocaleDateString();
                    div2.appendChild(endDate);
                    //
                    let personRating = document.createElement('div');
                    personRating.style.marginRight='10px';
                    personRating.innerText = 'РП - '+person.ratingPerson;
                    div2.appendChild(personRating);
                    //сборка

                    let divAll = document.createElement('div');
                    divAll.appendChild(div1);
                    divAll.appendChild(div2);
                    // вставляем все данные по 1 объекту в scroll
                    divFlat.appendChild(divAll);
                }
                orderFlat.appendChild(divFlat);
            }
            else{

                orderFlat.innerText = "Список заказов на вашу недвижимость пуст.";
            }
        }
        else{
            alert("где то ошибка")
        }
    }

}
function getHistory(i){
     let num = Number(i);

    if(num===1){
        //person
        window.location = "http://localhost:9000/order/history.html?idhistory="+num;
          }
    else{
        //list flat sessionStorage.getItem('ListFlatId')
        window.location = "http://localhost:9000/order/history.html?idhistory="+num;
    }

}

function closeOrder(idOrder, type){
    sessionStorage.removeItem('closeId');
    let idO = Number(idOrder);
    sessionStorage.setItem('closeId', idO);
    window.location = "http://localhost:9000/order/close-order.html?type="+Number(type);
}