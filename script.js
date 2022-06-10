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
function wpp(){
    const element = document.querySelector(".colorirDeVerde")
    const comidas = document.querySelectorAll(".opcao");
    let url = "https://wa.me/5531991929224?text=Olá,";
    let texto ="gostaria de fazer um pedido:\n\- Prato: ";
    let total=0.0;
    for(let i=0;i<3;i++){
        
      if(comidas[i].classList.contains("box-escolhido")){
          if(i==0){texto+="Frango Yin Yang\n";total+=14.90;}
          if(i==1){texto+="Quarteirão\n";total+=12.90;}
          if(i==2){texto+="Whopper\n";total+=13.90;}
      }  
    }
    texto+="- Bebida: ";
    for(let i=3;i<6;i++){
        if(comidas[i].classList.contains("box-escolhido")){
            if(i==3){texto+="Coquinha Gelada\n";total+=4.90;}
            if(i==4){texto+="Coca do MC\n";total+=8.90;}
            if(i==5){texto+="Pepsi do Bk\n";total+=7.90;}
        }  
      }
      texto+="- Sobremesa: ";   
      for(let i=6;i<9;i++){
        if(comidas[i].classList.contains("box-escolhido")){
            if(i==6){texto+="Pudim\n";total+=7.90;}
            if(i==7){texto+="Top-Sundae\n";total+=8.90;}
            if(i==8){texto+="Balde-Ovomaltine\n";total+=10.90;}
        }  
      }
      texto+="Total: R$"+total.toFixed(2);
      const nome =prompt("Digite seu nome: ")
      const endereço = prompt("Digite seu Endereço: ")
      texto += "\n\n"+"Nome: "+nome;
      texto += "\n"+"Endereço: "+endereço;
      url =url+ encodeURIComponent(texto);
    if(element!=null){
        window.open(url);
    }
    
}
