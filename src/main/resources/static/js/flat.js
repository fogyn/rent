let imgFlat ='';
//let token = sessionStorage.getItem('userKey')
function getFlatParameters(){

    let nameFlat = document.getElementById('Name');
    let addressFlat = document.getElementById('Address');
    let cityFlat = document.getElementById('City');
    let countryFlat = document.getElementById('Country');
    let aboutFlat = document.getElementById('About');
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
        person: {
            id: Number(sessionStorage.getItem('Id'))
        }
    };

}

async function newFlat(){
    let flat = getFlatParameters();
    let token = sessionStorage.getItem('userKey')
    let response = await fetch('http://localhost:9000/create-new_flat',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
            Authorization:token
        },
        body: JSON.stringify(flat)
    });
    if(response.ok) {
        window.location = "http://localhost:9000/client/client-autentification.html";
    }
    else{
        alert('ошибка добавления данных');
    }
}
function previewFile(){
    let preview = document.getElementById("ImgPreview");
    let file    = document.getElementById("Img").files[0];
    let reader  = new FileReader();

    reader.onloadend = function(){
        let str = reader.result;
        preview.src = str;
        imgFlat = str;
    }

    if (file){
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
