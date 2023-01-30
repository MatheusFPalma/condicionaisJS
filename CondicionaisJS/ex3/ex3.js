const dia = parseInt(prompt("Digite um número de 1 a 7:"));

if (dia === 1) {
  document.write("Domingo");
} else if (dia === 2) {
  document.write("Segunda");
} else if (dia === 3) {
  document.write("Terça");
} else if (dia === 4) {
  document.write("Quarta");
} else if (dia === 5) {
  document.write("Quinta");
} else if (dia === 6) {
  document.write("Sexta");
} else if (dia === 7) {
  document.write("Sábado");
} else {
  document.write("Dia não reconhecido");
}