function criarCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="cartao__conteudo">
    <h3>Geográfia</h3>
    <div class="cartao_conteudo_pergunta">
        <p>Qual é a capital do Brasil?</p>
    </div>
    <div class="cartao_conteudo_resposta">
        <p>Brasília</p>
    </div>
        </div>
    `
    container.appendChild(cartao)
}