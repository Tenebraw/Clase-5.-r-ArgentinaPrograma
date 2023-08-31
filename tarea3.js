const $botonCalcular = document.querySelector('#botoncalcular');

$botonCalcular.onclick = function(evento){

// Tomando los valores de los campos.
    const horasVideos = document.querySelectorAll('.horas'); 
    const minutosVideos = document.querySelectorAll('.minutos');
    const segundosVideos = document.querySelectorAll('.segundos'); 

    let arrayHoras =[];
    let arrayMinutos=[];
    let arraySegundo=[];

// Recorriendo los valores y agregandolos a sus arrays correspondientes.
   for(let i=0;i<horasVideos.length;i++){
    

    arrayHoras.push(horasVideos[i].value);
    arrayMinutos.push(minutosVideos[i].value);
    arraySegundo.push(segundosVideos[i].value);
    }

    let horas =0;
    let minutos=0;
    let segundos=0;

// Transformando los valores en enteros, luego procedo a sumarlos.
    for(let i=0;i<arrayHoras.length;i++){
        horas = horas+parseInt(arrayHoras[i]);
        minutos =minutos+parseInt(arrayMinutos[i]);
        segundos=segundos+parseInt(arraySegundo[i]);
    }

// Pasando todo a segundos para poder manipularlos.
    let hsAsegundos= horas*3600;
    let minASegunfos =minutos*60;
    segundos=segundos+hsAsegundos+minASegunfos;

    let nuevaHora = Math.floor(segundos/3600);
    let nuevoMinuto =Math.floor((segundos%3600)/60);
    let nuevoSegundo = segundos%60;

// Mostrando la totalidad de duracion de los videos en el campo.
    let totalVideo = document.querySelector('#totalvideo');
    totalVideo.textContent= `La duracion total de los videos es de ${nuevaHora} hs, ${nuevoMinuto} minutos y ${nuevoSegundo} segundos.`;

evento.preventDefault();
}

//PD: Deberia evitar que los campos esten vacios y me de NaN.