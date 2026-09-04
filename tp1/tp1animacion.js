let fondo;
let framesCorrer = [];
let framesIdle = [];
let jabaliX = 50;
let jabaliY = 460;
let frameActual = 0;
let estado = "correr";
let velocidadAnimacion = 5;
let contadorFrames = 0;
let velocidadMovimiento = 2;

let titulo;
let tituloY = -200;
let mostrarTitulo = false;

function preload() {
  fondo = loadImage("data/fondo.png");
  titulo = loadImage("data/nombre.png");
  for (let i = 0; i < 20; i++) {
    framesCorrer.push(loadImage("data/" + i + ".png"));
  }
  for (let i = 0; i < 4; i++) {
    framesIdle.push(loadImage("data/" + i + ".png"));
  }
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
}

function draw() {
  image(fondo, width / 2, height / 2, width, height);

  switch (estado) {
    case "correr":
      frameActual = actualizarAnimacion(framesCorrer, frameActual, velocidadAnimacion);
      jabaliX += velocidadMovimiento;

      if (jabaliX > width / 2) {
        mostrarTitulo = true;
      }
      if (jabaliX > width + 50) {
        reiniciarAnimacion();
      }
      break;
    case "idle":
      frameActual = actualizarAnimacion(framesIdle, frameActual, velocidadAnimacion + 3);
      break;
  }

  dibujarPersonaje(
    jabaliX,
    jabaliY,
    estado === "correr" ? framesCorrer : framesIdle,
    frameActual,
    1.2
  );

  if (mostrarTitulo) {
    if (tituloY < height / 2) {
      tituloY += 10;
    }
    push();
    scale(0.2);
    image(titulo, width / 2 / 0.2, tituloY / 0.2);
    pop();
  }
}

function dibujarPersonaje(x, y, arrayFrames, indiceFrame, escala) {
  let img = arrayFrames[indiceFrame % arrayFrames.length];
  push();
  translate(x, y);
  scale(escala);
  image(img, 0, 0);
  pop();
}

function actualizarAnimacion(arrayFrames, frameActual, velocidad) {
  contadorFrames++;
  if (contadorFrames >= velocidad) {
    frameActual = (frameActual + 1) % arrayFrames.length;
    contadorFrames = 0;
  }
  return frameActual;
}

function reiniciarAnimacion() {
  jabaliX = 50;
  frameActual = 0;
  contadorFrames = 0;
  estado = "correr";
  velocidadAnimacion = 5;
  mostrarTitulo = false;
  tituloY = -200;
}

function keyPressed() {
  if (key === " ") {
    estado = (estado === "correr") ? "idle" : "correr";
    frameActual = 0;
    contadorFrames = 0;
  }
  if (key === "r" || key === "R") {
    reiniciarAnimacion();
  }
  if (keyCode === UP_ARROW) {
    velocidadAnimacion = max(2, velocidadAnimacion - 1);
  }
  if (keyCode === DOWN_ARROW) {
    velocidadAnimacion = min(15, velocidadAnimacion + 1);
  }
}
