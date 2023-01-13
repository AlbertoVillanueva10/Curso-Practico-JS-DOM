const h1 = document.querySelector('h1');
const exampleClass = document.querySelector('.exampleClass');
const p = document.querySelector('p');
const exampleID = document.querySelector('#exampleID');
const input = document.querySelector('input');


console. log(input.value);

console.log({
    h1,
    exampleID,
    p,
    exampleClass,
    input
});


const img = document.createElement('img');
img.setAttribute('src', 'xxxxx');
console.log('img');

exampleID.innerHTML = '';
exampleID.appendChild('img');