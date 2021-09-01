function loadClose(){
    let idOrder = Number(sessionStorage.getItem('closeId'));
    alert(idOrder);
}

function back(){
    window.location = "http://localhost:9000/client/client-autentification.html";
}