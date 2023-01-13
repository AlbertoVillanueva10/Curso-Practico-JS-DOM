
let nombre = "";
let lastname = "";

function nombreCompleto (name, lastname) {
    return name + ' ' + lastname; 
}

console.log("Hola mundo");
console.log(nombreCompleto('Beto', 'Villa'));


let aux = 100;

if(aux < 10){
    console.log("Entro al primer if");
}
else if(aux == 10){
    console.log("Entro al segundo if");
}
else{
    console.log("No entro a ningun IF");
}