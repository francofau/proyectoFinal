$(document).ready(function () {
    /* funcion de JqueryValidate que verifica y valida los campos según las siguientes opciones */
     $("#formLogin").validate({
    rules: {
            email: {required: true,email: true},
            password: {required: true}
        },
    messages: {
            email: {email: "Respeta el siguiente formato: email@dominio.com",required: "Ingrese su email registrado"},
            password: {required: "Por favor complete su contraseña"},
        },
        errorElement: 'span'
    });
    
    // Evento Click del botón "Registrarse"
    $('#login').click(function (e) { 
        e.preventDefault(); 
    
            // Arreglo con los datos para enviar
            var datos = {
                email:$('#email').val(),
                password:$('#password').val()
            };

            $.ajax({
                type:"POST",
                url:"http://127.0.0.1:8000/api/loginU",
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
            swal(" ", {
                icon: "success",
                title: "Ok",
                button: false,
                timer: 1000,
            });
            /*Una vez presionado el botón y mostrado el mensaje superior, se limpian los campos del formulario */
            $("#formLogin")[0].reset();

            
    });
    
});

