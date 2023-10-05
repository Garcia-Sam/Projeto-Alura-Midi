const listasDeTeclas = document.querySelectorAll(".tecla")

function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

//para
for (let contador = 0; contador < listasDeTeclas.length; contador++){

    const tecla = listasDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}` //template string

    tecla.onclick = function (){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (){
        tecla.classList.add('ativa')
    }
}
