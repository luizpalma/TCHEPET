let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function atualizarCarrinho() {
  document.getElementById('carrinho-contador').textContent = carrinho.length;
}

function adicionarAoCarrinho(nome) {
  carrinho.push(nome);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
  alert(`${nome} adicionada ao carrinho!`);
}

function limparCarrinho() {
  carrinho = [];
  localStorage.removeItem("carrinho");
  atualizarCarrinho();
}

const produtos = ["Ração", "Coleira", "Casa"];

document.querySelectorAll(".carrinho-add").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    adicionarAoCarrinho(produtos[i]);
  });
});

function mostrarCarrinho() {
  if (carrinho.length === 0) {
    alert("O carrinho está vazio no momento.");
    return;
  }

  const contagem = {};
  for (const item of carrinho) {
    contagem[item] = (contagem[item] || 0) + 1;
  }

  let mensagem = "Carrinho:\n";

  for (const nome in contagem) {
    mensagem += `${nome}: ${contagem[nome]}\n`;
  }

  if (confirm(`${mensagem}\nDeseja limpar o carrinho?`)) {
    limparCarrinho();
  }
}

document.querySelector(".carrinho-icone").addEventListener("click", mostrarCarrinho);
atualizarCarrinho();
