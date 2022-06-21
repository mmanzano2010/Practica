/*Modal*/
var modal = document.getElementById("formulario");
var boton = document.getElementById("formulario_boton");
var span = document.getElementsByClassName("close")[0];

boton.onclick = function () {
    modal.style.display="block";
}

span.onclick = function () {
    modal.style.display="none";
}

window.onclick = function (event) {
    if (event.target==modal){
        modal.style.display="none";
    }
}
