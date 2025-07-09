let boton = document.getElementById("boton");
let cajaNombres = document.getElementById("nombres");
let cajaContrasena = document.getElementById("contrasena");
let cajaCorreo = document.getElementById("correo");
let cajaEdad = document.getElementById("edad");
let cajaFecha = document.getElementById("fecha");

//detectando el evento click del boton
boton.addEventListener("click", function (evento) {
    evento.preventDefault()

    //rutina de validacion del formulario
    let nombres = cajaNombres.value;
    let contrasena = cajaContrasena.value;
    let correo = cajaCorreo.value;
    let edad = cajaEdad.value;
    let fecha = cajaFecha.value;


    if (nombres == "" || contrasena == "" || correo == "" || edad == "" || fecha == "") {

        Swal.fire({
            icon: "error",
            title: "Revisa,  ya que tienes campos vacios",
            text: "Algo ha salido mal!"
        });



    } else {
        Swal.fire({
            title: "Bienvenido",
            text: "Tus datos fueron correctos",
            icon: "success"
        });

    }

})
