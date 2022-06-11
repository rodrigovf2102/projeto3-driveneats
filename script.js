function escolherPrato(element){
    const selecionado = document.querySelector(".comida.box-escolhido");
    if(selecionado!=null){
        selecionado.classList.remove("box-escolhido");
    }
    element.classList.add("box-escolhido");

    if(document.querySelector(".bebida.box-escolhido")!=null
    &&document.querySelector(".sobremesa.box-escolhido")!=null)
    {
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.add("colorirDeVerde");
    }
}
function escolherBebida(element){
    const selecionado = document.querySelector(".bebida.box-escolhido");
    if(selecionado!=null){
        selecionado.classList.remove("box-escolhido");
    }
    element.classList.add("box-escolhido");

    if(document.querySelector(".comida.box-escolhido")!=null
    &&document.querySelector(".sobremesa.box-escolhido")!=null)
    {
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.add("colorirDeVerde");
    }
}
function escolherSobremesa(element){
    const selecionado = document.querySelector(".sobremesa.box-escolhido");
    if(selecionado!=null){
        selecionado.classList.remove("box-escolhido");
    }
    element.classList.add("box-escolhido");

    if(document.querySelector(".comida.box-escolhido")!=null
    &&document.querySelector(".bebida.box-escolhido")!=null)
    {
        const botao = document.querySelector(".botao");
        botao.innerHTML ="Fechar Pedido";
        const caixabotao = document.querySelector(".botao-fundo");
        caixabotao.classList.add("colorirDeVerde");
    }
}
function wpp(){
    const element = document.querySelector(".colorirDeVerde")
    if(element!=null){
    
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
    
        window.open(url);
    }
    
}
