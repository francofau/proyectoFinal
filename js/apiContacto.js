$(document).ready(function () {
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
                     console.log('final');
                } 
            })       
    });
});