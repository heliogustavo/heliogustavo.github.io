totalSelecionado = 0;

function marcaComida(borda1) {
    const marcado = document.querySelector('.comida .bordaVerde');
    const check = document.querySelector('.check')
      if (marcado !== null) {
        marcado.classList.remove('bordaVerde');
        check.classList.remove('corDoCheck')
        totalSelecionado = totalSelecionado - 1;
      }
       if(borda1 !==marcado){
        borda1.classList.toggle('bordaVerde');
        check.classList.add('corDoCheck')
        totalSelecionado = totalSelecionado + 1;
      }
      ativarBotao();
}
function marcaBebida(borda2) {
    
    const marcado = document.querySelector('.bebida .bordaVerde');
      if (marcado !== null) {
        marcado.classList.remove('bordaVerde');
        totalSelecionado = totalSelecionado - 1;
      }
       if(borda2 !==marcado){
        borda2.classList.toggle('bordaVerde');
        totalSelecionado = totalSelecionado + 1;

      }
      ativarBotao();
}
function marcaSobremesa(borda3) {
    
    const marcado = document.querySelector('.sobremesa .bordaVerde');
      if (marcado !== null) {
        marcado.classList.remove('bordaVerde');
        totalSelecionado = totalSelecionado - 1;
      }
      if(borda3 !==marcado){
         borda3.classList.toggle('bordaVerde');
         totalSelecionado = totalSelecionado + 1;
      }
         ativarBotao();
}

function ativarBotao(){
    const novoBotao = document.querySelector('.botao-fechar-pedido')
    novoBotao.setAttribute('disabled', 'disabled'); 

    if(totalSelecionado == 3) {
        novoBotao.innerHTML = 'Fechar Pedido';
        novoBotao.classList.add('botaoVerde')
            novoBotao.removeAttribute('disabled');
    }

    else{
        novoBotao.innerHTML = 'Selecione os 3 itens para fechar o Pedido';
        novoBotao.classList.remove('botaoVerde')
            novoBotao.setAttribute('disabled', 'disabled');

    }


}
// function botaoAtivo(){
//     const botaoFinal = document.querySelector('.botao-fechar-pedido');
//     let totalBordas = document.querySelectorAll('.bordaVerde');

//     if (totalBordas.length == 3) {
//         botaoFinal.setAttribute=; 
//       } else {
//         botaoFinal.disabled = false;
// }
























/*function removerBorda(item){
    item.classList.remove("bordastyle")
}

function marcaItem() {
    let comida= document.querySelector(".comida");
    let filhosComida = Array.from(comida.children);
    filhosComida.forEach(removerBorda);
    var bordaVerde = document.querySelector(".ceviche");
    bordaVerde.classList.toggle("bordastyle");
    






    function marcaItem() {
    const botaoSelecionadoAnteriormente = document.querySelector('.selecionado');
    console.log(null);
    opcoes.classList.toggle('bordaVerde');

        if(botaoSelecionadoAnteriormente !== null){
            botaoSelecionadoAnteriormente.classList.remove(".selecionado")
        }
        else{
            const borda
        }
}

  }*/



