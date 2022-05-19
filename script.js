var data = [
    {
        "nomeDoProduto": "Personalize seu MacBook Pro de 13 polegadas – Prateado",
        "fabricanteDoProduto": "Apple",
        "descricaoDoProduto": "Chip M1 da Apple com CPU de 8 núcleos, GPU de 8 núcleos e Neural Engine de 16 núcleos",
        "imagemDoProduto": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202011_GEO_BR?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1632950237000",
        "linkDetalhes": "#",
        "varegistas": [
            { "nome": "Americanas", "precoNovo": 15400, "precoAntigo": 16395, "link": "#" },
            { "nome": "Submarino", "precoNovo": 13600, "precoAntigo": 16395, "link": "#" },
            { "nome": "Mercado Livre", "precoNovo": 15300, "precoAntigo": 16395, "link": "#" },
            { "nome": "Pichau", "precoNovo": 16100, "precoAntigo": 16395, "link": "#" },
        ],
    },
    {
        "nomeDoProduto": "Galaxy S22 5G Verde 128GB",
        "fabricanteDoProduto": "Samsung",
        "descricaoDoProduto": "A bateria que dura mais de 24 horas, mesmo em 5G. Mova suas obras de arte com um toque Com o Nightography você registra tudo mesmo depois do fim do dia",
        "imagemDoProduto": "https://samsungbr.vtexassets.com/arquivos/ids/331036-1200-auto?width=1200&height=auto&aspect=true",
        "linkDetalhes": "#",
        "varegistas": [
            { "nome": "Loja 1", "precoNovo": 5150, "precoAntigo": 5399, "link": "#" },
            { "nome": "Loja 2", "precoNovo": 4890, "precoAntigo": 5399, "link": "#" },
            { "nome": "Loja 3", "precoNovo": 4950, "precoAntigo": 5399, "link": "#" },
            { "nome": "Loja 4", "precoNovo": 5090, "precoAntigo": 5399, "link": "#" },
        ],
    },
    {
        "nomeDoProduto": "Geladeira Brastemp Frost Free Inverse 443 litros cor Inox com Turbo Ice - BRE57AK 110V",
        "fabricanteDoProduto": "Brastemp",
        "descricaoDoProduto": "A Geladeira Brastemp Frost Free Inverse 443 litros cor Inox tem refrigerador em cima e freezer embaixo, deixando os alimentos mais utilizados sempre à mão. Com o Turbo Ice, faça gelo mais rápido sempre que precisar. O modelo conta ainda com Twist Ice Advanced e Espaço Adapt.o",
        "imagemDoProduto": "https://m.media-amazon.com/images/I/41TzSmedi1L._AC_SX679_.jpg",
        "linkDetalhes": "#",
        "varegistas": [
            { "nome": "Loja 1", "precoNovo": 4300, "precoAntigo": 4594, "link": "#" },
            { "nome": "Loja 2", "precoNovo": 4200, "precoAntigo": 4594, "link": "#" },
            { "nome": "Loja 3", "precoNovo": 4340, "precoAntigo": 4594, "link": "#" },
            { "nome": "Loja 4", "precoNovo": 4500, "precoAntigo": 4594, "link": "#" },
        ],
    },
]

var cardsID = document.getElementById("cards-produtos")

data.forEach(element => {
    let lojaDestaque
    let menorPreco = element.varegistas[melhorPreco(element)].precoNovo
    let desconto = (100 - (element.varegistas[melhorPreco(element)].precoNovo * 100 / element.varegistas[melhorPreco(element)].precoAntigo)).toFixed()
    cardsID.innerHTML += `
        <div class="card-produtos">
            <a class="card-a" href="#">
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
