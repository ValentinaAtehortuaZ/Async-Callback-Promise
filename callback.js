//Definicion de callback
//Una llamada en espera
//Una funcion secundaria
//Una funcion que es argumento de otra
//Para que sirve?
//Para llamar una funcion SI Y SOLO SI, una funcion previa se he ejecutado


function principal(callback){

    setTimeout(function(){

        console.log("Soy la funcion principal")
        callback()
    },2000)
}

principal(function(){
    console.log("Soy el callback")
})


//Otra forma de definir callback
//principal(secundaria)

/*function secundaria(){
    console.log("Soy el callback")
}*/
