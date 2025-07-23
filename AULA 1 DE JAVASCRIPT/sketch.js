function setup() {
  createCanvas(450, 800);
}

let xJogador = [0, 0, 0, 0];
let yJogador = [100, 300, 500];
let jogador = ["✈️","🚀","🛸"];


  function draw() {
  if (focused == true) {
    background('rgb(99,124,194)');
  } else {
    background('rgb(99,12,19)');
    }
    
  textSize(40);
  for (let i = 0; i < 3; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }

  fill('white');
  rect(350, 0, 10, 800);
  fill('black');
    
     for (let yAtual=0; yAtual < 800; yAtual += 40){
        rect(350, yAtual, 10, 20);
    }

 for (let i = 0; i < 3; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " 1 ponto", 50, 200);
      noLoop();
    }
  }
}

function keyReleased() {
    if (key == 'a') {
        xJogador[0] += random(20);
    }
    if(key == 'g') {
        xJogador[1] += random(20);
    }
  if (key == 'l') {
        xJogador[2] += random(20);
    }

}
  