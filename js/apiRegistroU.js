$(document).ready(function () {
    /* funcion de JqueryValidate que verifica y valida los campos según las siguientes opciones */
     $("#formRegistroU").validate({
    rules: {
            nombreApellido: {required: true,minlength: 5},
            email: {required: true,email: true},
            password: {required: true,minlength: 5},
            repPassword: {required: true,minlength: 5,equalTo: "#password"}
        },
    messages: {
            nombreApellido: {required: "Ingrese su nombre y apellido por favor", minlength: "Verifique nombre y apellido"},
            email: {email: "Respetar el siguiente formato: email@dominio.com",required: "Ingrese una dirección de correo electrónico"},
            password: {required: "Por favor complete este campo", minlength: "Ingrese mínimo 5 caracteres"},
            repPassword: {required: "Por favor complete este campo", minlength: "Ingrese mínimo 5 caracteres", equalTo: "Las constraseñas no coinciden"}
        },
        errorElement: 'span'
    });
    
    // Evento Click del botón "Registrarse"
    $('#registrarse').click(function (e) { 
        e.preventDefault(); 
    
            // Arreglo con los datos para enviar
            var datos = {
                name:$('#nombreApellido').val(),
                email:$('#email').val(),
                password:$('#password').val()
            };

            $.ajax({
                type:"POST",
                url:"http://127.0.0.1:8000/api/register",
                data:datos,
                dataType: 'JSON',
                success:function(datos){ 
                   console.log('exito')
                },
                 error: function(error){
                     console.log('error');
                } 
            })       
  
            /* Alerta personalizada que desaparece según el tiempo indicado */
            swal("Ya eres parte de VaDeHoteles", {
                icon: "success",
                title: "Registrado con éxito",
                button: false,
                timer: 2000,
            });
            /*Una vez presionado el botón y mostrado el mensaje superior, se limpian los campos del formulario */
            $("#formRegistroU")[0].reset();

            
    });
    
});

