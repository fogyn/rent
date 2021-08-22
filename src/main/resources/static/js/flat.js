let imgFlat ='';
function getFlatParameters(){

    let nameFlat = document.getElementById('Name');
    let addressFlat = document.getElementById('Address');
    let cityFlat = document.getElementById('City');
    let countryFlat = document.getElementById('Country');
    let aboutFlat = document.getElementById('Description');
    let priceFlat = document.getElementById('Price');

    return {

        nameFlat: nameFlat.value,
        cityFlat: cityFlat.value,
        countryFlat: countryFlat.value,
        addressFlat: addressFlat.value,
        about: aboutFlat.value,
        price: priceFlat.value,
        image: imgFlat,
        ratingFlat: 10,
        person: sessionStorage.getItem('Id')
    };

}

async function newFlat(){

    let flat = getFlatParameters();
    //alert(client.namePerson);
    //client.id =0;
    let response = await fetch('http://localhost:9000/create-new_flat',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(flat)
    });
    if(response.ok) {
        // alert("создание нового объекта -  ok");
        // let answer = await response.json();
        window.location = "http://localhost:9000/client/client-autentification.html";
    }
    else{
        alert('ошибка добавления данных');
    }
}
function previewFile() {

    let preview = document.getElementById("ImgPreview");
    let file    = document.getElementById("Img").files[0];
    let reader  = new FileReader();

    reader.onloadend = function () {
        let str = reader.result;
        preview.src = str;
        imgFlat = str;

    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}



export function editFlat(idFlat){
    alert('edit - '+idFlat);
}
export function deleteFlat(idFlat){
    alert('delete - '+idFlat);
}