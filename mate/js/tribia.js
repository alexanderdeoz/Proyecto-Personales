var inicio = document.getElementById("inicio");
var trivia = document.getElementById("trivia");
var pregunta = document.getElementById("pregunta");
var imagen = document.getElementById("imagen");
var respuestaA = document.getElementById("A");
var respuestaB = document.getElementById("B");
var respuestaC = document.getElementById("C");
var mostrador = document.getElementById("mostrador");
var calibre_tiempo = document.getElementById("calibre_tiempo");
var progreso = document.getElementById("progreso"); // progreso en puntos 
var imagen_resultado_puntuacion = document.getElementById("imagen_resultado_puntuacion"); //imagenes de calificacion

// crear preguntas
let preguntas = [
    {
        //pregunta uno
        pregunta : "¿Cual es el Factor Comun (px + mx + py + my)?  ", //pregunta
        imgSrc : "img/pregunta_1.PNG",//imagen pregunta
        respuestaA : "(p + m) (x + y)",//respuestas de la pregunta
        respuestaB : "ninguno",//respuestas de la pregunta
        respuestaC : "(px + mx) + (py +my)",//respuestas de la pregunta
        correct : "A" //respuesta correcta de la pregunta 
    },{
        //pregunta  dos
        pregunta : "¿Que es FActorar?", // pregunta
        imgSrc : "img/pregunta_2.jpg", // imagen correspondiente a la pregunta 
        respuestaA : "ninguno",//respuestas de la pregunta
        respuestaB : "Es la transformacion de producto notables a FACTORES",//respuestas de la pregunta
        respuestaC : "Reduccion de terminos",//respuestas de la pregunta
        correct : "B" // respuesta correcta de la pregunta 
    },{
        //pregunta tres 
        pregunta : "¿Cuales sistemas de ecuaciones existen  ", // pregunta
        imgSrc : "img/pregunta_3.png",// imagen de la pregunta
        respuestaA : "ninguno", //respuestas de la pregunta
        respuestaB : "Metodo Grafico ,Metodo de sustitucion",//respuestas de la pregunta
        respuestaC : "Metodo Grafico, Metodo de igualacion, Metodo de reduccion y  Metodo de sustitucion ",//respuestas de la pregunta
        correct : "C" // respuesta correcta
    },{
        //pregunta 4
        pregunta : "¿Cual relacion trigonometrica es erronea?", // pregunta
        imgSrc : "img/pregunta_4.jpg", // imagen correspondiente a la pregunta 
        respuestaA : "Sen A° = Caateto Opuesto / Hipotenusa ",//respuestas de la pregunta
        respuestaB : "Cos A° = Cateto Opuesto / Cateto Adyacente",//respuestas de la pregunta
        respuestaC : "Tangente A° = Cateto Opuesto / Cateto Adyacente",//respuestas de la pregunta
        correct : "B" // respuesta correcta de la pregunta 
    },{
        //pregunta 5
        pregunta : "¿En que triangulo se Puede usar funciones Trigonometricas ?", // pregunta
        imgSrc : "img/pregunta_5.jpg",// imagen de la pregunta
        respuestaA : "Triangulo Agudo", //respuestas de la pregunta
        respuestaB : "TRiangulo Equilatero",//respuestas de la pregunta
        respuestaC : "Triangulo Regtangulo",//respuestas de la pregunta
        correct : "C" // respuesta correcta
    },{
        //pregunta 6
        pregunta : "¿En que se basa el TEOREMA DE PITAGORAS?", // pregunta
        imgSrc : "img/pregunta_6.jpg", // imagen correspondiente a la pregunta 
        respuestaA : "Es la igualacion de lados ",//respuestas de la pregunta
        respuestaB : "Es la igualacion de Areas ",//respuestas de la pregunta
        respuestaC : "ninguna",//respuestas de la pregunta
        correct : "B" // respuesta correcta de la pregunta 
    },{
        //pregunta 7
        pregunta : "¿Cuando es coseno 1 y por que ?", // pregunta
        imgSrc : "img/pregunta_7.png",// imagen de la pregunta
        respuestaA : "Ninguno", //respuestas de la pregunta
        respuestaB : "El cateto opuesto coincide con la hipotenusa ",//respuestas de la pregunta
        respuestaC : "Por que considen el cateto anyeasente con la hipotenusa ",//respuestas de la pregunta
        correct : "C" // respuesta correcta
    },{
        //pregunta 8
        pregunta : "¿En cuantos Grados cos es igual a 0 y xq ?  ", // pregunta
        imgSrc : "img/pregunta_8.jpg", // imagen correspondiente a la pregunta 
        respuestaA : "en los 360° , absisasa y radio coinciden",//respuestas de la pregunta
        respuestaB : "en los 90° , cateto adyacente coincide con la hipotenusa ",//respuestas de la pregunta
        respuestaC : "Ninguna",//respuestas de la pregunta
        correct : "B" // respuesta correcta de la pregunta 
    },{
        //pregunta 9
        pregunta : "¿la Grafica presentada corresponde a la fundion trigonometrica ?", // pregunta
        imgSrc : "img/pregunta_9.png",// imagen de la pregunta
        respuestaA : "tangente", //respuestas de la pregunta
        respuestaB : "coseno",//respuestas de la pregunta
        respuestaC : "seno",//respuestas de la pregunta
        correct : "C" // respuesta correcta
    },{
        //pregunta 10
        pregunta : "¿que son los óxidos de nitrógeno?", // pregunta
        imgSrc : "img/pregunta_10.jpg",// imagen de la pregunta
        respuestaA : "cotangente", //respuestas de la pregunta
        respuestaB : "tangente ",//respuestas de la pregunta
        respuestaC : "coseno",//respuestas de la pregunta
        correct : "C" // respuesta correcta
    }
];

