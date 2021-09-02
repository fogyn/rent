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
            //alert("список пришел");
            let orders = document.getElementById("ListFlatDate");
            //alert(list.length);

            if(list.length>0){
                orders.style.border='1px solid black';
                let title = document.createElement('h3');
                title.innerText='Список состоит из - '+list.length;
                orders.appendChild(title);
                let divFlat = document.createElement('div');
                divFlat.style.height='200px';
                divFlat.style.overflow='scroll';

                for(let i=0;i<list.length;i++) {
                    // let flat = list[i].flat;
                    // let person = list[i].person;
                    // //div - ячейка для данных по 1 кв
                    // //listFlatId.push(resp[i].idFlat);
                    // //alert("формируемый массив - "+listFlatId.length);
                    // let div1 = document.createElement('div');
                    // div1.style.display="flex";
                    // div1.style.border="1px solid blue";
                    //
                    // //orderId
                    // let divI = document.createElement('div');
                    // divI.style.marginRight='10px';
                    // //вставляем id квартиры из тбазы данных
                    // divI.innerText = list[i].orderId;
                    // div1.appendChild(divI);
                    // //flatId
                    // let divIdFlat = document.createElement('div');
                    // divIdFlat.style.marginRight='10px';
                    // //вставляем id квартиры из тбазы данных
                    // divIdFlat.innerText = 'idFlat -'+flat.idFlat;
                    // div1.appendChild(divIdFlat);
                    // // //name
                    // // let divName = document.createElement('div');
                    // // divName.style.marginRight='10px';
                    // // divName.innerText = flat.nameFlat;
                    // // div1.appendChild(divName);
                    // // //price
                    // // let divPrice = document.createElement('div');
                    // // divPrice.style.marginRight='10px';
                    // // divPrice.innerText = flat.price;
                    // // div1.appendChild(divPrice);
                    // // //rating
                    // // let divRating = document.createElement('div');
                    // // divRating.style.marginRight='10px';
                    // // divRating.innerText = flat.ratingFlat;
                    // // div1.appendChild(divRating);
                    // // // //Address
                    // // let divAddress = document.createElement('div');
                    // // divAddress.style.marginRight='10px';
                    // // divAddress.innerText = 'Адрес - '+flat.countryFlat+', '+flat.cityFlat+', '+flat.addressFlat;
                    // // div1.appendChild(divAddress);
                    //
                    // //close order
                    // let butUpdate = document.createElement('input');
                    // butUpdate.type='button';
                    // butUpdate.addEventListener('click', function(){
                    //     closeOrder(list[i].orderId);
                    // });
                    // butUpdate.style.marginRight='10px';
                    // butUpdate.value = 'Close';
                    // div1.appendChild(butUpdate);
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
                    // let personRating = document.createElement('div');
                    // personRating.style.marginRight='10px';
                    // personRating.innerText = 'РП - '+person.ratingPerson;
                    // div2.appendChild(personRating);
                    //сборка

                    let divAll = document.createElement('div');
                    //divAll.appendChild(div1);
                    divAll.appendChild(div2);
                    // вставляем все данные по 1 объекту в scroll
                    divFlat.appendChild(divAll);
                }
                orders.appendChild(divFlat);

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
        person: {
            id:Number(idPerson)
        },
        flat:{
            idFlat:Number(idFlat.innerText)
        },
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