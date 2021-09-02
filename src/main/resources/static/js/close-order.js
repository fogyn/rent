let token = sessionStorage.getItem('userKey');
let typePerson;
let respOrder;
async function loadClose(){
    let searchParams = new URLSearchParams(document.location.search);
    typePerson = searchParams.get("type");
    let idOrder = Number(sessionStorage.getItem('closeId'));
    let lab =document.getElementById('LabelPerson');
    //alert(idOrder);
    let dop = document.getElementById('Dop');
    respOrder = await getOrderId(idOrder);
    //alert("id order - "+respOrder.orderId);
    //let respOrder = JSON.parse(await respOrder1);
    viewOrder(respOrder);
    viewFlat(respOrder);

    if(Number(typePerson)===1){

        let person = respOrder.flat.person;
        viewPerson(person);
        //alert("person - тот кто владелец недвижимости");
        dop.style.display='block';
        lab.innerText = 'Выставте оценку владельцу';

    }
    else{
        let person = respOrder.person;
        viewPerson(person);
        //alert("person - тот кто снял недвижимость у вас");
        dop.style.display='none';
        lab.innerText = 'Выставте оценку арендателю';
    }


    // await
    // await viewPerson(respOrder);
}

function back(){
    window.location = "http://localhost:9000/client/client-autentification.html";
}
async function closeOrderOk(){
    alert('сделка закрыта');
   await closeUpdateOrder()
    //window.location = "http://localhost:9000/client/client-autentification.html";
}

async function getOrderId(idOrder){
    let response = await fetch("http://localhost:9000/getOrderById/"+Number(idOrder), {
        headers:{
            Authorization:token
        }
    });

    if(response.ok){
        alert("запрос на ордер ok");
        let r =  await response.json();
        return r;

    }
    else{
        // let deleteElement = document.getElementById('InformFlat');
        // deleteElement.innerText = 'запрос на редактирование не прошел';
        alert('где то по order ошибка');
    }
}

function viewOrder(respOrder){
   // alert(respOrder.orderId);

    let viewOrder = document.getElementById('Order');

    let divIdOrder = document.createElement('div');
    //divName.style.marginRight='10px';
    divIdOrder.innerText = 'idOrder - '+respOrder.orderId;
    viewOrder.appendChild(divIdOrder);
    //
    let d1 = new Date(respOrder.startDate);
    let d2 = new Date(respOrder.endDate);
    //
    let divStartDate = document.createElement('div');
    //divName.style.marginRight='10px';
    divStartDate.innerText = 'StartDate - '+d1.toLocaleDateString();
    viewOrder.appendChild(divStartDate);

    let divEndDate = document.createElement('div');
    //divName.style.marginRight='10px';
    divEndDate.innerText = 'StartDate - '+d2.toLocaleDateString();
    viewOrder.appendChild(divEndDate);

    let divAllPrice = document.createElement('div');
    //divName.style.marginRight='10px';
    let day = d2-d1;
    day = day/(1000*3600*24);
    divAllPrice.innerText = 'Полная стоимость - '+day*Number(respOrder.flat.price);
    viewOrder.appendChild(divAllPrice);

    let divAllDate = document.createElement('div');
    divAllDate.innerText = 'Полное Количество дней - '+day;
    viewOrder.appendChild(divAllDate);

    let divCurrentDate = document.createElement('div');
    let currentDay = new Date();
    let useDay = currentDay-d1;
    useDay = useDay/(1000*3600*24);
    divCurrentDate.innerText = 'Использованное количество дней - '+Math.round(useDay);
    viewOrder.appendChild(divCurrentDate);

}
function viewFlat(respOrder){
    //alert('flat');

    let viewFlat = document.getElementById('Flat');

    let divIdFlat = document.createElement('div');
    //divName.style.marginRight='10px';
    divIdFlat.innerText = 'idFlat - '+respOrder.flat.idFlat;
    viewFlat.appendChild(divIdFlat);
    //
    let divNameFlat = document.createElement('div');
    divNameFlat.innerText = 'Название - '+respOrder.flat.nameFlat;
    viewFlat.appendChild(divNameFlat);
    //
    let divAddressFlat = document.createElement('div');
    divAddressFlat.innerText = 'Адрес - '+respOrder.flat.addressFlat;
    viewFlat.appendChild(divAddressFlat);
    //
    let divCityFlat = document.createElement('div');
    divCityFlat.innerText = 'Город - '+respOrder.flat.cityFlat;
    viewFlat.appendChild(divCityFlat);
    //
    let divCountryFlat = document.createElement('div');
    divCityFlat.innerText = 'Страна - '+respOrder.flat.countryFlat;
    viewFlat.appendChild(divCityFlat);
    //
    let divAboutFlat = document.createElement('textarea');
    divAboutFlat.value = 'Описание - '+respOrder.flat.about;
    viewFlat.appendChild(divAboutFlat);
    //
    let divPriceFlat = document.createElement('div');
    divPriceFlat.innerText = 'Цена - '+respOrder.flat.price;
    viewFlat.appendChild(divPriceFlat);
    //
    let divRatingFlat = document.createElement('div');
    divRatingFlat.innerText = 'Рейтинг - '+respOrder.flat.ratingFlat;
    viewFlat.appendChild(divRatingFlat);
    //image
    let divImage = document.createElement('div');
    //divImage.style.marginRight='10px';
    let img = document.createElement('img');
    img.height=200;
    img.src=respOrder.flat.image;
    divImage.appendChild(img);
    viewFlat.appendChild(divImage);
}
function viewPerson(person){
    alert('peerson');
    let viewPerson = document.getElementById('Person');

    let divIdPerson = document.createElement('div');
    //divName.style.marginRight='10px';
    divIdPerson.innerText = 'idPerson - '+person.id;
    viewPerson.appendChild(divIdPerson);
    //
    let divNamePerson = document.createElement('div');
    divNamePerson.innerText = 'Имя - '+person.namePerson;
    viewPerson.appendChild(divNamePerson);
    //
    let divAddressPerson = document.createElement('div');
    divAddressPerson.innerText = 'Адрес - '+person.addressPerson;
    viewPerson.appendChild(divAddressPerson);
    //
    let divCityPerson = document.createElement('div');
    divCityPerson.innerText = 'Город - '+person.cityPerson;
    viewPerson.appendChild(divCityPerson);
    //
    let divCountryPerson = document.createElement('div');
    divCountryPerson.innerText = 'Страна - '+person.countryPerson;
    viewPerson.appendChild(divCountryPerson);
    //
    let divAboutPhone = document.createElement('div');
    divAboutPhone.innerText = 'Телефон - '+person.phone;
    viewPerson.appendChild(divAboutPhone);
    //
    let divEmail = document.createElement('div');
    divEmail.innerText = 'Email - '+person.email;
    viewPerson.appendChild(divEmail);
    //
    let divRatingPerson = document.createElement('div');
    divRatingPerson.innerText = 'Рейтинг - '+person.ratingPerson;
    viewPerson.appendChild(divRatingPerson);
    //image
    let divImage = document.createElement('div');
    //divImage.style.marginRight='10px';
    let img = document.createElement('img');
    img.height=200;
    img.src=person.image;
    divImage.appendChild(img);
    viewPerson.appendChild(divImage);
}

