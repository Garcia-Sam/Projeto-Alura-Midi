const listasDeTeclas = document.querySelectorAll(".tecla")

let contador = 0

function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

//enquanto
while (contador < listasDeTeclas.length){
    listasDeTeclas[contador].onclick = tocaSom
    contador = contador + 1 
    console.log(contador)
}
