$(function () {
    console.log('El DOM esta listo');
});

/*const actividades = [{
        id: 1,
        nombre: "Taller de Flexibilidad",
        imagen: "1flex.jpg"
    },
    {
        id: 2,
        nombre: "Stretching",
        imagen: "2stretching.jpg"
    },
    {
        id: 3,
        nombre: "Hatha Yoga",
        imagen: "3hatha.jpg"
    },
    {
        id: 4,
        nombre: "Alineacion y elongacion",
        imagen: "4alineacion.jpg"
    },
    {
        id: 5,
        nombre: "Feldenkrais",
        imagen: "5feldenkrais.jpg"
    },
    {
        id: 6,
        nombre: "Vinyasa Yoga",
        imagen: "6vinyasa.jpg"
    },
    {
        id: 7,
        nombre: "Yoga Integral",
        imagen: "7integral.jpg"
    },
    {
        id: 8,
        nombre: "Yoga Multinivel",
        imagen: "8multinivel.jpg"
    }
]*/

const creditos = [{
        cantidad: "1 vez por semana",
        horario: "mañana",
        importe: "2.000"
    },
    {
        cantidad: "2 veces por semana",
        horario: "mañana",
        importe: "2.500"
    },
    {
        cantidad: "1 vez por semana",
        horario: "tarde",
        importe: "2.000"
    },
    {
        cantidad: "2 veces por semana",
        horario: "tarde",
        importe: "2.500"
    },
    {
        cantidad: "1 vez por semana",
        horario: "noche",
        importe: "2.000"
    },
    {
        cantidad: "2 veces por semana",
        horario: "noche",
        importe: "2.500"
    },
]


$("#botones_horarios").append('<button id="mostrarHor" class="btn align-self-center m-3">Ver horarios</button>');
$("#botones_horarios").append('<button id="ocultarHor" class="btn align-self-center m-3">Ocultar horarios</button>');
$("#formulario").append('<button id="verForm" class="btn align-self-center">Formulario de inscripción</button>');
$("#enviar_datos").hide();
$("#cargar_datos").hide();
$("#borrar_datos").hide();




function cargarActividades(actividades) {
    $.ajax({
        method: "GET",
        url:  "js/actividades.json",
        success: function(respuesta) {
    let contenido = "";
    let i = 1;


    for (let datos of respuesta) {
        contenido += "<div class='col-lg-3 col-md-6 col-sm-12 p-3'>";
        contenido += "<div class='card'>"
        contenido += "<img id='actividad_imagen" + i + "' src='images/" + datos.imagen + "' class='card-img-top' alt='" + datos.nombre + "';>";
        contenido += "</div>";
        contenido += "</div>";

        i++;
    }

    $("#actividades").html(contenido);
},
error: function(respuesta) {
    $("#modelos").prepend(`<div><strong>Error!</strong> No se pudo enviar los datos!</div>`);
}
});
};


cargarActividades(actividades);


