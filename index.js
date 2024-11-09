let nomeHeroi = 'super-men';
let Xp = 15000;

if (Xp > 0 && Xp <= 1000) {
  console.log('O Heroi ' + nomeHeroi + ' é nivel Ferro');
} else if (Xp > 1000 && Xp <= 2000) {
  console.log('O Heroi ' + nomeHeroi + ' Nivel Bronze');
} else if (Xp > 2001 && Xp <= 5000) {
  console.log('O Heroi ' + nomeHeroi + ' Nivel Prata');
} else if (Xp > 5001 && Xp <= 7000) {
  console.log('O Heroi ' + nomeHeroi + ' Nivel Ouro');
} else if (Xp > 7001 && Xp <= 8000) {
  console.log('O Heroi ' + nomeHeroi + ' Nivel Platina');
} else if (Xp > 8001 && Xp <= 9000) {
  console.log('O Heroi ' + nomeHeroi + ' Nivel Ascendente');
} else if (Xp > 9001 && Xp <= 10000) {
  console.log('O Heroi ' + nomeHeroi + ' Nivel Imortal');
} else if (Xp > 10000) {
  console.log('O Heroi ' + nomeHeroi + ' Nivel Radiante');
}