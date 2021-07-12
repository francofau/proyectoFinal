$(document).ready(function () {
    // Evento Click del botón "enviar consulta"
    $('#login').click(function (e) { 
        e.preventDefault(); 
            nombre = $('nombre').val(),
            apellido = $('apellido').val(),
            email = $('email').val(),
            telefono = $('telefono').val(),
            mens = $('mensaje').val(),
            adjunt = $('adjunt').val(),
            enContacto = $('enContacto');/* esto contiene el mensaje que en principio estaría oculto */
        
        // Validar que los siguientes campos estén completados:
        if(nombre.length == 0 || apellido.length == 0 || email.length == 0 || telefono.length == 0 || mens.length == 0) msg_error.show().html("Complete los datos obligatorios");  
        else{
            
            enContacto.hide();

            // Arreglo con los datos para enviar
            var Data = {
                "nombre": nombre,
                "apellido": apellido,
                "email": email,
                "telefono": telefono,
                "mensaje": mens,
                "adjunt":adjunt
            };

            // AJAX para conectarnos con la API
            $.ajax({
                type: "POST",
                url: '128...',
                data: Data,
                dataType: 'JSON',
                success: function (data) {
                    enContacto.show();/* muestra el mensaje inferior */                    
                    $('#nombre').val('');
                    $('#apellido').val('');
                    $('#email').val('');
                    $('#telefono').val('');
                    $('#password').val('');
                    $('#adjunt').val('');                    
                    },
                error: function(error){
                   enContacto.show(error)
                }                
            });
        }
    });
});