function calculateRating(oldRating, newRating){
    let rez =  Math.round((oldRating+newRating)/2);
    return rez;
}

async function closeUpdateOrder(){
    alert('есть начало закрытия');
    alert(Number(typePerson));
    let fl = respOrder.flat;
    let pers;
    let newRatingFlat;
    let newRatingPerson;


    let divPerson = document.getElementById('RatingPerson');
    let ratingPerson = divPerson.value;
    alert('перед if');
    if(Number(typePerson)===1){

        let divFlat = document.getElementById('RatingFlat');
        let ratingFlat = divFlat.value;
        alert('перед if-1');
        newRatingFlat = calculateRating(fl.ratingFlat, ratingFlat);

        pers = respOrder.flat.person;
        alert('перед if-2');
    }
    else{

        newRatingFlat = fl.ratingFlat;
        pers = respOrder.person;
    }

    alert('после if');
    newRatingPerson = calculateRating(pers.ratingPerson, ratingPerson);

    fl.ratingFlat = newRatingFlat;
    let responseFlat = await fetch('http://localhost:9000/updateFlat',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
            Authorization:token
        },
        body: JSON.stringify(fl)
    });
    if(responseFlat.ok) {
        alert("flat");
        //window.location = "http://localhost:9000/client/client-autentification.html";
        pers.ratingPerson = newRatingPerson;
        let responsePerson = await fetch('http://localhost:9000/updatePerson',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json;charset=utf-8',
                Authorization:token
            },
            body: JSON.stringify(pers)
        });
        if(responsePerson.ok) {
            alert("person");
            respOrder.endDate = new Date();

            let responseOrder = await fetch('http://localhost:9000/updateOrder',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json;charset=utf-8',
                    Authorization:token
                },
                body: JSON.stringify(respOrder)
            });
            if(responseOrder.ok) {
                alert('Order - все ок');
                //
                window.location = "http://localhost:9000/client/client-autentification.html";
            }
            else{
                alert('ошибка добавления данных по order');
                // let orderError = document.getElementById('ErrorCreateOrder');
                // orderError.innerText = 'Что то не так с заказом';

            }
        }
        else{
            alert('ошибка добавления данных по person');
            // let updateElement = document.getElementById('UpdateAnswer');
            // updateElement.innerText = 'редактирование не удалось!';
        }

    }
    else{
        alert('ошибка редактирования данных по flat');
        // let updateElement = document.getElementById('UpdateAnswer');
        // updateElement.innerText = 'редактирование не удалось!';
    }



}