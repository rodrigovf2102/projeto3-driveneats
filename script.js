function escolherPrato1(){
    const element = document.querySelectorAll(".opcao");
    if(!element[0].classList.contains("box-escolhido"))
    {
        element[0].classList.add("box-escolhido");
    } 
    if(element[1].classList.contains("box-escolhido"))
    {
        element[1].classList.remove("box-escolhido");
    }
    if(element[2].classList.contains("box-escolhido"))
    {
        element[2].classList.remove("box-escolhido");
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
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.remove("colorirDeVerde");
    }
}
function escolherPrato2(){
    const element = document.querySelectorAll(".opcao");
    if(!element[1].classList.contains("box-escolhido"))
    {
        element[1].classList.add("box-escolhido");
    } 
    if(element[0].classList.contains("box-escolhido"))
    {
        element[0].classList.remove("box-escolhido");
    }
    if(element[2].classList.contains("box-escolhido"))
    {
        element[2].classList.remove("box-escolhido");
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
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.remove("colorirDeVerde");
    }
}
function escolherPrato3(){
    const element = document.querySelectorAll(".opcao");
    if(!element[2].classList.contains("box-escolhido"))
    {
        element[2].classList.add("box-escolhido");
    } 
    if(element[1].classList.contains("box-escolhido"))
    {
        element[1].classList.remove("box-escolhido");
    }
    if(element[0].classList.contains("box-escolhido"))
    {
        element[0].classList.remove("box-escolhido");
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
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.remove("colorirDeVerde");
    }
}
function escolherBebida1(){
    const element = document.querySelectorAll(".opcao");
    if(!element[3].classList.contains("box-escolhido"))
    {
        element[3].classList.add("box-escolhido");
    } 
    if(element[4].classList.contains("box-escolhido"))
    {
        element[4].classList.remove("box-escolhido");
    }
    if(element[5].classList.contains("box-escolhido"))
    {
        element[5].classList.remove("box-escolhido");
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
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.remove("colorirDeVerde");
    }
}
function escolherBebida2(){
    const element = document.querySelectorAll(".opcao");
    if(!element[4].classList.contains("box-escolhido"))
    {
        element[4].classList.add("box-escolhido");
    } 
    if(element[5].classList.contains("box-escolhido"))
    {
        element[5].classList.remove("box-escolhido");
    }
    if(element[3].classList.contains("box-escolhido"))
    {
        element[3].classList.remove("box-escolhido");
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
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.remove("colorirDeVerde");
    }
}
function escolherBebida3(){
    const element = document.querySelectorAll(".opcao");
    if(!element[5].classList.contains("box-escolhido"))
    {
        element[5].classList.add("box-escolhido");
    } 
    if(element[4].classList.contains("box-escolhido"))
    {
        element[4].classList.remove("box-escolhido");
    }
    if(element[3].classList.contains("box-escolhido"))
    {
        element[3].classList.remove("box-escolhido");
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
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.add("colorirDeVerde");
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.remove("colorirDeVerde");
    }
}
function escolherSobremesa1(){
    const element = document.querySelectorAll(".opcao");
    if(!element[6].classList.contains("box-escolhido"))
    {
        element[6].classList.add("box-escolhido");
    } 
    if(element[7].classList.contains("box-escolhido"))
    {
        element[7].classList.remove("box-escolhido");
    }
    if(element[8].classList.contains("box-escolhido"))
    {
        element[8].classList.remove("box-escolhido");
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
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.add("colorirDeVerde");
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.remove("colorirDeVerde");
    }
}
function escolherSobremesa2(){
    const element = document.querySelectorAll(".opcao");
    if(!element[7].classList.contains("box-escolhido"))
    {
        element[7].classList.add("box-escolhido");
    } 
    if(element[6].classList.contains("box-escolhido"))
    {
        element[6].classList.remove("box-escolhido");
    }
    if(element[8].classList.contains("box-escolhido"))
    {
        element[8].classList.remove("box-escolhido");
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
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.add("colorirDeVerde");
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.remove("colorirDeVerde");
    }
}
function escolherSobremesa3(){
    const element = document.querySelectorAll(".opcao");
    if(!element[8].classList.contains("box-escolhido"))
    {
        element[8].classList.add("box-escolhido");
    } 
    if(element[6].classList.contains("box-escolhido"))
    {
        element[6].classList.remove("box-escolhido");
    }
    if(element[7].classList.contains("box-escolhido"))
    {
        element[7].classList.remove("box-escolhido");
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
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.add("colorirDeVerde");
    }
    else{
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Selecione os 3 itens para fechar o pedido";
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.remove("colorirDeVerde");
    }
}
