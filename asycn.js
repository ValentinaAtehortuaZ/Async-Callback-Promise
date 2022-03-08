//Async/ await
//Qué es?
//funciones asincronnicas que disfrazan una promesa --- otra forma de escribir un callback

function principal(){

    let promesa= new Promise(function(resolve,reject){
 
     setTimeout(function(){
 
         console.log("Soy la funcion principal")
         resolve("terminé")
         
     },2000)
 
    })
 
    return promesa
    
 }
 
async function callback(){

   //Lo que debe pasar
    try{

        await principal()
        console.log("Soy el callback")

        //El error
    }catch(error){

        console.log("UPSS..."+error) 

    }
}

callback()