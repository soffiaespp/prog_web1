let paragrafo = document.getElementById("primParag")
let segparagrafo = document.getElementById("segParag")

function mudarParag() {
    paragrafo.textContent = "Paragrafo atualizado"  
}

function mudarCor() {
    paragrafo.style.color = "red"
    paragrafo.textContent = "Cursor entrou no botão"
}

function mudarCorSaida() {
    paragrafo.style.color = "green"
    paragrafo.textContent = "Cursor saiu do botão"
}

let div = document.getElementById("div1")

function mudarCorDiv() {
    div.style.backgroundColor = "pink"
    segparagrafo.textContent = "Cursor entrou na div"
}

function mudarCorDivSaida() {
    div.style.backgroundColor = "blue"
    segparagrafo.textContent = "Cursor saiu da div"
}