async function loadOrder(){
    let token = sessionStorage.getItem('userKey')
    let searchParams = new URLSearchParams(document.location.search);
    let idFlat = searchParams.get("id");
    let flatOrderId = document.getElementById('FlatOrderId');
    alert(idFlat)
    flatOrderId.innerText = idFlat;

    let response = await fetch("http://localhost:9000/getFlatById/"+Number(idFlat),{

        headers:{
            Authorization:token
        }

    });

    if(response.ok){
        let flat = await response.json();
        alert(flat.idFlat)
        let person = flat.person;
        getFlat(flat);
        getPerson(person);

        let list = [];
        let flat1 = {
            idFlat:Number(idFlat)
        }
        list.push(flat1);
//alert(list[0].idFlat);
        let orderDTO = {
            listFlat: list,
            dateBoolean: true,
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
            alert("список пришел");
            let orders = document.getElementById("ListFlatDate");
            alert(list.value);

            if(list.length>0){


                orders.innerText = "Список заказов = "+Number(list.length);
            }
            else{

                orders.innerText = "Список заказов на эту недвижимость пуст.";
            }
        }
        else{
            alert("где то ошибка")
        }


    }

    else{
            alert('ошибка получения данных');

    }

}

function getFlat(flat){

    let idFlat = document.getElementById('IdFlat');
    idFlat.innerText = flat.idFlat;

    let nameFlat = document.getElementById('NameFlat');
    nameFlat.innerText = flat.nameFlat;

    let addressFlat = document.getElementById('AddressFlat');
    addressFlat.innerText = flat.addressFlat;

    let cityFlat = document.getElementById('CityFlat');
    cityFlat.innerText = flat.cityFlat;

    let countryFlat = document.getElementById('CountryFlat');
    countryFlat.innerText = flat.countryFlat;

    let aboutFlat = document.getElementById('About');
    aboutFlat.innerText = flat.about;

    let priceFlat = document.getElementById('Price');
    priceFlat.innerText = flat.price;

    let ratingFlat = document.getElementById('RatingFlat');
    ratingFlat.innerText = flat.ratingFlat;

    let preview = document.getElementById('ImgPreviewFlat');
    let img = flat.image;
    preview.src = img;
}
function getPerson(person){


    let idElement = document.getElementById('Id');
    idElement.innerText = person.id;

    let nameElement = document.getElementById('Name');
    nameElement.innerText = person.namePerson;

    let addressElement = document.getElementById('Address');
    addressElement.innerText = person.addressPerson;

    let cityElement = document.getElementById('City');
    cityElement.innerText = person.cityPerson;

    let countryElement = document.getElementById('Country');
    countryElement.innerText = person.countryPerson;

    let phoneElement = document.getElementById('Phone');
    phoneElement.innerText = person.phone;

    let emailElement = document.getElementById('Email');
    emailElement.innerText = person.email;

    let ratingElement = document.getElementById("Rating");
    ratingElement.innerText = person.ratingPerson;

    let preview = document.getElementById("ImgPreview");
    let img = person.image;
    preview.src = img;
}
function getOrderByDate(){

}

function back(){
    window.location = "http://localhost:9000/client/client-autentification.html";
}

function calculatePrice(){

    let allPrice = document.getElementById('AllPrice');
    let dateOn = document.getElementById('DateOn');
    let dateOff = document.getElementById('DateOff');
    let price = document.getElementById('Price');
    let day = dateOff.valueAsNumber-dateOn.valueAsNumber;
    day = day/(1000*3600*24);

    let allPrice2 = day*Number(price.innerText)
    allPrice.innerText = allPrice2 ;



}
function getParamOrder(){
    //покупатель
    let idPerson = sessionStorage.getItem('Id');
    alert(idPerson);
    let idFlat = document.getElementById('IdFlat');
    let dateOn = document.getElementById('DateOn');
    let dateOff = document.getElementById('DateOff');

    return {
        personId: Number(idPerson),
        flatId: Number(idFlat.innerText),
        startDate: dateOn.value,
        endDate: dateOff.value
    }

}

async function newOrder(){

    let token = sessionStorage.getItem('userKey')
    let newOrder = getParamOrder();

    let response = await fetch('http://localhost:9000/create-new-order',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
            Authorization:token
        },
        body: JSON.stringify(newOrder)
    });
    if(response.ok) {
        alert('все ок');
        //
        window.location = "http://localhost:9000/client/client-autentification.html";
    }
    else{

        let orderError = document.getElementById('ErrorCreateOrder');
        orderError.innerText = 'Что то не так с заказом';

    }
}