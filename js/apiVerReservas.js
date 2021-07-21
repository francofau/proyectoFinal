//Funcion que carga los datos cuando inicia la página
addEventListener('load');

function getAll() {

    $.ajax({
        type: 'GET',
        url: "http://127.0.0.1:8000/api/RELLENARAPI",
        dataType: 'JSON',

        success: function(data) {
            /* Tabla altaHotels */
            $('#nombreHotel').html(data.nombreH);
            $('#direccionHotel').html(data.direccion);
            $('#ciudadHotel').html(data.ciudad);
            $('#telefonoHotel').html(data.numeroH);
            /* Tabla reservas */
            $('#fechaEntrada').html(data.llegada);
            $('#fechaSalida').html(data.salida);
        },

        error: function(error) {
            console.log(error);
        }
    });

}