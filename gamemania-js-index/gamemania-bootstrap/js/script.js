let email = document.getElementById("campo-email"); //busca no html a id "campo-email" e salva na variavel email

function enviarEmail() {
    let emailDigitado = email.value;
    console.log(email);
}

//lista de noticias
let listaDestaques = [{


        titulo: "Super Nintendo",
        descricao: "Produto Usado"
    },

    {
        titulo: "Atari",
        descricao: "Produto Usado - Em bom estado"
    },

    {
        titulo: "Mega Drive",
        descricao: "Produto Usado - Em ótimo estado"
    },

    {
        titulo: "God of War",
        descricao: "Produto Usado - Em bom estado"
    },


]

function renderizarDestaques() {
    let espaco = document.getElementById("produtos-destaques");

    let template = ""; //define como fazio para evitar bugs -- uma variavel não pode ser null

    for (let index = 0; index < listaDestaques.length; index++) {
        const produtos = listaDestaques[index];

        template += `<div class="col-12 col-md-3 card-produto">
        <div class="small-image-container center-image" id="img-2"></div>
        <h3>${produtos.titulo}</h3>
        <p class="secondary-color">${produtos.descricao}</p>
        <a href="#" class="btn">Comprar</a>
    </div>`

    }

    espaco.innerHTML = template

}