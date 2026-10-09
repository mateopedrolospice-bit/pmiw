function cargarSecuencia(prefijo,cantidad){
  let listaImagenes = [];
  for (let i= 1; i <= cantidad; i++){
    let ruta = "data/" + prefijo + i + ".png"
    listaImagenes[i] = loadImage(ruta);
  }
  return listaImagenes;
}

let fondos = [];
let letrero, creditos, InicoB, siguiente,textbox,eleccion;

let fuente, lineas;

let pantallaActual = 0;

function preload(){
// Carga de los 18 fondos unicos para las pantallas del juego
fondos = cargarSecuencia("fondo", 18);
InicoB = loadImage ("data/inicio.png");
letrero = loadImage ("data/letrero.png");
creditos = loadImage ("data/creditos.png");
textbox = loadImage ("data/textbox.png");
siguiente = loadImage ("data/Flecha.png");
eleccion = loadImage("data/eleccion.png");

lineas = loadStrings("data/textojuego.txt");
fuente = loadFont("data/Grenze-SemiBoldItalic.ttf");


}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  //inicio
 if (pantallaActual === 0) {
 dibujarPantallaInicio();
 //primera pantalla
 } else if (pantallaActual === 1) {
 dibujarEscenaDialogo(fondos[1],4);
 //segunda pantalla
  } else if (pantallaActual === 2) {
 dibujarEscenaEleccion(fondos[2],7,11,14);
 //tercera pantalla
 } else if (pantallaActual === 3) {
 dibujarEscenaDialogo(fondos[3],18);
 }
 //cuarta pantalla
  else if (pantallaActual === 4) {
 dibujarEscenaEleccion(fondos[4],21,25,28);
}
 //quinta pantalla
 else if(pantallaActual===5){
 dibujarEscenaDialogo(fondos[5],32);
 }
 //sexta pantalla
 else if (pantallaActual===6){
 dibujarEscenaEleccion(fondos[6],35,39,42);
 }
 //septima pantalla
 else if (pantallaActual===7){
 dibujarEscenaDialogo(fondos[7],46);
 }
 //octava pantalla
 else if (pantallaActual===8){
 dibujarEscenaEleccion(fondos[8],49,53,56);
 }
 //novena pantalla
 else if(pantallaActual===9){
 dibujarEscenaDialogo(fondos[9],60);
 }
 //decima pantalla
 else if(pantallaActual===10){
 dibujarEscenaEleccion(fondos[10],63,67,70);
 }
 //onceava pantalla
 else if(pantallaActual===11){
 dibujarEscenaDialogo(fondos[11],74);
 }
 //doceava pantalla
 else if(pantallaActual===12){
 dibujarEscenaEleccion(fondos[12],77,81,84);
 }
 //treceava pantalla
 else if(pantallaActual===13){
 dibujarEscenaDialogo(fondos[13],88);
 }
 //catorceava pantalla
 else if(pantallaActual===14){
 dibujarEscenaDialogo(fondos[14],91);
 }
 //quinceava pantalla
 else if(pantallaActual===15){
 dibujarEscenaDialogo(fondos[15],97);
 }
 //dieciseisava pantalla
 else if(pantallaActual===16){
 dibujarEscenaDialogo(fondos[16],100);
 }
 //diecisieteava pantalla
 else if(pantallaActual===17){
 dibujarEscenaDialogo(fondos[17],106);
 }
 //dieciochoava pantalla
 else if(pantallaActual===18){
 dibujarEscenaDialogo(fondos[18],109);
 }
 //creditos
 else if(pantallaActual===99){
 dibujarPantallaCreditos();
 }

}

function dibujarPantallaInicio() {
  image(fondos[1], 0, 0, width, height);
  image(InicoB, 300, 300, 180, 140);

  // Animacion flotante para el letrero del titulo
  let desfasajeY = 20 + sin(frameCount * 0.05) * 8;
  image(letrero, 220, desfasajeY, 320, 120);

  image(creditos, 600, 380, 180, 60);
}

