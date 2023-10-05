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

    tecla.onkeydown = function (evento){
        console.log(evento.code)      
        
         if(evento.code === "Space" || evento.code === "Enter") {
             tecla.classList.add('ativa')
         }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
}
