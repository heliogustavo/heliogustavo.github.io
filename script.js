let totalSelecionado = 0;
let comidaSelecionada="";
let bebidaSelecionada="";
let sobremesaSelecionada="";
let total;
let texto;
let precoComida=0;
let precoBebida=0;
let precoSobremesa=0;

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
        check.classList.toggle('corDoCheck');
        totalSelecionado = totalSelecionado + 1;
        comidaSelecionada = borda1.querySelector('.Prato').innerHTML;
        let comidaPreco = borda1.querySelector('.h3valor').innerHTML.replace('R$','');
        precoComida = Number(comidaPreco.replace(',','.'))

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
        bebidaSelecionada = borda2.querySelector('.bebida').innerHTML;
        let bebidaPreco = borda2.querySelector('.h3valor').innerHTML.replace('R$','');
        precoBebida = Number(bebidaPreco.replace(',','.'))

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
         sobremesaSelecionada = borda3.querySelector('.doce').innerHTML;
         let sobremesaPreco = borda3.querySelector('.h3valor').innerHTML.replace('R$','');
        precoSobremesa = Number(sobremesaPreco.replace(',','.'))
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


function whatsApp() {
    total= precoComida + precoBebida + precoSobremesa;
    let totalFinal = toString(total);
    let texto = `Olá, gostaria de fazer o pedido:
    - Prato: ${comidaSelecionada}
    - Bebida: ${bebidaSelecionada}
    - Sobremesa: ${sobremesaSelecionada}
    Total: R$ ${total}`

    let textoCodificado = encodeURIComponent(texto);
    window.open("https://wa.me/5592986201808?text=" + textoCodificado);
  }
