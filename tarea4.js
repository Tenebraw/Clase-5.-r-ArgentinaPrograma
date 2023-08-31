const numerosLista =document.querySelectorAll('li');

let arrayNumeros = [];

for(let i=0;i<numerosLista.length;i++){
    arrayNumeros.push(parseInt(numerosLista[i].innerText));
}

// Funcion promedio de numeros.
function promedioLi(){
    let total =0;
    for(let i =0;i<arrayNumeros.length;i++){
    total = total+arrayNumeros[i];   
}
 return total/arrayNumeros.length;

}


// Funcion numero mas grande.
function masGrandeLi(){
    let mayor =0;
    for(let i=0;i<arrayNumeros.length;i++){
        if(arrayNumeros[i]>=mayor){
            mayor=arrayNumeros[i];
        }      
    }
    return mayor;
}

// Funcion numero mas chico.
function masChico(){
    let menor=arrayNumeros[0];
    for(let i=0;i<arrayNumeros.length;i++){
    
        if(arrayNumeros[i]<=menor){
            menor=arrayNumeros[i];
        }
    }
    return menor;
}

// Funcion numero que mas se repite.
function masRepite(){
    let contador1=0;
   
    let popular;
    for(let i =0;i<arrayNumeros.length;i++){
        let contador2 =0;
        for(let j=0;j<arrayNumeros.length;j++){
            if(arrayNumeros[i]==arrayNumeros[j]){
                contador2++;

            }
            if(contador2>contador1){
                contador1=contador2;
                popular = arrayNumeros[i];

            }           
        }
    }
    return popular;
}


const promedioLista= document.querySelector('#promedio');
const mayorLista = document.querySelector('#mayor');
const menorLista = document.querySelector('#menor');
const masRepetido = document.querySelector('#repetido');

promedioLista.innerText =`El promedio de los numeros de la lista es ${promedioLi()}`;
mayorLista.innerText=`El mayor de los numeros de la lista es ${masGrandeLi()}`;
menorLista.innerText = `El menor de los numeros de la lista es ${masChico()}`;
masRepetido.innerText=`El numero mas repetido de la lista es ${masRepite()}`;