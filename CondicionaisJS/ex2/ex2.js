const idade = parseInt(prompt("Qual é a sua idade?"));
const habilitacao = prompt("Você possui habilitação (s/n)?") === 's' || 'S';

if (idade >= 18 && habilitacao) {
  document.write("Pode dirigir");
} else {
  document.write("Não pode dirigir");
}