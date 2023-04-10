$(document).ready(function () { //click
    GetAll();
});

function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'https://randomuser.me/api',
        success: function (result) { //200 OK 
            $('#tblEmpleado tbody');
            $.each(result.results, function (i, empleado) {
                var filas =
                    '<tr>'
                    + "<td class='text-center'>" + empleado.name.first + '  ' + '  ' + empleado.name.last + "</td>"
                    + "<td class='text-center'>" + empleado.gender + "</td>"
                    + "<td class='text-center'>" + empleado.email + "</td>"
                    + "<td class='text-center'>" + empleado.location.city + empleado.location.country + "</td>"
                    + "<td class='text-center'> <img src= " + empleado.picture.medium + "></td>"

                    + "</tr>";
                $("#tblEmpleado tbody").append(filas);
            });
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
};