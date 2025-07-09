//pasos para consumir una api
//1. definir la url de la api
//2.configurar la peticion
//3.llamar al FETCH

async function consumirApi() {
    let url="localhost:8080/usuario";//pa donde vas
    let peticion={
        method:"POST",
        headers:{},
        body:JSON.stringify()
    }//a hacer que ?
    let respuestaServidor=await fetch(url, peticion);//el taxi para ir 
    return await respuestaServidor.json()

}