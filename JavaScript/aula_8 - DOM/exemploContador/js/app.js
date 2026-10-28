let valorElemento = document.getElementById("valor")
let btnmenos = document.getElementById("menos")
let btnmais = document.getElementById("mais")

let contador = 0

btnmais.addEventListener('click', ()=>{
    contador++
    valorElemento.textContent = contador
} )

btnmenos.addEventListener('click', ()=>{
    contador--
    valorElemento.textContent = contador
    if(contador<0) {
    valorElemento.style.color = "red"
} else if (contador>0){
    valorElemento.style.color = "blue"
}
})


