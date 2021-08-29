//var token = sessionStorage.getItem('userKey')

async function searchAllFlats(){
    let detail = document.getElementById('Detail');
    detail.textContent='';
    let token = sessionStorage.getItem('userKey');
    let response = await fetch("http://localhost:9000/searchAllFlat/"+Number(sessionStorage.getItem('Id')),{

        headers:{
            Authorization:token
        }

    });
    let rezult = document.getElementById('Rezult');
    rezult.textContent = '';
    rezult.style.border='1px solid black';
    if(response.ok){
        let resp = await response.json();
        //rezult.innerText = "число квартир = "+answer.length;
        if(resp.length>0){
            let title = document.createElement('h3');
            title.innerText='Список недвижимости состоит из - '+resp.length;
            rezult.appendChild(title);

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
                divAddress.innerText = resp[i].addressFlat;
                div1.appendChild(divAddress);

                //City
                let divCity = document.createElement('div');
                divCity.style.marginRight='10px';
                divCity.innerText = resp[i].cityFlat;
                div1.appendChild(divCity);
                //Country
                let divCountry = document.createElement('div');
                divCountry.style.marginRight='10px';
                divCountry.innerText = resp[i].countryFlat;
                div1.appendChild(divCountry);

                //ссылка на владельца

                let divPerson = document.createElement('input');
                divPerson.type='button';
                divPerson.addEventListener('click', function(){
                    getPerson(resp[i].person);
                });
                divPerson.style.marginRight='10px';
                divPerson.value = 'Person';
                div1.appendChild(divPerson);

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
                //Order

                let divOrder = document.createElement('input');
                divOrder.type='button';
                divOrder.addEventListener('click', function(){
                    getOrder(resp[i].idFlat);
                });
                divOrder.style.marginRight='10px';
                divOrder.value = 'Order';
                div2.appendChild(divOrder);

                let divAll = document.createElement('div');
                divAll.appendChild(div1);
                divAll.appendChild(div2);
                // вставляем все данные по 1 объекту в scroll
                divFlat.appendChild(divAll);

            }
            rezult.appendChild(divFlat);

        }
        else{

            rezult.innerText = 'Список недвижимости пуст';
        }
    }
    else{
        rezult.innerText="запрос завершился не удачей";
    }
}
async function searchAllPersons(){
    let token = sessionStorage.getItem('userKey');
    let response = await fetch("http://localhost:9000/searchAllPerson/"+Number(sessionStorage.getItem('Id')),{

        headers:{
            Authorization:token
        }

    });
    let rezult = document.getElementById('Rezult');
    let detail = document.getElementById('Detail');

    detail.textContent='';
    rezult.textContent = '';

    rezult.style.border='1px solid black';
    if(response.ok){
        let resp = await response.json();
        if(resp.length>0) {
            let title = document.createElement('h3');
            title.innerText = 'Список арендателей состоит из - ' + resp.length;
            rezult.appendChild(title);

            let divPerson = document.createElement('div');
            divPerson.style.height='200px';
            divPerson.style.overflow='scroll';

            for(let i=0;i<resp.length;i++) {
                let detailPerson = document.createElement('div');
                detailPerson.style.display="flex";
                detailPerson.style.border="1px solid blue";

                let id = document.createElement('div');
                id.style.marginRight='10px';
                id.innerText=i+1;
                detailPerson.appendChild(id);

                let name = document.createElement('div');
                name.style.marginRight='10px';
                name.innerText=resp[i].namePerson;
                detailPerson.appendChild(name);

                let address = document.createElement('div');
                address.style.marginRight='10px';
                address.innerText=resp[i].addressPerson;
                detailPerson.appendChild(address);

                let city = document.createElement('div');
                city.style.marginRight='10px';
                city.innerText=resp[i].cityPerson;
                detailPerson.appendChild(city);

                let country = document.createElement('div');
                country.style.marginRight='10px';
                country.innerText=resp[i].countryPerson;
                detailPerson.appendChild(country);

                let phone = document.createElement('div');
                phone.style.marginRight='10px';
                phone.innerText=resp[i].phone;
                detailPerson.appendChild(phone);

                let email = document.createElement('div');
                email.style.marginRight='10px';
                email.innerText=resp[i].email;
                detailPerson.appendChild(email);

                let rating = document.createElement('div');
                rating.style.marginRight='10px';
                rating.innerText=resp[i].ratingPerson;
                detailPerson.appendChild(rating);

                let image = document.createElement('div');
                let img = document.createElement('img');
                img.src=resp[i].image;
                image.appendChild(img);
                detailPerson.appendChild(image);

                let flats = document.createElement('input');
                flats.type='button';
                flats.addEventListener('click', function(){
                    getFlats(resp[i].id);
                });
                flats.style.marginRight='10px';
                flats.value = 'Flats';
                detailPerson.appendChild(flats);

                divPerson.appendChild(detailPerson);
            }

            rezult.appendChild(divPerson);
        }
        else{
            rezult.innerText = 'Список арендателей пуст';
        }
    }
    else{
        rezult.innerText="запрос завершился не удачей";
    }
}

function getPerson(person){
    let detailPerson = document.getElementById('Detail');
    detailPerson.textContent = '';

    let id = document.createElement('div');
    id.innerText=person.id;
    detailPerson.appendChild(id);

    let name = document.createElement('div');
    name.innerText=person.namePerson;
    detailPerson.appendChild(name);

    let address = document.createElement('div');
    address.innerText=person.addressPerson;
    detailPerson.appendChild(address);

    let city = document.createElement('div');
    city.innerText=person.cityPerson;
    detailPerson.appendChild(city);

    let country = document.createElement('div');
    country.innerText=person.countryPerson;
    detailPerson.appendChild(country);

    let phone = document.createElement('div');
    phone.innerText=person.phone;
    detailPerson.appendChild(phone);

    let email = document.createElement('div');
    email.innerText=person.email;
    detailPerson.appendChild(email);

    let rating = document.createElement('div');
    rating.innerText=person.ratingPerson;
    detailPerson.appendChild(rating);

    let image = document.createElement('div');
    let img = document.createElement('img');
    img.src=person.image;
    image.appendChild(img);
    detailPerson.appendChild(image);
    //
}
async function getFlats(id){
    let token = sessionStorage.getItem('userKey');
    alert('зашел 11111 - '+id);
    let detailPerson = document.getElementById('Detail');
    detailPerson.textContent = '';

    let response = await fetch('http://localhost:9000/flatByPerson//'+Number(id), {

        headers:{
            Authorization:token
        }

    });
    if(response.ok) {
        let resp = await response.json();
        let list = document.createElement('div');
        list.style.border='1px solid black';

        let title = document.createElement('h3');
        title.innerText='Список состоит из - '+Number(resp.length);
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

            //Order
            let divOrder = document.createElement('input');
            divOrder.type='button';
            divOrder.addEventListener('click', function(){
                getOrder(resp[i].idFlat);
            });
            divOrder.style.marginRight='10px';
            divOrder.value = 'Order';
            div2.appendChild(divOrder);

            // собираем все в один div и  вставляем в общий
            let divAll = document.createElement('div');
            divAll.appendChild(div1);
            divAll.appendChild(div2);
            // вставляем все данные по 1 объекту в scroll
            divFlat.appendChild(divAll);

        }
        list.appendChild(divFlat);
        detailPerson.appendChild(list);

    }
    else{
        detailPerson.innerText = 'Ошибка запроса flats';
    }

}

function getOrder(idFlat){
    window.location="http://localhost:9000/order/order.html?id="+Number(idFlat);


}