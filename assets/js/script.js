const listaCervejas = document.getElementById('cerveja');
const listaDrinks = document.getElementById('drinks');
const listaComida = document.getElementById('comida');

const cervejas = [
    {
        "nome": "Corona",
        "imagem": "./assets/imagens/Cervejas/Corona.jpg",
        "descricao": "Cerveja leve e refrescante, perfeita para dias quentes.",
        "preco": "11,00",
        "favorito": false
    },
    {
        "nome": "IPA",
        "imagem": "./assets/imagens/Cervejas/IPA.jpg",
        "descricao": "Cerveja amarga e aromática, com notas cítricas e frutadas.",
        "preco": "23,00",
        "favorito": false
    },
    {
        "nome": "Stout",
        "imagem": "./assets/imagens/Cervejas/Stout.jpg",
        "descricao": "Cerveja escura e encorpada, com sabores de café e chocolate.",
        "preco": "24,50",
        "favorito": false
    },
    {
        "nome": "Chopp",
        "imagem": "./assets/imagens/Cervejas/Chopp.jpg",
        "descricao": "Cerveja fresca e não pasteurizada, servida diretamente do barril.",
        "preco": "12,00",
        "favorito": false
    },
    {
        "nome": "Heineken",
        "imagem": "./assets/imagens/Cervejas/heineken.jpg",
        "descricao": "Cerveja premium com um equilíbrio refrescante e um sabor distintamente maltado.",
        "preco": "11,00",
        "favorito": false
    },
    {
        "nome": "Weissbier",
        "imagem": "./assets/imagens/Cervejas/Weissbier.jpg",
        "descricao": "Cerveja de trigo com notas de banana e cravo.",
        "preco": "21,00",
        "favorito": false
    },
    {
        "nome": "Régua de degustação",
        "imagem": "./assets/imagens/Cervejas/Regua.jpg",
        "descricao": "Régua com as 4 cervejas da casa para degustação.",
        "preco": "20,00",
        "favorito": false
    }
]
const drinks = [
    {
        "nome": "Cuba Libre",
        "imagem": "./assets/imagens/Drinks/cuba_libre.jpg",
        "descricao": "Coquetel cubano com rum, cola, limão e gelo.",
        "preco": "16,00",
        "favorito": false
    },
    {
        "nome": "Mojito",
        "imagem": "./assets/imagens/Drinks/Mojito.jpg",
        "descricao": "Refrescante coquetel cubano com rum, hortelã, limão, açúcar e água gaseificada.",
        "preco": "17,00",
        "favorito": false
    },
    {
        "nome": "Spritz",
        "imagem": "./assets/imagens/Drinks/Spritz.jpg",
        "descricao": "Drink italiano com prosecco, água com gás e bitter.",
        "preco": "19,00",
        "favorito": false
    },
    {
        "nome": "Caipirinha",
        "imagem": "./assets/imagens/Drinks/caipirinha.jpg",
        "descricao": "Famosa bebida brasileira com cachaça, limão, açúcar e gelo.",
        "preco": "15,00",
        "favorito": false
    },
    {
        "nome": "Bloody Mary",
        "imagem": "./assets/imagens/Drinks/Bloody_Mary.jpg",
        "descricao": "Coquetel picante com vodka, suco de tomate, molho de pimenta e especiarias.",
        "preco": "19,00",
        "favorito": false
    },
    {
        "nome": "Whisky",
        "imagem": "./assets/imagens/Drinks/Whisky.jpg",
        "descricao": "Coquetel clássico à base de whisky, açúcar, angostura e casca de laranja.",
        "preco": "23,00",
        "favorito": false
    }
]
const comida = [
    {
        "nome": "Batata Frita",
        "imagem": "./assets/imagens/Comidas/batata.jpg",
        "descricao": "Batata frita especial da casa com especiarias e molho picante.",
        "preco": "23,00",
        "favorito": false
    },
    {
        "nome": "Hambuger",
        "imagem": "./assets/imagens/Comidas/Hamburger.jpg",
        "descricao": "Hamburger feito com blend de carnes com 180g, bacon, onion rings e queijo.",
        "preco": "31,00",
        "favorito": false
    },
    {
        "nome": "Espeto",
        "imagem": "./assets/imagens/Comidas/espeto.jpg",
        "descricao": "Espeto de carne, frango ou suíno. Acompanha vinagrete e farota",
        "preco": "17,00",
        "favorito": false
    },
    {
        "nome": "Misto de carnes",
        "imagem": "./assets/imagens/Comidas/carne_peso.jpg",
        "descricao": "Misto de várias carnes com peso de 200g cada. Opções: maminha, picanha suína e peito de frango",
        "preco": "42,00",
        "favorito": false
    }
]



function criarLista(item, listaDeItens) {
    for (let i = 0; i < item.length; i++) {
        let lista = document.createElement('li')
        lista.classList = 'card-group'
        listaDeItens.appendChild(lista)
        lista.innerHTML += `
            <div class="card" style="width: 12rem">
            <img src=${item[i].imagem} class="card-img-top" alt=${item[i].nome} />
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title text-center">${item[i].nome}</h5>
                <p class="card-text">
                ${item[i].descricao}
                </p>
                <p>R$ ${item[i].preco}</p>
                <a href="#" class="btn btn-primary btn-sm">Adicionar à comanda</a>
            </div>
            </div>
        `    
    }
}

window.addEventListener('load', (e) => {
    criarLista(cervejas, listaCervejas)
    criarLista(drinks, listaDrinks)
    criarLista(comida, listaComida)
})