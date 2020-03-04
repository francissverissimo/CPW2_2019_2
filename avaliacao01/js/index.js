function exibirMensagem() {
    let nome1 = document.getElementById('nome1').value;
    let nome2 = document.getElementById('nome2').value;
    let mensagem = nome1 && nome2 ? `Palavras concatenadas: , ${nome1}${nome2}!` : '';

    document.getElementById('mensagem').innerHTML = mensagem;
}