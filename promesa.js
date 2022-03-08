// Que es una promesa ?
//Algo que si o si se tiene que cumplir
//Algo que se espera
// Un callback disfrazado
//Funcion que se ejecuta despues de otra

// Como se implementa?
//Debemos itilizar una classe de JS(promise())


function principal(){

    let promesa= new Promise(function(resolve,reject){
 
     setTimeout(function(){
 
         console.log("Soy la funcion principal")
         resolve("Soy el callback")
         
     },2000)
 
    })
 
    return promesa
    
 }
 
 principal()
 .then(function(respuesta){
     console.log(respuesta)
 })
 .catch(function(respuesta){
     console.log(respuesta)
 })