function dibujarEscenaDialogo(imgFondo,texto) {
  image(imgFondo,0,0,width,height);
  image(textbox,100,280,600,180);
  image(siguiente,700,380,90,60);

  textFont(fuente);
  textSize(18);
  text(lineas[texto],150,360,515,80);
}

function dibujarEscenaEleccion(imgFondo,textoPrincipal,eleccion1,eleccion2){
  image(imgFondo,0,0,width,height);
  image(textbox,100,240,600,180);
  image(eleccion,120,360,220,80);
  image(eleccion,420,360,220,80);

  //texto principal
  textFont(fuente);
  textSize(18);
  textAlign(LEFT,BASELINE);
  text(lineas[textoPrincipal],160,315,500,80);

  //Texto elecciones
  textSize(14);
  textAlign(CENTER,CENTER);
  text(lineas[eleccion1],140,355,180,80);
  text(lineas[eleccion2],440,355,180,80);

  textAlign(LEFT, BASELINE);

}

function dibujarPantallaCreditos() {
  image(fondos[1], 0, 0, width, height);

  // Animacion flotante para el cartel de creditos
  let desfasajeYCreditos = 30 + sin(frameCount * 0.04) * 6;
  image(creditos, 200, desfasajeYCreditos, 400, 120);

  image(textbox, 100, 180, 600, 240);
  image(siguiente, 700, 380, 90, 60);

  textFont(fuente);
  fill(0);
  textAlign(CENTER, CENTER);

  textSize(20);
  text("Mateo Lospice", 400, 255);
  text("Bianca Pilar Civico Fernandez", 400, 285);

  textSize(15);
  text("Programación para medios interactivos orientada a las tecnologías web", 400, 315);
  text("2026", 400, 340);

  textAlign(LEFT, BASELINE);
}

function botonClickeado(x, y, ancho, alto) {
  return mouseX >= x && mouseX <= x + ancho && mouseY >= y && mouseY <= y + alto;
}

function clickSiguiente(pantallaaDestino){
  if(botonClickeado(700,380,90,60)){
    pantallaActual = pantallaaDestino;
  }
}

function clickelEccionIzquierda(pantallaDestino){
  if(botonClickeado(120,360,220,80)){
    pantallaActual = pantallaDestino;
  }
}

function clickEleccionDerecha(pantallaDestino){
  if (botonClickeado(420,360,220,80)){
    pantallaActual = pantallaDestino
  }
}

function mousePressed(){
  if (pantallaActual === 0) {
    if (botonClickeado(300, 300, 180, 140)) {
      pantallaActual = 1;
    } else if (botonClickeado(600, 380, 180, 60)) {
      pantallaActual = 99;
    }
  } else if (pantallaActual===1){
    clickSiguiente(2);
  } else if (pantallaActual===2){
    clickelEccionIzquierda(3);
    clickEleccionDerecha(5);
  } else if (pantallaActual===3){
    clickSiguiente(4);
  } else if (pantallaActual===4){
    clickelEccionIzquierda(7);
    clickEleccionDerecha(9);
  } else if (pantallaActual===5){
    clickSiguiente(6);
  } else if (pantallaActual===6){
    clickelEccionIzquierda(7);
    clickEleccionDerecha(11);
  } else if (pantallaActual===7){
    clickSiguiente(8);
  } else if (pantallaActual===8){
    clickelEccionIzquierda(13);
    clickEleccionDerecha(15);
  } else if (pantallaActual===9){
    clickSiguiente(10);
  } else if (pantallaActual===10){
    clickelEccionIzquierda(7);
    clickEleccionDerecha(17);
  } else if (pantallaActual===11){
    clickSiguiente(12);
  } else if (pantallaActual===12){
    clickelEccionIzquierda(7);
    clickEleccionDerecha(15);
  } else if (pantallaActual===13){
    clickSiguiente(14);
  } else if (pantallaActual===14){
    clickSiguiente(99);
  } else if (pantallaActual===15){
    clickSiguiente(16);
  } else if (pantallaActual===16){
    clickSiguiente(99);
  } else if (pantallaActual===17){
    clickSiguiente(18);
  } else if (pantallaActual===18){
    clickSiguiente(99);
  } else if (pantallaActual===99){
    clickSiguiente(0);
  }
}
