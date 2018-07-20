/*var opcao = prompt("A- Soma de 2 números.\nB- Diferença entre 2 números (maior pelo menor).\nC- Produto entre 2 números.\nD- Divisão entre 2 números").toUpperCase();

//alert(opcao);
var a = parseFloat(prompt("Entre com o primeiro numero"));
var b = parseFloat(prompt("Entre com o segundo numero"));

switch(opcao){
  case "A":
    var comeco = parseInt(prompt("onde comeca"));
    var fim = parseInt(prompt("onde termina"));
    for(var cont=comeco; cont<=fim; cont++){
      if( cont%2 == 0 ){
        alert(cont + " e par");
      }else{
        alert(cont + " e impar");
      }
    }
    /*var cont = 0;
    if(cont%2 == 0){
      alert(cont + " e par");
    }
    else{
      alert(cont + " e impar");
    }
    cont++;
    
    if(cont%2 == 0){
      alert(cont + " e impar");
    }
    else{
      alert(cont + " e impar");
    }
    cont++;
    
    if(cont%2 == 0){
      alert(cont + " e par");
    }
    else{
      alert(cont + " e impar");
    }
    cont++;
    
    if(cont%2 == 0){
      alert(cont + " e impar");
    }
    else{
      alert(cont + " e impar");
    }
    cont++;
    
    if(cont%2 == 0){
      alert(cont + " e par");
    }
    else{
      alert(cont + " e impar");
    }
    cont++;
    
    if(cont%2 == 0){
      alert(cont + " e impar");
    }
    else{
      alert(cont + " e impar");
    }
    cont++;

    break;
  case "B":
    console.log("subtracao");
    if( a > b ){
      alert( a - b );
    }
    else if( a == b){
      console.warn("os valores sao iguais");
      alert( a - b );
    }else{
      alert( b - a );
    }
    break;
  case "C":
    console.log("multiplicacao");
    alert( a * b );
    break;
  default:
    console.error("opcao invalida");
    break;
}

do{   //faca
  //isso tudo
}while(condicao for verdadeira);

while(condicao for verdadeira){
  //faca isso tudo
};

*/

/*var palpite_correto = 5;

do{
  var palpite = parseInt(prompt("Adivinhe um numero de 1 a 10"));
  if(palpite != palpite_correto){
    alert("Errou! Tente novamente");
  }
}while(palpite != palpite_correto);
alert("Palpite correto");


while(palpite != palpite_correto){
  let palpite = parseInt(prompt("Adivinhe um numero de 1 a 10"));
  if(palpite != palpite_correto){
    alert("Errou! Tente novamente");
  }
}
alert(palpite);
alert("Palpite correto");*/

/*var meuarray = ["a","b","c","d","e","f","g","h","i","j"];

for(var i=0; i<meuarray.length; i+=2){
  alert(meuarray[i]);
}*/

/*var gordices = {"churros": ["doce de leite", "chocolate", "brigadeiro", "pacoca", "nutella", "beijinho", "goiabada"], "sorvete": ["morango", "manga", "creme", "flocos", "napolitano", 
                                                                                                                           "pudim", "milho"], "mousse": ["maracuja", "limao", "chocolate", "morango", "pessego", "manga", "ameixa", "uva"]};

for(x in gordices){
  for(i in gordices[x]){
    //console.log("Sabor de "+ x + ": " + gordices[x][i]);
    if(gordices[x][i] == "chocolate")
      alert(x + " " + gordices[x][i]);
  }
  for(var i = 0; i<gordices[x].length; i++){
    console.log("Sabor de "+ x + ": " + gordices[x][i]);
  };
}*/


/*alert(meuarray[0]);
alert(meuarray[1]);
alert(meuarray[2]);
alert(meuarray[3]);*/



