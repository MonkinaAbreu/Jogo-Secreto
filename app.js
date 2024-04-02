//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Jogo Secreto!";

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um numero entre 0 e 100";

let numerosSorteados = [];
let numeroSecretoLimite = 100 ;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak( texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensageminicial(){
exibirTextoTela('h1', 'Jogo Secreto');
exibirTextoTela('p', 'Escolha um numero entre 0 e 100');
}

exibirMensageminicial();

function verificaChute(){
    let chute = document.querySelector('input').value;
       
    if(chute == numeroSecreto){
        exibirTextoTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = ('Você descobriu o numero secreto com ' + tentativas + ' ' + palavraTentativa);
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {    
        if(chute > numeroSecreto){
        exibirTextoTela('p','O numero secreto é menor');
    } else { 
        exibirTextoTela('p','O numero secreto é maior');
    } tentativas++; limparCampoTentativas();
}};

 function gerarNumeroAleatorio( ){    
    let numeroEscolhido = parseInt(Math.random() * numeroSecretoLimite + 1); // função return antes para retornar ao numero secreto o resultado de numero aleatorio
    let tamanhoListaSorteados = numerosSorteados.length;

    if (tamanhoListaSorteados == numeroSecretoLimite){numerosSorteados = [];}


    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio( ) ;}
    else { 
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido; } }

 function limparCampoTentativas(){
    chute = document.querySelector('input');
    chute.value = ' ';  }

 function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampoTentativas();
    tentativas = 1;
    exibirMensageminicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
 }

 // numerosSorteados = lista de numeros que ja foram sorteados (foi criada para que não fosse sorteado o mesmo numero mais de uma vez
 // gerarNumeroAleatorio = criada para sempre gerar um numero diferente dentro do escolhido (aqui de 1 a 100)
 // limparCampoTentativas = criada para mostrar ao jogador quantas tentativas ele fez e depois pagar quando acontecer um novo jogo
 // exibirMensageminicial = criada para modificar as mensagens do jogo, de inicio e nas movimentações
 // linhas 12,13 e 14 são para buscar itens do html
 