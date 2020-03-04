function palindrome() {
  let frase = document.getElementById('frase').value;
  frase = frase.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  var reverseFrase = '';
  for (var k in frase) {
    reverseFrase += frase[(frase.length - k) - 1];
  }
  if (frase === reverseFrase) {
    var mensagem = frase ? `A palavra(ou frase) É um palindromo!` : '';
    document.getElementById('mensagem').innerHTML = mensagem;
  } else {
    var mensagem = frase ? `Ops...Isso NÃO é um palindromo.` : '';
    document.getElementById('mensagem').innerHTML = mensagem;
  }
}

//////////////////////////////////////////////////////////////////////////////////

function palavraContida() {
  var str = document.getElementById('nome1').value;
  var substr = document.getElementById('nome2').value;
  var resposta = '';

  if (str && substr) {
    if (str.includes(substr)) {
      var mensagem = nome1 && nome2 ? `SIM! Esta Contida!` : '';
      document.getElementById('mensagem').innerHTML = mensagem;
    } else {
      var mensagem = nome1 && nome2 ? `NÃO...Esta não esta contida!` : '';
      document.getElementById('mensagem').innerHTML = mensagem;
    }
  }
}