//Minha oficina
/*
Servicos da oficina:
-Troca de oleo
  -Abra o capo
  -Retire a vareta
  -Localize o plug na bandeja de oleo
  -Coloque uma bandeja de captura por baixo
    -Cuidado
  -Abra o bujao
    -Cuidado
  -Espere todo o oleo sair
  -Feche o bujao
    -Troque o filtro
  -Coloque o oleo novo
  -Verifique a vareta
  -Feche o capo
-Troca de pastilhas do freio
-Alinhamento
-Troca de roda
    -Verificar freio de mao e se esta engatado
  -Afrouxe os parafusos
  -Pegue o macaco
  -Erga o carro
  -Solte os parafusos da roda
  -Tire a roda
  -Coloque a nova roda
  -Aperte levemente os parafusos
  -Desca o carro
  -Aperte os parafusos
-Martelinho de ouro
*/
/*
var minhaOficina = {
  "nome": "Oficina do Yudi",
  "telefone": "40028922",
  "endereco": "Av. Paulista, uarever",
  "mecanicos": ["Matheus", "Luana", "Tati", "Renan", "Yudi"],
  "servicos": ["Troca de Oleo", "Troca de Roda"],
  "promocao": "A cada 10 trocas de oleo ganhe um pleisteixo"
}

var servicos = "";

function trocaDeOleo(){
  var proc = `Troca de oleo
    -Abra o capo
    -Retire a vareta
    -Localize o plug na bandeja de oleo
    -Coloque uma bandeja de captura por baixo
      -Cuidado
    -Abra o bujao
      -Cuidado
    -Espere todo o oleo sair
    -Feche o bujao
      -Troque o filtro
    -Coloque o oleo novo
    -Verifique a vareta
    -Feche o capo`;
    alert(proc);
    alert("Servico realizado");
}

function trocaDeRoda(rodas){
  if(rodas > 0){
    for(var i=0; i<rodas; i++){
      var proc = `
          -Verificar freio de mao e se esta engatado
        -Afrouxe os parafusos
        -Pegue o macaco
        -Erga o carro
        -Solte os parafusos da roda
        -Tire a roda
        -Coloque a nova roda
        -Aperte levemente os parafusos
        -Desca o carro
        -Aperte os parafusos`;
        alert(proc);
    }
    return "Servico realizado";
  }
  else{
    return "Servico nao realizado";
  }
}

for(i in minhaOficina["servicos"]){
  if(i == 0){
    servicos += minhaOficina["servicos"][i];
  }
  else{
    servicos = servicos + ", " + minhaOficina["servicos"][i];
  }
}

alert("Bem vindos a "+minhaOficina["nome"]+"\n\nA promocao do mes e: "+minhaOficina["promocao"]+"\nOs nossos servicos sao: "+servicos+".");

var servico_escolhido;

do{
  servico_escolhido = parseInt(prompt("Digite 1 para a troca de oleo, 2 para troca de roda ou 0 para finalizar"));
  
  switch(servico_escolhido){
    case 1:
      trocaDeOleo();
      break;
    case 2:
      var nrodas = parseInt(prompt("Quantas rodas deseja trocar?"))
      trocaDeRoda(nrodas);
      break;
    default:
      alert("opcao invalida");
      break;
  }
  
}while(servico_escolhido != 0);

alert("Hora da revisao");
trocaDeOleo();
var resultadoDoServico = trocaDeRoda(0);
alert(resultadoDoServico);
*/










//Function
/*switch(opcap){
  case "A":
    var resultado = soma(n1, n2);
    alert(resultado);
    break;
  case ""
}



function soma(n1, n2){
  var resultado = n1 + n2;
  return resultado;
}

function retorna_int(mensagem){
  var retorno = parseInt(prompt(mensagem));
  return retorno;
}

function retorna_opcao_escolhida(opcao){  
  if(opcao == 1){
    alert("primeira opcao escolhida");
  }
  else if(opcao == 2){
    alert("segunda opcao escolhida");
  }
  else{
    alert("opcao invalida");
  }
}*/

/*var n1, n2;

n1 = parseFloat(prompt("Digite o primeiro numero"));
n2 = parseFloat(prompt("Digite o segundo numero"));

alert(soma(n1, n2));
//alert(res_soma);
*/




var meuvetor = [];
var posicao = 0;
function findMax(v){
  for(var i=0; i<v.length; i++){
    if(v[i] > maior){
      maior = v[i];
      posicao = i;
    }
  }
  alert("Maior valor é: " + maior + " e está na posição: " + posicao);
};

for(var i=0; i<10; i++){
  meuvetor.push(Math.ceil(Math.random()*1000));
}

var maior = meuvetor[0];
alert(meuvetor);
findMax(meuvetor);