// crea algunas variables

var ultimaPregunta = preguntas.length - 1; // que seleccione el  elemento del array el -1  selecciona por su pocision
var corriendoPregunta = 0;
var contar = 0;
var tiempos_pregunta = 10; // 10s  le damos el maximo  al contador en numeros
var logitud_barra_progreso = 150; // 150px es el la longitud de la barra de progreso
var cantidad_progreso = logitud_barra_progreso / tiempos_pregunta; // se dividen en porcentaje las bariblas del contador  con la barra de progreso
var TIEMPO; 
var puntuacion = 0;

// hacer preguntas 
function renderPregunta(){
    var q = preguntas[corriendoPregunta];
    
    pregunta.innerHTML = "<p>"+ q.pregunta +"</p>";
    imagen.innerHTML = "<img src="+ q.imgSrc +">";
    respuestaA.innerHTML = q.respuestaA;
    respuestaB.innerHTML = q.respuestaB;
    respuestaC.innerHTML = q.respuestaC;
}

inicio.addEventListener("click",inicioTrivia);

// concurso estrellas
function inicioTrivia(){
    inicio.style.display = "none";
    renderPregunta();
    trivia.style.display = "block";
    renderProgreso();
    renderMostrador();
    TIEMPO = setInterval(renderMostrador,500); // 1000ms = 1s
}

// hacer progreso 
function renderProgreso(){
    for(let qIndex = 0; qIndex <= ultimaPregunta; qIndex++){
        progreso.innerHTML += "<div class='prog' id="+ qIndex +"></div>"; // recupera elemntos del html
    }
}

// contador de render 

function renderMostrador(){
    if(contar <= tiempos_pregunta){ // declaramos la condicion que  el porcentaje  tenga un liite
        mostrador.innerHTML = contar; // recupera elementos del contador y que se menor o igual  a las preguntas a tiempo
        calibre_tiempo.style.width = contar * cantidad_progreso + "px"; // estilo del contador
        contar++ //aumenta su contador en uno
    }else{
        contar = 0; //contador inicia en 0
        // cambiar el color de progreso a rojo
        answerIsWrong();
        if(corriendoPregunta < ultimaPregunta){
            corriendoPregunta++;
            renderPregunta();
        }else{
            // finalizar el cuestionario y mostrar el puntaje 
            clearInterval(TIEMPO); 
            puntuacionRender();
        }
    }
}

// confirmar respuesta 

function checkAnswer(answer){
    if( answer == preguntas[corriendoPregunta].correct){
        //la respuesta es correcta
        puntuacion++;
        // cambiar el color del progreso a verde 
        answerIsCorrect();
    }else{
        // la respuesta es incorrecta 
        // cambiar el color de progreso a rojo 
        answerIsWrong();
    }
    contar = 0;
    if(corriendoPregunta < ultimaPregunta){
        corriendoPregunta++; // avansa a la siguiente
        renderPregunta(); //si no contesto  avansa a la siguiente pregunta 
    }else{
        // finalizar el cuestionario y mostrar el puntaje 
        clearInterval(TIEMPO); // avansa a la siguiente pregunta   y da un punto rojo
        puntuacionRender();
    }
}

// la respuesta es correcta 
function answerIsCorrect(){
    document.getElementById(corriendoPregunta).style.backgroundColor = "#0f0"; // recuperamos el elemento y comparamos la respuesta y le damos un color
}

// la respuesta es incorrecta 
function answerIsWrong(){
    document.getElementById(corriendoPregunta).style.backgroundColor = "#f00"; // recuperamos la informacion del array  y si n considen las respuestas dara un color rojo
}

// puntaje 
function puntuacionRender(){
    imagen_resultado_puntuacion.style.display = "block";
    
    // calcular la cantidad de preguntas porcentuales respondidas por el usuario 
    const puntuacionPerCent = Math.round(100 * puntuacion/preguntas.length);
    
    // elege la imagen basada en la partitura percenterlige la imagen
    var img = (puntuacionPerCent >= 80) ? "img/5.PNG "  :
              (puntuacionPerCent >= 60) ? "img/4.PNG " :
              (puntuacionPerCent >= 40) ? "img/3.PNG " :
              (puntuacionPerCent >= 20) ? "img/2.PNG " :
              "img/1.PNG";
    
    imagen_resultado_puntuacion.innerHTML = "<img src="+ img +">";
    imagen_resultado_puntuacion.innerHTML += "<p>"+ puntuacionPerCent +"/100</p>";
}