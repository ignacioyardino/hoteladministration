class Habitacion {
    constructor(tipoHabitacion, cantidadAdultos, cantidadMenores, fechaIngreso, fechaSalida) {
            this.tipoHabitacion = tipoHabitacion;
            this.cantidadAdultos = cantidadAdultos;
            this.cantidadMenores = cantidadMenores;
            this.fechaIngreso = fechaIngreso;
            this.fechaSalida = fechaSalida;

        }
        //  

}
var listadoHabitaciones = [];

class Reserva {

    constructor(estado, nombres, documento, telefono, costoTotal, moneda, listadoHabitaciones, comentario) {
            this.estado = estado;
            this.nombres = nombres;
            this.documento = documento;
            this.telefono = telefono;
            this.costoTotal = costoTotal;
            this.moneda = moneda;
            this.listadoHabitaciones = listadoHabitaciones;
            this.pedidoEspecial = comentario;

        }
        //  
    imprimoDatos() {


        const estado = this.estado;
        const titular = this.nombres;
        const documento = this.documento;
        const telefono = this.telefono;
        const costo = this.costoTotal;
        const moneda = this.moneda;

        const comentario = this.pedidoEspecial;

        var habitaciones = this.listadoHabitaciones;

        //  console.log(estado, titular, documento, telefono, costo, moneda, habitaciones, );

        console.log(JSON.stringify({ Estado: estado, Titular: titular, Documento: documento, Teléfono: telefono, Costo: costo + " " + moneda, Habitación: habitaciones, Comentario: comentario }));
    }
}


$(document).ready(function() {
    $("#btn-agregar-habitacion").click(function() {
        agregarHabitacion();
    });
    //
    $("#btn-aceptar").click(function() {
        agregarReserva();
    });



});


function agregarHabitacion() {

    var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow();
    newRow.classList.add("item");
    // Insert a cell at the end of the row
    var celdaCategoria = newRow.insertCell();
    celdaCategoria.classList.add("celdaCategoria");
    //
    var celdaAdulto = newRow.insertCell();
    celdaAdulto.classList.add("celdaAdulto");
    //
    var celdaMenores = newRow.insertCell();
    celdaMenores.classList.add("celdaMenores");
    //
    var celdaFechaEntrada = newRow.insertCell();
    celdaFechaEntrada.classList.add("celda-Fecha-entrada");
    //
    var celdaFechaSalida = newRow.insertCell();
    celdaFechaSalida.classList.add("celda-Fecha-salida");
    //  
    var celdaBoton = newRow.insertCell();
    var btn = document.createElement("button");
    btn.classList.add("eliminar");
    //btn.setAttribute("id", "eliminar");
    btn.innerHTML = 'Eliminar';
    //
    celdaCategoria.appendChild(document.createTextNode($("#tipo-habitacion :selected").val()));
    celdaAdulto.appendChild(document.createTextNode(($("#tf-adultos").val())));
    celdaMenores.appendChild(document.createTextNode(($("#tf-menores").val())));
    celdaFechaEntrada.appendChild(document.createTextNode(($("#fecha-entrada").val())));
    celdaFechaSalida.appendChild(document.createTextNode(($("#fecha-salida").val())));


    celdaBoton.appendChild(btn);
    //
    $('.eliminar').click(function() {
        removeItem(this);
    });

}




/* Remove item from cart */
function removeItem(removeButton) {
    /* Remove row from DOM and recalc cart total */
    var row = $(removeButton).parent().parent(); //CONSIGO LA ROW MEDIANTE EL "PADRE-DEL-PADRE"

    row.remove();

}



function agregarReserva() {
    var tipoHabitacion = "";
    var cantAdultos = 0;
    var cantMenores = 0;
    var fechaIngreso = "";
    var fechaSalida = "";

    var moneda = "";
    var estado = "";

    moneda = document.querySelector('input[name="moneda"]:checked').value;
    estado = document.querySelector('input[name="estado"]:checked').value;

    $('.item').each(function() {
        tipoHabitacion = $(this).children('.celdaCategoria').text();
        cantAdultos = $(this).children('.celdaAdulto').text();
        cantMenores = $(this).children('.celdaMenores').text();
        fechaIngreso = $(this).children('.celdaFechaEntrada').text();
        fechaSalida = $(this).children('.celdaFechaSalida').text();


        listadoHabitaciones.push(new Habitacion(tipoHabitacion, cantAdultos, cantMenores, fechaIngreso, fechaSalida));


        // console.log(tipoHabitacion + " " + cantAdultos + " " + cantMenores);

    });




    var reserva = new Reserva(estado, $("#nombres").val(), $("#cedula").val(), $("#celular").val(), $("#costoTotal").val(), moneda, listadoHabitaciones, $("#pedidoEspecial").val());
    //console.log(listadoHabitaciones);

    reserva.imprimoDatos();

}