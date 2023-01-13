function sinUsarElse(suscripcion){
    if(suscripcion == 'Free'){
        console.log("Cursos por una semana");
        return;
    }
    if(suscripcion == 'Expert'){
        console.log("Cursos por siempre");
        return;
    }
    console.warn("Lo sentimos esta suscripción no existe =(");
}

sinUsarElse("Basajs");



let obj = {
    nombre: 'Beto',
    apellido: 'Villanueva'
};
 
//obj.nombre || obj['nombre']

function conseguirSuscripcionObj(aux){
    if(obj[aux]){
        console.log(obj[aux]);
    }
    console.warn('Esa propiedad no existe en el Objeto');
}

conseguirSuscripcionObj('nombre');