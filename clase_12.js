const h1 = document.querySelector('h1');
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const btnSuma = document.querySelector('#btnSuma');
const pResult1 = document.querySelector('#result1');
const pResult2 = document.querySelector('#result2');

btnSuma.addEventListener('click',btnOnClick);

function btnOnClick(){
   let res = Number(calculo1.value) + parseInt(calculo2.value);
   console.log("El resultado de la suma es = " + res);
   pResult1.innerText = "El resultado de la suma usando innerText es: " + res;
   pResult2.innerHTML = "El resultado de la suma usando innerHTML: " + res;
}

//objeto.preventDefault(); ---> para boton submit, evitar que recargue la página automaticamente


clase 14 min 16
Solucionar tema con git y github