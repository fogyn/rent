async  function loadHistory(){

    // let test = sessionStorage.getItem('test');
    // let t = await test.json();
    // alert(t.id.value);
    // alert(t.name.value);
    //
    let searchParams = new URLSearchParams(document.location.search);
    let idhistory = searchParams.get("idhistory");
    let flatOrderId = document.getElementById('IdHistory');
    //let rez = document.getElementById('Rez');
    //alert(idhistory);
    if(Number(idhistory)===1){
        flatOrderId.innerText = 'история ваших покупок';
        //rez.innerText = 'пришли то что вы купили';

        await loadOrder2(sessionStorage.getItem('Id'));
    }
    else{
        flatOrderId.innerText = 'история покупок у вас';
        //rez.innerText = 'пришли то что купили у вас!!!!!!!!!!!';

        await loadOrder3(sessionStorage.getItem('ListFlatId'));
    }





}
function back(){
    window.location = "http://localhost:9000/client/client-autentification.html";
}

// я арендовал - мой id
async function loadOrder2(personId){
    //alert("заказчик по id!!!!!!!!!!!!!="+personId)
    let token = sessionStorage.getItem('userKey');

    let personDTO = {
        person: {
            id:Number(personId)
        },
        dateBoolean: false
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
        let orderPerson = document.getElementById('Rez');
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
        let orderFlat = document.getElementById('Rez');
        orderFlat.innerText = "Список заказов на вашу недвижимость пуст.";
    }
    else{
        let mas = listFlatId.split(",");

        for(let i=0; i<mas.length;i++){
            //console.log(mas[i]);
            listId.push(Number(mas[i]));
        }
        //alert("список недвижимости !!!!!!!!!- "+listId .length)
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
            dateBoolean: false
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
            let orderFlat = document.getElementById('Rez');
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