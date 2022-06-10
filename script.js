function escolherPrato1(){
    const element = document.querySelectorAll(".opcao");
    if(element[1].classList.contains("box-escolhido")||element[2].classList.contains("box-escolhido"))
    {
    }
    else{
        element[0].classList.toggle("box-escolhido");
    } 
    if((element[0].classList.contains("box-escolhido")
    ||element[1].classList.contains("box-escolhido")
    ||element[2].classList.contains("box-escolhido"))
    &&(element[3].classList.contains("box-escolhido")
    ||element[4].classList.contains("box-escolhido")
    ||element[5].classList.contains("box-escolhido"))
    &&(element[6].classList.contains("box-escolhido")
    ||element[7].classList.contains("box-escolhido")
    ||element[8].classList.contains("box-escolhido")))
    {
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.add("colorirDeVerde")
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.remove("colorirDeVerde")
    }
}
function escolherPrato2(){
    const element = document.querySelectorAll(".opcao");
    if(element[0].classList.contains("box-escolhido")||element[2].classList.contains("box-escolhido"))
    {
    }
    else{
        element[1].classList.toggle("box-escolhido");
    } 
    if((element[0].classList.contains("box-escolhido")
    ||element[1].classList.contains("box-escolhido")
    ||element[2].classList.contains("box-escolhido"))
    &&(element[3].classList.contains("box-escolhido")
    ||element[4].classList.contains("box-escolhido")
    ||element[5].classList.contains("box-escolhido"))
    &&(element[6].classList.contains("box-escolhido")
    ||element[7].classList.contains("box-escolhido")
    ||element[8].classList.contains("box-escolhido")))
    {
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.add("colorirDeVerde")
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.remove("colorirDeVerde")
    }
}
function escolherPrato3(){
    const element = document.querySelectorAll(".opcao");
    if(element[0].classList.contains("box-escolhido")||element[1].classList.contains("box-escolhido"))
    {
    }
    else{
        element[2].classList.toggle("box-escolhido");
    } 
    if((element[0].classList.contains("box-escolhido")
    ||element[1].classList.contains("box-escolhido")
    ||element[2].classList.contains("box-escolhido"))
    &&(element[3].classList.contains("box-escolhido")
    ||element[4].classList.contains("box-escolhido")
    ||element[5].classList.contains("box-escolhido"))
    &&(element[6].classList.contains("box-escolhido")
    ||element[7].classList.contains("box-escolhido")
    ||element[8].classList.contains("box-escolhido")))
    {
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.add("colorirDeVerde")
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.remove("colorirDeVerde")
    }
}
function escolherBebida1(){
    const element = document.querySelectorAll(".opcao");
    if(element[4].classList.contains("box-escolhido")||element[5].classList.contains("box-escolhido"))
    {
    }
    else{
        element[3].classList.toggle("box-escolhido");
    } 
    if((element[0].classList.contains("box-escolhido")
    ||element[1].classList.contains("box-escolhido")
    ||element[2].classList.contains("box-escolhido"))
    &&(element[3].classList.contains("box-escolhido")
    ||element[4].classList.contains("box-escolhido")
    ||element[5].classList.contains("box-escolhido"))
    &&(element[6].classList.contains("box-escolhido")
    ||element[7].classList.contains("box-escolhido")
    ||element[8].classList.contains("box-escolhido")))
    {
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.add("colorirDeVerde")
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.remove("colorirDeVerde")
    }
}
function escolherBebida2(){
    const element = document.querySelectorAll(".opcao");
    if(element[5].classList.contains("box-escolhido")||element[3].classList.contains("box-escolhido"))
    {
    }
    else{
        element[4].classList.toggle("box-escolhido");
    }
    if((element[0].classList.contains("box-escolhido")
    ||element[1].classList.contains("box-escolhido")
    ||element[2].classList.contains("box-escolhido"))
    &&(element[3].classList.contains("box-escolhido")
    ||element[4].classList.contains("box-escolhido")
    ||element[5].classList.contains("box-escolhido"))
    &&(element[6].classList.contains("box-escolhido")
    ||element[7].classList.contains("box-escolhido")
    ||element[8].classList.contains("box-escolhido")))
    {
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.add("colorirDeVerde")
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.remove("colorirDeVerde")
    }
}
function escolherBebida3(){
    const element = document.querySelectorAll(".opcao");
    if(element[4].classList.contains("box-escolhido")||element[3].classList.contains("box-escolhido"))
    {
    }
    else{
        element[5].classList.toggle("box-escolhido");
    }
    if((element[0].classList.contains("box-escolhido")
    ||element[1].classList.contains("box-escolhido")
    ||element[2].classList.contains("box-escolhido"))
    &&(element[3].classList.contains("box-escolhido")
    ||element[4].classList.contains("box-escolhido")
    ||element[5].classList.contains("box-escolhido"))
    &&(element[6].classList.contains("box-escolhido")
    ||element[7].classList.contains("box-escolhido")
    ||element[8].classList.contains("box-escolhido")))
    {
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.add("colorirDeVerde")
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.remove("colorirDeVerde")
    }
}
function escolherSobremesa1(){
    const element = document.querySelectorAll(".opcao");
    if(element[7].classList.contains("box-escolhido")||element[8].classList.contains("box-escolhido"))
    {
    }
    else{
        element[6].classList.toggle("box-escolhido");
    }
    if((element[0].classList.contains("box-escolhido")
    ||element[1].classList.contains("box-escolhido")
    ||element[2].classList.contains("box-escolhido"))
    &&(element[3].classList.contains("box-escolhido")
    ||element[4].classList.contains("box-escolhido")
    ||element[5].classList.contains("box-escolhido"))
    &&(element[6].classList.contains("box-escolhido")
    ||element[7].classList.contains("box-escolhido")
    ||element[8].classList.contains("box-escolhido")))
    {
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.add("colorirDeVerde")
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.remove("colorirDeVerde")
    }
}
function escolherSobremesa2(){
    const element = document.querySelectorAll(".opcao");
    if(element[8].classList.contains("box-escolhido")||element[6].classList.contains("box-escolhido"))
    {
    }
    else{
        element[7].classList.toggle("box-escolhido");
    }
    if((element[0].classList.contains("box-escolhido")
    ||element[1].classList.contains("box-escolhido")
    ||element[2].classList.contains("box-escolhido"))
    &&(element[3].classList.contains("box-escolhido")
    ||element[4].classList.contains("box-escolhido")
    ||element[5].classList.contains("box-escolhido"))
    &&(element[6].classList.contains("box-escolhido")
    ||element[7].classList.contains("box-escolhido")
    ||element[8].classList.contains("box-escolhido")))
    {
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.add("colorirDeVerde")
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.remove("colorirDeVerde")
    }
}
function escolherSobremesa3(){
    const element = document.querySelectorAll(".opcao");
    if(element[7].classList.contains("box-escolhido")||element[6].classList.contains("box-escolhido"))
    {
    }
    else{
        element[8].classList.toggle("box-escolhido");
    }
    if((element[0].classList.contains("box-escolhido")
    ||element[1].classList.contains("box-escolhido")
    ||element[2].classList.contains("box-escolhido"))
    &&(element[3].classList.contains("box-escolhido")
    ||element[4].classList.contains("box-escolhido")
    ||element[5].classList.contains("box-escolhido"))
    &&(element[6].classList.contains("box-escolhido")
    ||element[7].classList.contains("box-escolhido")
    ||element[8].classList.contains("box-escolhido")))
    {
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.add("colorirDeVerde")
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo")
        caixabotao.classList.remove("colorirDeVerde")
    }
}