$("#mostrarHor").click(() => {
    let contenido = "";

    contenido += "<section class='tablas__horarios'>"
    contenido += "<div class='tablas__divisor'>"
    contenido += "<h2 class='tabla__nombre'>Horarios Diciembre</h2>"
    contenido += "<table class='table align-middle table-bordered'>"
    contenido += "<thead>"
    contenido += "<tr>"
    contenido += "<th class='tabla__titulo' scope='col'>Lunes</th>"
    contenido += "<th class='tabla__titulo' scope='col'>Martes</th>"
    contenido += "<th class='tabla__titulo' scope='col'>Miercoles</th>"
    contenido += "<th class='tabla__titulo' scope='col'>Jueves</th>"
    contenido += "<th class='tabla__titulo' scope='col'>Viernes</th>"
    contenido += "</tr>"
    contenido += "</thead>"
    contenido += "<tbody>"
    contenido += "<tr>"
    contenido += "<td><p class='tabla__horario'></p><p class='tabla__actividad'></p></td>"
    contenido += "<td><p class='tabla__horario'>08:45</p><p class='tabla__actividad'>Yoga Multinivel</p></td>"
    contenido += "<td><p class='tabla__horario'>08:00</p><p class='tabla__actividad'>Ashtanga Yoga</p></td>"
    contenido += "<td><p class='tabla__horario'>08:45</p><p class='tabla__actividad'>Yoga Multinivel</p></td>"
    contenido += "<td><p class='tabla__horario'>08:00</p><p class='tabla__actividad'>Ashtanga Yoga</p></td>"
    contenido += "</tr>"
    contenido += "<tr>"
    contenido += "<td><p class='tabla__horario'>10:00</p><p class='tabla__actividad'>Yoga Integral</p></td>"
    contenido += "<td><p class='tabla__horario'>10:00</p><p class='tabla__actividad'>Hatha Yoga</p></td>"
    contenido += "<td><p class='tabla__horario'>10:00</p><p class='tabla__actividad'>Yoga Integral</p></td>"
    contenido += "<td><p class='tabla__horario'>10:00</p><p class='tabla__actividad'>Hatha Yoga</p></td>"
    contenido += "<td><p class='tabla__horario'></p><p class='tabla__actividad'></p></td>"
    contenido += "</tr>"
    contenido += "<tr>"
    contenido += "<td><p class='tabla__horario'>14:00</p><p class='tabla__actividad'>Yoga Integral</p></td>"
    contenido += "<td><p class='tabla__horario'>14:00</p><p class='tabla__actividad'>Vinyasa Yoga</p></td>"
    contenido += "<td><p class='tabla__horario'>14:00</p><p class='tabla__actividad'>Yoga Integral</p></td>"
    contenido += "<td><p class='tabla__horario'>14:00</p><p class='tabla__actividad'>Vinyasa Yoga</p></td>"
    contenido += "<td><p class='tabla__horario'></p><p class='tabla__actividad'></p></td>"
    contenido += "</tr>"
    contenido += "<tr>"
    contenido += "<td><p class='tabla__horario'>15:30</p><p class='tabla__actividad'>Vinyasa Yoga</p></td>"
    contenido += "<td><p class='tabla__horario'></p><p class='tabla__actividad'></p></td>"
    contenido += "<td><p class='tabla__horario'>15:30</p><p class='tabla__actividad'>Vinyasa Yoga</p></td>"
    contenido += "<td><p class='tabla__horario'></p><p class='tabla__actividad'></p></td>"
    contenido += "<td><p class='tabla__horario'></p><p class='tabla__actividad'></p></td>"
    contenido += "</tr>"
    contenido += "<tr>"
    contenido += "<td><p class='tabla__horario'>17:15</p><p class='tabla__actividad'>Ashtanga Yoga</p></td>"
    contenido += "<td><p class='tabla__horario'>17:30</p><p class='tabla__actividad'>Stretching</p></td>"
    contenido += "<td><p class='tabla__horario'>17:30</p><p class='tabla__actividad'>Taller Flexibilidad Suave</p></td>"
    contenido += "<td><p class='tabla__horario'>17:30</p><p class='tabla__actividad'>Stretching</p></td>"
    contenido += "<td><p class='tabla__horario'>17:00</p><p class='tabla__actividad'>Taller Flexibilidad Suave</p></td>"
    contenido += "</tr>"
    contenido += "<tr>"
    contenido += "<td><p class='tabla__horario'>18:30</p><p class='tabla__actividad'>Taller Flexibilidad Intermedio</p></td>"
    contenido += "<td><p class='tabla__horario'>19:00</p><p class='tabla__actividad'>Yoga Multinivel</p></td>"
    contenido += "<td><p class='tabla__horario'></p><p class='tabla__actividad'></p></td>"
    contenido += "<td><p class='tabla__horario'>19:00</p><p class='tabla__actividad'>Taller Flexibilidad Intermedio</p></td>"
    contenido += "<td><p class='tabla__horario'>19:00</p><p class='tabla__actividad'>Yoga Multinivel</p></td>"
    contenido += "</tr>"
    contenido += "<tr>"
    contenido += "<td><p class='tabla__horario'>20:00</p><p class='tabla__actividad'>Taller Flexibilidad Manija</p></td>"
    contenido += "<td><p class='tabla__horario'>20:30</p><p class='tabla__actividad'>Yoga Multinivel</p></td>"
    contenido += "<td><p class='tabla__horario'></p><p class='tabla__actividad'></p></td>"
    contenido += "<td><p class='tabla__horario'>20:00</p><p class='tabla__actividad'>Taller Flexibilidad Manija</p></td>"
    contenido += "<td><p class='tabla__horario'>20:30</p><p class='tabla__actividad'>Yoga Multinivel</p></td>"
    contenido += "</tr>"
    contenido += "</tbody>"
    contenido += "</table>"
    contenido += "</div>"

    $("#horarios").html(contenido);

});
$("#horarios").hide();
$("#mostrarHor").click(() => {
    $("#horarios").show(2000);
});
$("#ocultarHor").click(() => {
    $("#horarios").hide(2000);
});


