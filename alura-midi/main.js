const listasDeTeclas = document.querySelectorAll(".tecla")

let contador = 0

function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

//enquanto
while (contador < listasDeTeclas.length){

    const tecla = listasDeTeclas[contador]
    const instrumento = tecla.classList[1]

    //template string
    const idAudio = `#som_${instrumento}`
    //console.log(idAudio)

    tecla.onclick = function (){
        tocaSom(idAudio)
    }
    contador = contador + 1 
    console.log(contador)
}
