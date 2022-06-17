/*Galeria*/
let indiceImagen = 1;
mostrarImagen(indiceImagen);

function siguiente(n){
    mostrarImagen(indiceImagen += n);
}

function imagenActual(n){
    mostrarImagen(indiceImagen = n);
}

function mostrarImagen(n){
    let i;
    let imagenes = document.getElementsByClassName("imagenes")
    let botoncitos = document.getElementsByClassName("dot")
    if (n> imagenes.length){
        indiceImagen =1;
    }
    if (n<1){
        indiceImagen=imagenes.length;
    }
    for (i=0;i<imagenes.length;i++){
        imagenes[i].style.display="none";
    }
    for (i=0;i<botoncitos.length;i++){
        botoncitos.className = botoncitos[i].className.replace(" active","");
    }
    imagenes[indiceImagen-1].style.display = "block";
    botoncitos[indiceImagen-1].className += " active";
}