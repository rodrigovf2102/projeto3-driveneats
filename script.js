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
let pre??oComida;
let pre??oBebida;
let pre??oSobremesa;
let pre??oTotal;

function confirmacao() {
    let element = document.querySelector(".colorirDeVerde")
    if (element != null) {
        element = document.querySelector(".caixa-branca").classList.remove("esconder")
    }
    comida = document.querySelector(".opcao.comida.box-escolhido :nth-child(2)").innerHTML;
    bebida = document.querySelector(".opcao.bebida.box-escolhido :nth-child(2)").innerHTML;
    sobremesa = document.querySelector(".opcao.sobremesa.box-escolhido :nth-child(2)").innerHTML;

    pre??oComida = document.querySelector(".opcao.comida.box-escolhido :nth-child(4)").innerHTML;
    pre??oBebida = document.querySelector(".opcao.bebida.box-escolhido :nth-child(4)").innerHTML;
    pre??oSobremesa = document.querySelector(".opcao.sobremesa.box-escolhido :nth-child(4)").innerHTML;

    pre??oComida = stringParaNumero(pre??oComida);
    pre??oBebida = stringParaNumero(pre??oBebida);
    pre??oSobremesa = stringParaNumero(pre??oSobremesa);

    pre??oTotal = pre??oComida + pre??oBebida + pre??oSobremesa;
    pre??oTotal = pre??oTotal.toFixed(2);
    pre??oComida = pre??oComida.toFixed(2);
    pre??oBebida = pre??oBebida.toFixed(2);
    pre??oSobremesa = pre??oSobremesa.toFixed(2);

    pre??oComida = "R$" + pre??oComida;
    pre??oBebida = "R$" + pre??oBebida;
    pre??oSobremesa = "R$" + pre??oSobremesa;
    pre??oTotal = "R$" + pre??oTotal;

    const comidaSubstituir = document.querySelector(".caixa-verde :nth-child(2)");
    const bebidaSubstituir = document.querySelector(".caixa-verde :nth-child(4)");
    const sobremesaSubstituir = document.querySelector(".caixa-verde :nth-child(6)");

    const pre??oComidaSubstituir = document.querySelector(".caixa-verde :nth-child(3)");
    const pre??oBebidaSubstituir = document.querySelector(".caixa-verde :nth-child(5)");
    const pre??oSobremesaSubstituir = document.querySelector(".caixa-verde :nth-child(7)");
    const pre??oTotalSubstituir = document.querySelector(".caixa-verde :nth-child(9)")

    comidaSubstituir.innerHTML = comida;
    bebidaSubstituir.innerHTML = bebida;
    sobremesaSubstituir.innerHTML = sobremesa;

    pre??oComidaSubstituir.innerHTML = pre??oComida;
    pre??oBebidaSubstituir.innerHTML = pre??oBebida;
    pre??oSobremesaSubstituir.innerHTML = pre??oSobremesa;
    pre??oTotalSubstituir.innerHTML = pre??oTotal;
}

function cancelar() {
    const cancelar = document.querySelector(".caixa-branca");
    cancelar.classList.add("esconder");
}

function wpp() {

    const comidas = document.querySelectorAll(".opcao");
    let url = "https://wa.me/5531991929224?text=Ol??,";
    let texto = " gostaria de fazer um pedido:\n\- Prato: ";
    let total = 0.0;

    texto += comida + "\n";
    total += pre??oComida;
    texto += "- Bebida: " + bebida + "\n";
    total += pre??oBebida;
    texto += "- Sobremesa: " + sobremesa + "\n";
    total += pre??oSobremesa;
    texto += "Total: " + pre??oTotal;

    const nome = prompt("Digite seu nome: ")
    const endere??o = prompt("Digite seu Endere??o: ")
    texto += "\n\n" + "Nome: " + nome;
    texto += "\n" + "Endere??o: " + endere??o;
    url = url + encodeURIComponent(texto);

    window.open(url);
}
