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
function stringParaNumero(elemento){
    let aux="";
    for(let i=0;i<elemento.length;i++){
        if(!isNaN(elemento[i])){aux+=elemento[i];}
        if(elemento[i]==","){aux+=".";}
    }
    return Number(aux);
}
function confirmacao(){
    let element = document.querySelector(".colorirDeVerde")
    if(element!=null){
        element = document.querySelector(".caixa-branca").classList.remove("esconder")
    }
    let comida = document.querySelector(".opcao.comida.box-escolhido :nth-child(2)").innerHTML;
    let bebida = document.querySelector(".opcao.bebida.box-escolhido :nth-child(2)").innerHTML;
    let sobremesa = document.querySelector(".opcao.sobremesa.box-escolhido :nth-child(2)").innerHTML;

    let preçoComida = document.querySelector(".opcao.comida.box-escolhido :nth-child(4)").innerHTML;
    let preçoBebida = document.querySelector(".opcao.bebida.box-escolhido :nth-child(4)").innerHTML;
    let preçoSobremesa = document.querySelector(".opcao.sobremesa.box-escolhido :nth-child(4)").innerHTML;
    
    let pcomida=stringParaNumero(preçoComida);
    let pbebida=stringParaNumero(preçoBebida);
    let psobremesa=stringParaNumero(preçoSobremesa);
    console.log(pcomida);

    let preçoTotal = pcomida+pbebida+psobremesa;
    preçoTotal=preçoTotal.toFixed(2);
    preçoTotal="R$"+preçoTotal;

    const comidaSubstituir = document.querySelector(".caixa-verde :nth-child(2)");
    const bebidaSubstituir = document.querySelector(".caixa-verde :nth-child(4)");
    const sobremesaSubstituir = document.querySelector(".caixa-verde :nth-child(6)");

    const preçoComidaSubstituir = document.querySelector(".caixa-verde :nth-child(3)");
    const preçoBebidaSubstituir = document.querySelector(".caixa-verde :nth-child(5)");
    const preçoSobremesaSubstituir = document.querySelector(".caixa-verde :nth-child(7)");
    const preçoTotalSubstituir = document.querySelector(".caixa-verde :nth-child(9)")

    comidaSubstituir.innerHTML=comida;
    bebidaSubstituir.innerHTML=bebida;
    sobremesaSubstituir.innerHTML=sobremesa;

    preçoComidaSubstituir.innerHTML=preçoComida;
    preçoBebidaSubstituir.innerHTML=preçoBebida;
    preçoSobremesaSubstituir.innerHTML=preçoSobremesa;
    preçoTotalSubstituir.innerHTML=preçoTotal;
}
function cancelar(){
    const cancelar = document.querySelector(".caixa-branca");
    cancelar.classList.add("esconder");
}
function wpp(){
   
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