$("#verForm").click(() => {
    $.ajax({
        method: "GET",
        url:  "js/actividades.json",
        success: function(respuesta) {
    let contenido = "";
    let i = 1;

    //TITULO FORMULARIO
    contenido += "<div id='formulario'>";
    contenido += "<div class='col-md-6 offset-md-3 py-3'>";
    contenido += "<h1><strong>Formulario de inscripción</strong></h1>";
    contenido += "</div>";
    contenido += "</div>";
    //SELECT DE ACTIVIDADES
    contenido += "<div class='d-flex flex-column text-center align-self-center'>";
    contenido += "<h2 class='text-center'><strong>Seleccione la actividad de interés</strong></h2>";
    contenido += "<select class='dropdown text-center' id='actividad_elegida'>";

    for (let datos of respuesta) {
        contenido += "<option value='" + datos.nombre + "'>" + datos.nombre + "</option>";

        i++;
    }
    contenido += "</select>";
    contenido += "</div>";
    //SELECT DE VECES Y TURNOS
    contenido += "<div class='d-flex flex-column text-center align-self-center'>";
    contenido += "<h2 class='text-center'><strong>Seleccione cantidad de clases y turno</strong></h2>";
    contenido += "<select class='dropdown text-center' id='horario_elegido'>";

    for (let cred of creditos) {
        contenido += "<option value='" + cred.cantidad + " - Turno " + cred.horario + " - $" + cred.importe + "'>" + cred.cantidad + " - Turno " + cred.horario + " - $" + cred.importe + "</option>";

        i++;
    }
    contenido += "</select>";
    contenido += "</div>";
    //FORMULARIO DE INSCRIPCION
    contenido += "<form id='form1' class='d-flex flex-column text-center align-self-center w-50'>"
    contenido += "<div class='mb-3'>"
    contenido += "<label for='nombre_cliente' class='form-label'>Nombre</label>"
    contenido += "<input type='text' class='form-control' id='nombre_cliente'>"
    contenido += "</div>"
    contenido += "<div class='mb-3'>"
    contenido += "<label for='email_cliente' class='form-label'>Email</label>"
    contenido += "<input type='text' class='form-control' id='email_cliente'>"
    contenido += "</div>"
    contenido += "<div class='mb-3'>"
    contenido += "<label for='telefono_cliente' class='form-label'>Teléfono</label>"
    contenido += "<input type='tel' class='form-control' id='telefono_cliente'>"
    contenido += "</div>"
    contenido += "</form>";

    //RESULTADO
    contenido += "<div id='resultado' class='align-self-center text-center w-50'>"
    contenido += "</div>"

    $("#formulario").html(contenido);

    $("#enviar_datos").show();
    $("#cargar_datos").show();
    $("#borrar_datos").show();
},
error: function(respuesta) {
    $("#modelos").prepend(`<div><strong>Error!</strong> No se pudo enviar los datos!</div>`);
}
});
});


// Asigno el evento click al boton Enviar Datos // Envia los datos de mi Formulario y los guarda en un LocalStorage
$("#enviar_datos").click(function enviarDatos() {

    var actividad = $("#actividad_elegida").val();
    var turno = $("#horario_elegido").val();
    var nombre = $("#nombre_cliente").val();
    var email = $("#email_cliente").val();
    var telefono = $("#telefono_cliente").val();


    if ((nombre == " ") || (nombre.length < 3)) {
        $("#resultado").html("<h4 class='text-white bg-danger p-3'>Error! El campo Nombre está vacío!</h4>");
        return false;
    }

    if ((email == " ") || (!email.includes("@"))) {
        $("#resultado").html("<h4 class='text-white bg-danger p-3 font-weight-bold'>Error! El campo Email está vacío!</h4>");
        return false;
    }
    if ((telefono == " ") || (telefono.length < 10)) {
        $("#resultado").html("<h4 class='text-white bg-danger p-3'>Error! El campo Teléfono debe tener 10 números!</h4>");
        return false;
    }

    localStorage.setItem("#datos_formulario", JSON.stringify([actividad, turno, nombre, email, telefono]));
    $("#resultado").html("<h4 class='text-white bg-success p-3'>Los datos se enviaron correctamente! Nuestro equipo se pondrá en contacto contigo para confirmar la inscripción y coordinar las clases! Muchas gracias!</h4>");
    console.log("Datos almacenados:" + `\n Actividad de interés: ${actividad} \n Modalidad: ${turno} \n Nombre: ${nombre} \n Email: ${email} \n Teléfono: ${telefono}`);

});

$("#cargar_datos").click(function cargarDatos() {
    var datos = JSON.parse(localStorage.getItem("#datos_formulario"));
    $("#actividad_elegida").val(datos[0]);
    $("#horario_elegido").val(datos[1]);
    $("#nombre_cliente").val(datos[2]);
    $("#email_cliente").val(datos[3]);
    $("#telefono_cliente").val(datos[4]);
    $("#resultado").html("<h4 class='text-white bg-primary p-3'>Los datos se cargaron correctamente!</h4>");
    console.log("Datos cargados en pantalla:" + datos);


});

$("#borrar_datos").click(function borrarDatos() {
    var datos = JSON.parse(localStorage.getItem("#datos_formulario"));
    console.log("Datos eliminados:" + datos);
    $("#actividad_elegida").val("");
    $("#horario_elegido").val("");
    $("#nombre_cliente").val("");
    $("#email_cliente").val("");
    $("#telefono_cliente").val("");
    localStorage.clear();
    $("#resultado").html("<h4 class='text-black bg-warning p-3'>Los datos se eliminaron correctamente!</h4>");
    

});