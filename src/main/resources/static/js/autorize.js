
function getClientParameters(){

    let phoneElement = document.getElementById('Phone');
    let passwordElement = document.getElementById("Password");

    return {
        login: phoneElement.value,
        password: passwordElement.value,
        };
}

async function autorizeClient(){
    sessionStorage.removeItem('userKey');
    let clientAutentification = getClientParameters();
    //client.id =0;
    let response = await fetch('http://localhost:9000/autentification',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(clientAutentification)
    });
    if(response.ok) {
        alert("аутентификация ok");
        //let answer = await response.json();
         let answerServ = await response.json();
         let answer = answerServ.person
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
        sessionStorage.setItem('userKey', answerServ.token)
        //alert(answerServ.token)
        //alert(sessionStorage.getItem('userKey'))
        //alert(answerServ.token)



        window.location = "http://localhost:9000/client/client-autentification.html";
    }
    else{
        alert('ошибка аутентификации данных');
        let errorElement = document.getElementById('ErrorAutentification');
        errorElement.innerText='ошибка аутентификации данных';

    }

}
async function testData(){
    //alert('Тестовое заполнение');
    //создаем клиента с 0 объектами недвижимости
    let client0 = {

        namePerson: 'name0-test',
        cityPerson: 'city0-test',
        countryPerson: 'country0-test',
        addressPerson: 'addres0-test',
        phone: '121212121212',
        email: 'email12-test',
        image: null,
        password: '1',
        ratingPerson: 10
    };
    let response0 = await fetch('http://localhost:9000/create-new-person',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(client0)
    });
    if(response0.ok) {
        alert("регистрация0 !!! ok");
   }
    else{
        alert('ошибка добавления данных при создании пользователя 0');
    }
    //создаем клиента с 1 объектами недвижимости
    let client = {

        namePerson: 'name-test',
        cityPerson: 'city-test',
        countryPerson: 'country-test',
        addressPerson: 'addres-test',
        phone: '131313131313',
        email: 'email13-test',
        image: null,
        password: '2',
        ratingPerson: 10
    };
    let response = await fetch('http://localhost:9000/create-new-person',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(client)
    });
    if(response.ok) {
        //alert("регистрация1 !!! ok");
        let answerServ = await response.json();
        let answer2 = answerServ.person
       let token = answerServ.token;
        alert(token);

        let flat = {
            nameFlat:"name-flat",
            cityFlat:"city-flat",
            countryFlat:"country-flat",
            addressFlat:"str-flat",
            about:"text",
            price: 100,
            ratingFlat: 10,
            image: null,
            person:{
                id: Number(answer2.id)
            }
        }
    //alert('flat сформирована');
        let response2 = await fetch('http://localhost:9000/create-new_flat',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json;charset=utf-8',
                Authorization:answerServ.token
            },
            body: JSON.stringify(flat)
        });
        if(response2.ok){
            //alert("flat !!! ok");
        }
        else{
            alert('ошибка добавления данных при добавлении объекта недвижимости 2');
        }

    }
    else{
        alert('ошибка добавления данных при создании пользователя 2');
    }
    //создаем клиента с 5 объектами недвижимости
    let client2 = {

        namePerson: 'name-test',
        cityPerson: 'city-test',
        countryPerson: 'country-test',
        addressPerson: 'addres-test',
        phone: '141414141414',
        email: 'email14-test',
        image: null,
        password: '3',
        ratingPerson: 10
    };
    let response3 = await fetch('http://localhost:9000/create-new-person',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(client2)
    });
    if(response3.ok) {
        //alert("регистрация13 !!! ok");
        let answerServ = await response3.json();
        let answer3 = answerServ.person
        let token3 = answerServ.token;
        alert(token3)
        for(i=0;i<5;i++){
            let flat1 = {
                nameFlat:"name-flat"+i,
                cityFlat:"city-flat"+i,
                countryFlat:"country-flat"+i,
                addressFlat:"str-flat"+i,
                about:"text"+i,
                price: 100,
                ratingFlat: 10,
                image: null,
                person:{
                    id: Number(answer3.id)
                }
            }

            let response31 = await fetch('http://localhost:9000/create-new_flat',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json;charset=utf-8',
                    Authorization: token3
                },
                body: JSON.stringify(flat1)
            });
            if(response31.ok){
               // alert("flat !!! ok - "+i);
            }
            else{
                alert('ошибка добавления данных при добавлении объекта недвижимости 3');
            }
        }



    }
    else{
        alert('ошибка добавления данных при создании пользователя 3');
    }
}