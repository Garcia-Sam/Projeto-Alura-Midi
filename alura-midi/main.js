const listasDeTeclas = document.querySelectorAll(".tecla")

console.log(listasDeTeclas)

let contador = 0

function tocaSomPom(){
    document.querySelectorAll("#som_tecla_pom").play()
}

//enquanto
while (contador < listasDeTeclas.length){
    listasDeTeclas[contador].onclick = tocaSomPom
    contador = contador + 1 
    console.log(contador)
}
