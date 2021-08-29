async function loadOrder(){

    let searchParams = new URLSearchParams(document.location.search);
    let idFlat = searchParams.get("id");
    let flatOrderId = document.getElementById('FlatOrderId');
    alert(idFlat)
    flatOrderId.innerText = idFlat;

}
function back(){
    window.location = "http://localhost:9000/client/client-autentification.html";
}

async function newOrder(){

}