$(document).ready(function () {
/*     funcion de JqueryValidate que verifica y valida los campos según las siguientes opciones */
     $("#formContacto").validate({
    rules: {
            nombre: {required: true,minlength: 3},
            apellido: {required: true,minlength: 3},
            email: {required: true,email: true},
            telefono: {required: true,number: true,min: 7},
            mensaje: { required:true,min: 4},
        },
    messages: {
            nombre: {required: "Ingrese su nombre por favor",minlength: "Por favor ingrese un nombre válido"},
            apellido: {required: "Ingrese su apellido por favor",minlength: "Por favor ingrese un apellido válido"},
            email: {email: "Respetar el siguiente formato: email@dominio.com",required: "Ingrese una dirección de correo electrónico"},
            telefono: {required: "Ingrese un número de teléfono por favor",minlength: "Revise el teléfono ingresado",
            number: "Ingrese sólo números"},
            mensaje: {required: "Por favor complete la descripción"}
        },
        errorElement: 'span'
    });
    
    // Evento Click del botón "enviar consulta"
    $('#login').click(function (e) { 
        e.preventDefault(); 
    
            // Arreglo con los datos para enviar
            var datos = {
                nombre:$('#nombre').val(),
                apellido:$('#apellido').val(),
                email:$('#email').val(),
                telefono:$('#telefono').val(),
                mens: $('#mensaje').val(),
                adjunt: $('#adjunt').val()
            };

            $.ajax({
                type:"POST",
                url:"http://127.0.0.1:8000/api/login",
                data:datos,
                dataType: 'JSON',
                success:function(datos){ //success es una funcion que se utiliza si el servidor retorna informacion
                   console.log('exito')
                },
                 error: function(error){
                     console.log('error');
                } 
            })       

  
            /* Alerta personalizada que desaparece según el tiempo indicado */
            swal({
                    icon: "success",
                    title: "Datos enviados",
                    text: "En breve nos pondremos en contacto",
                    buttons: false,
                    timer: 2000,

            });
            /*Una vez presionado el botón y mostrado el mensaje superior, se limpian los campos del formulario */
            $("#formContacto")[0].reset();

            
    });
    
});


