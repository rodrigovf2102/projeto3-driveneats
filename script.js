function escolherPrato(element) {
    const selecionado = document.querySelector(".comida.box-escolhido");
    if (selecionado != null) {
        selecionado.classList.remove("box-escolhido");
    }
    element.classList.add("box-escolhido");

    if (document.querySelector(".bebida.box-escolhido") != null
        && document.querySelector(".sobremesa.box-escolhido") != null) {
        const botao = document.querySelector(".botao");
        botao.innerHTML = "Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.add("colorirDeVerde");
    }
}
function escolherBebida(element) {
    const selecionado = document.querySelector(".bebida.box-escolhido");
    if (selecionado != null) {
        selecionado.classList.remove("box-escolhido");
    }
    element.classList.add("box-escolhido");

    if (document.querySelector(".comida.box-escolhido") != null
        && document.querySelector(".sobremesa.box-escolhido") != null) {
        const botao = document.querySelector(".botao");
        botao.innerHTML = "Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.add("colorirDeVerde");
    }
}
function escolherSobremesa(element) {
    const selecionado = document.querySelector(".sobremesa.box-escolhido");
    if (selecionado != null) {
        selecionado.classList.remove("box-escolhido");
    }
    element.classList.add("box-escolhido");

    if (document.querySelector(".comida.box-escolhido") != null
        && document.querySelector(".bebida.box-escolhido") != null) {
        const botao = document.querySelector(".botao");
        botao.innerHTML = "Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.add("colorirDeVerde");
    }
}
function stringParaNumero(elemento) {
    let aux = "";
    for (let i = 0; i < elemento.length; i++) {
        if (!isNaN(elemento[i])) { aux += elemento[i]; }
        if (elemento[i] == ",") { aux += "."; }
    }
    return Number(aux);
}

let comida;
let bebida;
let sobremesa;
let preçoComida;
let preçoBebida;
let preçoSobremesa;
let preçoTotal;

function confirmacao() {
    let element = document.querySelector(".colorirDeVerde")
    if (element != null) {
        element = document.querySelector(".caixa-branca").classList.remove("esconder")
    }
    comida = document.querySelector(".opcao.comida.box-escolhido :nth-child(2)").innerHTML;
    bebida = document.querySelector(".opcao.bebida.box-escolhido :nth-child(2)").innerHTML;
    sobremesa = document.querySelector(".opcao.sobremesa.box-escolhido :nth-child(2)").innerHTML;

    preçoComida = document.querySelector(".opcao.comida.box-escolhido :nth-child(4)").innerHTML;
    preçoBebida = document.querySelector(".opcao.bebida.box-escolhido :nth-child(4)").innerHTML;
    preçoSobremesa = document.querySelector(".opcao.sobremesa.box-escolhido :nth-child(4)").innerHTML;

    preçoComida = stringParaNumero(preçoComida);
    preçoBebida = stringParaNumero(preçoBebida);
    preçoSobremesa = stringParaNumero(preçoSobremesa);

    preçoTotal = preçoComida + preçoBebida + preçoSobremesa;
    preçoTotal = preçoTotal.toFixed(2);
    preçoComida = preçoComida.toFixed(2);
    preçoBebida = preçoBebida.toFixed(2);
    preçoSobremesa = preçoSobremesa.toFixed(2);

    preçoComida = "R$" + preçoComida;
    preçoBebida = "R$" + preçoBebida;
    preçoSobremesa = "R$" + preçoSobremesa;
    preçoTotal = "R$" + preçoTotal;

    const comidaSubstituir = document.querySelector(".caixa-verde :nth-child(2)");
    const bebidaSubstituir = document.querySelector(".caixa-verde :nth-child(4)");
    const sobremesaSubstituir = document.querySelector(".caixa-verde :nth-child(6)");

    const preçoComidaSubstituir = document.querySelector(".caixa-verde :nth-child(3)");
    const preçoBebidaSubstituir = document.querySelector(".caixa-verde :nth-child(5)");
    const preçoSobremesaSubstituir = document.querySelector(".caixa-verde :nth-child(7)");
    const preçoTotalSubstituir = document.querySelector(".caixa-verde :nth-child(9)")

    comidaSubstituir.innerHTML = comida;
    bebidaSubstituir.innerHTML = bebida;
    sobremesaSubstituir.innerHTML = sobremesa;

    preçoComidaSubstituir.innerHTML = preçoComida;
    preçoBebidaSubstituir.innerHTML = preçoBebida;
    preçoSobremesaSubstituir.innerHTML = preçoSobremesa;
    preçoTotalSubstituir.innerHTML = preçoTotal;
}

function cancelar() {
    const cancelar = document.querySelector(".caixa-branca");
    cancelar.classList.add("esconder");
}

function wpp() {

    const comidas = document.querySelectorAll(".opcao");
    let url = "https://wa.me/5531991929224?text=Olá,";
    let texto = " gostaria de fazer um pedido:\n\- Prato: ";
    let total = 0.0;

    texto += comida + "\n";
    total += preçoComida;
    texto += "- Bebida: " + bebida + "\n";
    total += preçoBebida;
    texto += "- Sobremesa: " + sobremesa + "\n";
    total += preçoSobremesa;
    texto += "Total: " + preçoTotal;

    const nome = prompt("Digite seu nome: ")
    const endereço = prompt("Digite seu Endereço: ")
    texto += "\n\n" + "Nome: " + nome;
    texto += "\n" + "Endereço: " + endereço;
    url = url + encodeURIComponent(texto);

    window.open(url);
}
