// Chamando arquivo externo com json
var data = new String()
$.getJSON("data.json", function(result){
    data = result
    console.log(data)
    construirPagina()
})


function construirPagina() {
    var cardsID = document.getElementById("cards-produtos")

    data.forEach(element => {
        let lojaDestaque
        let menorPreco = element.varegistas[melhorPreco(element)].precoNovo
        let desconto = (100 - (element.varegistas[melhorPreco(element)].precoNovo * 100 / element.varegistas[melhorPreco(element)].precoAntigo)).toFixed()
        cardsID.innerHTML += `
            <div class="card-produtos">
                <a class="card-a" href="${element.linkDetalhes}">
                    <div class="card-img">
                        <img class="card-img-dentro" src="${element.imagemDoProduto}" alt="imagem-produto">
                    </div>
                    <h2 class="card-title">${element.nomeDoProduto}</h2>
                    <p class="card-preco">R$ ${Intl.NumberFormat('pt-BR').format(menorPreco)},00 <label for="card-preco">${desconto}%</label></p>
                    <p class="card-lojas">Melhor preço entre ${element.varegistas.length} lojas</p>
                </a>
            </div>
        `
    })

    function melhorPreco(element) {
        let menorValor
        let menorIndex
        let primeira = true
        for (i = 0; i < element.varegistas.length; i++) {
            if (primeira) {
                menorValor = element.varegistas[i].precoNovo
                menorIndex = i
                primeira = false
            }
            if (element.varegistas[i].precoNovo < menorValor) {
                menorValor = element.varegistas[i].precoNovo
                menorIndex = i
            }
        }
        return menorIndex
    }
}

