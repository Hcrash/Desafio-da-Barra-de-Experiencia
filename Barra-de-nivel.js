let nome = "Falange"
let nivel = "";
let barraDeExperiencia = 0
for (let exp = 0; exp < 10101; exp += 100) {
  barraDeExperiencia += 100
  console.log("Você ganhou " + exp + " pontos de experiencia.")

}


if (barraDeExperiencia <= 1000) {
  nivel = "Ferro";
}
else if (barraDeExperiencia >= 1001 && barraDeExperiencia <= 2000) {
  nivel = "Bronze";
}
else if (barraDeExperiencia >= 2001 && barraDeExperiencia <= 5000) {
  nivel = "Prata"
}
else if (barraDeExperiencia >= 5001 && barraDeExperiencia <= 7000) {
  nivel = "Ouro"
}
else if (barraDeExperiencia >= 7001 && barraDeExperiencia <= 8000) {
  nivel = "Platina"
}
else if (barraDeExperiencia >= 8001 && barraDeExperiencia <= 9000) {
  nivel = "Ascendente"
}
else if (barraDeExperiencia >= 9001 && barraDeExperiencia <= 10000) {
  nivel = "Imortal"
}
else {
  nivel = "Radiante"
}
const mensagemDeLevelUp = "Você subiu de nível. Agora você está no nível de " + nivel + ".";

if (barraDeExperiencia >= 1001) {
  console.log(mensagemDeLevelUp)
}
else if (barraDeExperiencia >= 2001) {
  console.log(mensagemDeLevelUp)
}
else if (barraDeExperiencia >= 5001) {
  console.log(mensagemDeLevelUp)
}
else if (barraDeExperiencia >= 7001) {
  console.log(mensagemDeLevelUp)
}
else if (barraDeExperiencia >= 8001) {
  console.log(mensagemDeLevelUp)
}
else if (barraDeExperiencia >= 9001) {
  console.log(mensagemDeLevelUp)
}
else if (barraDeExperiencia >= 10001) {
  console.log(mensagemDeLevelUp)
}


const checarHeroi = "O herói de nome " + nome + " está no nível de " + nivel + ".";

console.log(checarHeroi);