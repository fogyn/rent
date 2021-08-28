let imgFlat ='';
//let token = sessionStorage.getItem('userKey')
async function loadFlatByUpdate(){
    alert("зашли на апдате");

    let idFlat = document.getElementById('IdFlat');
    idFlat.value = sessionStorage.getItem('IdFlat');

    let nameFlat = document.getElementById('NameFlat');
    nameFlat.value = sessionStorage.getItem('NameFlat');

    let addressFlat = document.getElementById('AddressFlat');
    addressFlat.value = sessionStorage.getItem('AddressFlat');

    let cityFlat = document.getElementById('CityFlat');
    cityFlat.value = sessionStorage.getItem('CityFlat');

    let countryFlat = document.getElementById('CountryFlat');
    countryFlat.value = sessionStorage.getItem('CountryFlat');

    let aboutFlat = document.getElementById('About');
    aboutFlat.value = sessionStorage.getItem('About');

    let priceFlat = document.getElementById('Price');
    priceFlat.value = sessionStorage.getItem('Price');

    let ratingFlat = document.getElementById('RatingFlat');
    ratingFlat.value = sessionStorage.getItem('RatingFlat');

    let preview = document.getElementById('ImgPreviewFlat');
    imgFlat = sessionStorage.getItem('ImgFlat');
    preview.src = imgFlat;


}
function back(){
    window.location = "http://localhost:9000/client/client-autentification.html";
}

function getFlatParameters(){
    let idFlat = document.getElementById('IdFlat');
    let nameFlat = document.getElementById('NameFlat');
    let addressFlat = document.getElementById('AddressFlat');
    let cityFlat = document.getElementById('CityFlat');
    let countryFlat = document.getElementById('CountryFlat');
    let aboutFlat = document.getElementById('About');
    let priceFlat = document.getElementById('Price');
    let ratingFlat = document.getElementById('RatingFlat');
    let preview = document.getElementById("ImgPreviewFlat");
    img= sessionStorage.getItem('ImgFlat');
    preview.src = img;

    return {
        idFlat: idFlat.value,
        nameFlat: nameFlat.value,
        cityFlat: cityFlat.value,
        countryFlat: countryFlat.value,
        addressFlat: addressFlat.value,
        about: aboutFlat.value,
        price: priceFlat.value,
        ratingFlat: ratingFlat.value,
        image: imgFlat,
        person: {
            id: Number(sessionStorage.getItem('Id'))
        }
    };

}

function previewFile() {

    let preview = document.getElementById("ImgPreviewFlat");
    let file    = document.getElementById("ImgFlat").files[0];
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

async function updateFlat(){
    let updateFlat = getFlatParameters();
    let token = sessionStorage.getItem('userKey')
    //
    let response = await fetch('http://localhost:9000/updateFlat',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
            Authorization:token
        },
        body: JSON.stringify(updateFlat)
    });
    if(response.ok) {

        window.location = "http://localhost:9000/client/client-autentification.html";
    }
    else{
        alert('ошибка редактирования данных');
        let updateElement = document.getElementById('UpdateAnswer');
        updateElement.innerText = 'редактирование не удалось!';
    }
}