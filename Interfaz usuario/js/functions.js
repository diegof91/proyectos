$(document).ready(init);

function init() {
  precargarDatos();
  $("#loginUser").hide();
  $("#loginAdmin").hide();
  $("#userGest").hide();
  $("#adminGest").hide();
  $("a#usuario").click(pagIngresoSocios);
  $("a#administrador").click(pagIngresoAdmin);
  $("a#linkRegistroUser").click(pagRegistro);
  $("a#cerrarSesion").click(pagCerrarSesion);
  $("#ingresoUser").click(ingresoSocio);
  $("#ingresoAdmin").click(ingresoAdmin);
  $("#registrarUsuario").click(guardarRegistro);
  $("#cambiarContraUs").click(cambiarContra);
  $("#crearNuevoEquipo").click(crearEquipo);
  $("#seleccionarEquipos").hide();
  $("#queHacerEq").change(abandonarAsignarseEquipo);
  $("#asignarseEq").click(asignarseEquipo);
  $("#crearCompetencia").click(crearCompetencia);
  $("#estadoSocio").change(mostrarSocioHabDes);
  $("#socioSel").hide();
  $("#confirmarEstado").click(estadoSocio);
  $("#divSelCompetencias").hide();
  $("#cargarEnSelect").click(cargarCompetenciasSel);
  $("#inscribir").click(inscribirEquipoCompetencia);
  $("#cargarCompetenciasAbiertas").click(mostrarCompetencias);
  $("#btnReporteSocio").click(reporteSocio);
  $("#btnFinalizarReporteSocio").click(btnFinalizarReporte);
  $("#btnFinalizarReporteSocio").hide();
  $("#divMostrarCompetencias").hide();
  $("#finalizarReporteComp").hide();
  $("#finalizarReporteComp").click(finalizarReporteComp);
  $("#tablaSocios").hide();
  $("#divEquiposComponenCompetencia").hide();
  $("#btnConfirmarIngreso").click(confirmarIngreso);
  $("#competenciasAdmin").change(mostrarEquiposCompetencia);
  $("#btnConfirmarIngreso").hide();
  $("#selEquiposCompetencia").change(cargarSociosDatos);
  $("#ingresarDatos").click(guardarSociosDatos);
  $("#finalizarIngresoDatos").click(tablaCompetencia);
  $("#btnCargarEquiposReporte").click(cargarEquiposRep);
  $("#divSelectEquiposReporte").hide();
  $("#divTablaEquipo").hide();
  $("#obtenerReporte").click(reporteEquipo);
  $("#cerrarReporte").hide();
  $("#cerrarReporte").click(cerrarReporteEquipo);
}
var socioActivo = "";

function pagIngresoSocios() {
  $("#registro").hide();
  $("#loginUser").show();
  $("#loginAdmin").hide();
  $("#userGest").hide();
  $("#adminGest").hide();
}

function pagCerrarSesion() {
  $("#registro").hide();
  $("#loginUser").hide();
  $("#loginAdmin").hide();
  $("#userGest").hide();
  $("#adminGest").hide();
  socioActivo = "";
  $(txtSocioActivo).html(socioActivo);
}

function pagRegistro() {
  $("#registro").show();
  $("#loginUser").hide();
  $("#loginAdmin").hide();
  $("#userGest").hide();
  $("#adminGest").hide();
}

function pagIngresoAdmin() {
  $("#registro").hide();
  $("#loginUser").hide();
  $("#loginAdmin").show();
  $("#userGest").hide();
  $("#adminGest").hide();
}

function ingresoSocio() {
  var mailIng = $("#emailIngreso").val();
  var contraIng = $("#contraIngreso").val();
  var socio = buscarSocio(mailIng);
  if (socio == null || socio.contrasenia != contraIng) {
    alert("Los datos ingresados no coinciden con ningun socio");
  } else if (socio.contrasenia == contraIng) {
    $("#userGest").show();
    $("#loginUser").hide();
    socioActivo = socio;
    $(txtSocioActivo).html("Socio activo: " + socioActivo.nombre);
  }
}

function ingresoAdmin() {
  var emailAdmin = $("#nombreAdmin").val();
  var contraAdmin = $("#contraAdmin").val();
  var admin = buscarAdmin(emailAdmin);
  if (admin == null || admin.email != emailAdmin || admin.contrasenia != contraAdmin)
    alert("Los datos ingresados no coinciden con ningun administrador");
  else if (admin.contrasenia == contraAdmin) {
    $("#adminGest").show();
    $("#loginAdmin").hide();
    socioActivo = "";
    $(txtSocioActivo).html(socioActivo);
    $(txtSocioActivo).html("Administrador: " + admin.nombre);
  }
}

function buscarAdmin(email) {
  var i = 0;
  while (i < vecAdministradores.length && vecAdministradores[i].email != email) {
    i++
  }
  if (i < vecAdministradores.length)
    return vecAdministradores[i];
  else
    return null;
}

function guardarRegistro() {
  var nombre = $("#nombre").val();
  var mail = $("#mail").val();
  var contraseña = $("#contraseña").val();
  var repContra = $("#repContra").val();
  if (agregarUsuario(nombre, mail, contraseña, repContra, ) == true) {
    alert("Ingresado");
    $("#loginUser").show();
    $("#registro").hide();
  } else
    alert("No ingresado");
}

function agregarUsuario(nom, mail, contra, repContra) {
  var vectorAdmin = buscarAdmin()
  if (buscarSocio(mail) == null && validarContra(contra, repContra) == true &&
    nom.length > 2 && mail.length > 2 && buscarAdmin(mail) == null) {
    vecSocios.push({
      nombre: nom,
      email: mail,
      contrasenia: contra,
      competencias: [],
      estado: true
    });
    return true;
  } else
    return false;
}

function buscarSocio(mail) {
  var i = 0;
  while (i < vecSocios.length && vecSocios[i].email != mail) {
    i++
  }
  if (i < vecSocios.length) {
    return vecSocios[i];
  } else
    return null;
}

// function validarContra(contra, repContra) {
//   var resultado = true;
//   if (contra.length >= 2) {
//     var mayuscula = false;
//     var minuscula = false;
//     var numero = false;
//     for (var i = 0; i < contra.length; i++) {
//
//       if (contra.charCodeAt(i) >= 65 && contra.charCodeAt(i) <= 90)
//         mayuscula = true;
//
//       if (contra.charCodeAt(i) >= 97 && contra.charCodeAt(i) <= 122)
//         minuscula = true;
//
//       if (contra.charCodeAt(i) >= 48 && contra.charCodeAt(i) <= 57)
//         numero = true;
//     }
//   }
//   if (mayuscula === true || minuscula === true && numero === true)
//     resultado = true;
//   else
//     resultado = false;
//   if (contra !== repContra)
//     resultado = false;
//   return resultado;
// }

//ESTA FUNCION VALIDABA LA Contraseña CON STRINGS
function validarContra(contra, repContra) {
  var resultado = true;
  if (contra.length < 2) {
    resultado = false;
  }
  if (contra != repContra) {
    resultado = false;
  }
  var nums = "0123456789";
  var letrasMin = "abcdefghijklmnñopqrstuvwxyz";
  var letrasMay = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var i = 0;
  var x = 0;
  var coincide = false;
  while (i < contra.length && coincide == false) {
    x = 0;
    while (x < nums.length && contra.charAt(i) != nums.charAt(x)) {
      x++;
      if (contra.charAt(i) == nums.charAt(x))
        coincide = true;
    }
    i++
  }
  if (coincide == false) {
    resultado = false;
  }
  coincide = false;
  i = 0;
  while (i < contra.length && coincide == false) {
    x = 0;
    while (x < letrasMin.length && contra.charAt(i) != letrasMin.charAt(x) &&
      contra.charAt(i) != letrasMay.charAt(x)) {
      x++
      if (contra.charAt(i) == letrasMin.charAt(x) || contra.charAt(i) == letrasMay.charAt(x))
        coincide = true;
    }
    i++
  }
  if (coincide == false)
    resultado = false;
  return resultado;
}

function cambiarContra() {
  var contraNueva = $("#contrNueva").val();
  var repContraNueva = $("#repContraNueva").val();
  if (validarContra(contraNueva, repContraNueva) == true) {
    socioActivo.contrasenia = contraNueva;
    alert("Contraseña cambiada");
  } else
    alert("Debe contener mínimo un número, una letra y coincidir");
}

function crearEquipo() {
  var imgLogo = $(":file").val();
  var imgLogoSinRuta = imgLogo.substring(imgLogo.lastIndexOf("\\"));
  var nombreEquipo = $("#nombreEquipo").val();
  var nombreArreglado = "";
  var mayus = nombreEquipo.charAt(0).toUpperCase();
  nombreArreglado += mayus;
  for (var i = 1; i < nombreEquipo.length; i++) {
    nombreArreglado += nombreEquipo[i].toLowerCase();
  }
  nombreEquipo = nombreArreglado;
  if (agregarEquipo(nombreEquipo, imgLogoSinRuta) == true) {
    alert("Equipo creado:  " + nombreEquipo);
  }
}

function agregarEquipo(nombreEq, imgLogo) {
  var equipo = buscarEquipos(nombreEq);
  var socio = buscarEquipoPorSocio(socioActivo.email);
  if (equipo == null && validarDatosEq(nombreEq, imgLogo) == true && socio == false) {
    vecEquipos.push({
      nombre: nombreEq,
      socios: [socioActivo.email],
      imgLogo: imgLogo,
      competencias: []
    })
    return true;
  }
  if (equipo != null) {
    alert("El nombre ingresado ya existe");
  }
  if (socio != false) {
    alert("El socio ya pertenece a un equipo");
  }
}

function buscarEquipos(nombreEq) {
  var i = 0;
  while (i < vecEquipos.length && vecEquipos[i].nombre != nombreEq) {
    i++;
  }
  if (i < vecEquipos.length)
    return vecEquipos[i];
  else
    return null;
}

//ESTA FUNCION VALIDABA LOS DATOS DEL EQUIPO CON STRINGS
function validarDatosEq(nombreEq, imgLogo) {
  var resultado = true;
  if (nombreEq.length < 2) {
    resultado = false;
    alert("El nombre debe contener al menos dos letras");
  }
  if (imgLogo == "") {
    resultado = false;
    alert("No seleccionaste  Logo");
  }
  var letrasMay = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var letras = "abcdefghijklmnñopqrstuvwxyz";
  var esLetra = true;
  var i = 0;
  var x = 0;
  while (i < nombreEq.length && esLetra == true) {
    x = 0;
    while (x < letras.length && nombreEq.charAt(i) != letras.charAt(x) &&
      nombreEq.charAt(i) != letrasMay.charAt(x)) {
      x++;
    }

    if (x < letras.length || nombreEq.charAt(i) == 32)
      i++;
    else {
      esLetra = false;
      resultado = false;
      alert("El nombre solo debe contener letras");
    }
  }
  return resultado;
}



function buscarEquipoPorSocio(socio) {
  var i = 0;
  var x = 0;
  pertenece = false;
  while (i < vecEquipos.length && pertenece == false) {
    x = 0;
    while (x < vecEquipos[i].socios.length && vecEquipos[i].socios[x] != socio) {
      x++
    }
    if (vecEquipos[i].socios[x] == socio){
      return vecEquipos[i];
      pertenece=true;}
    i++
  }
  return pertenece;
}

function mostrarEquipos() {
  var select = "";
  for (var i = 0; i < vecEquipos.length; i++) {
    select += "<option value=" +
      vecEquipos[i].nombre + ">" + vecEquipos[i].nombre + "</option>";
  }
  return select;
}

function abandonarAsignarseEquipo() {
  var opcion = $("#queHacerEq").val();
  $("#selEquipos").html(mostrarEquipos());
  if (opcion == "asignarse")
    $("#seleccionarEquipos").show();
  else if (opcion == "abandonarEquipo")
    $("#seleccionarEquipos").hide();
}

function asignarseEquipo() {
  var opcion = $("#queHacerEq").val();
  var equipoSel = $("#selEquipos").val();
  if (opcion == "asignarse") {
    var equipo = buscarEquipos(equipoSel);
    if (equipo.socios.length < 3 && buscarEquipoPorSocio(socioActivo.email) == false) {
      equipo.socios.push(socioActivo.email);
      alert("Te uniste al equipo: " + equipo.nombre);
    } else {
      alert("No puedes ingresar, ya está completo o ya perteneces a un equipo.");
    }
  }
  if (opcion == "abandonarEquipo") {
    var equipo = buscarEquipoPorSocio(socioActivo.email);
    if (competenciaActiva(equipo) == true) {
      alert("El equipo está en una competencia sin finalizar");
    } else {
      var aux = salirEquipo(equipo.socios, socioActivo.email);
      equipo.socios = aux;
      alert("Saliste del equipo: " + equipo.nombre);
    }
    if (equipo == false) {
      alert("No perteneces a ningun equipo");
    }
  }
}
//FUNCION PARA QUE SOCIO NO PUEDA ABANDONAR EQUIPO SI LA COMPETENCIA NO FINALIZO
function competenciaActiva(eqPerteneceSocio) {
  var competenciaActiva = false
  var i = 0;
  var x = 0;
  while (i < vecCompetencia.length && competenciaActiva == false) {
    for (var x = 0; x < vecCompetencia[i].equipos.length; x++) {
      if (eqPerteneceSocio.nombre == vecCompetencia[i].equipos[x].nombre) {
        if (vecCompetencia[i].estadoON == true)
          competenciaActiva = true;
      }
    }
    i++
  }
  return competenciaActiva;
}

function salirEquipo(sociosEq, socio) {
  vecAux = [];
  for (var i = 0; i < sociosEq.length; i++) {
    if (sociosEq[i] != socio)
      vecAux.push(sociosEq[i]);
  }
  return vecAux;
}

function crearCompetencia() {
  var nombreComp = $("#nombreCompetencia").val();
    if (buscarCompetencia(nombreComp) == null) {
      vecCompetencia.push({
        nombre: nombreComp,
        estadoON: true,
        equipos: []
      });
      alert("Competencia creada: " + nombreComp);
    } else
      alert("El nombre de la competencia ya existe");
}



function buscarCompetencia(nombre) {
  var i = 0;
  while (i < vecCompetencia.length && vecCompetencia[i].nombre != nombre) {
    i++
  }
  if (i < vecCompetencia.length)
    return vecCompetencia[i];
  else
    return null;
}

function mostrarSocioHabDes() {
  var opcion = $("#estadoSocio").val();
  var select = "";
  $("#socioSel").show();
  var i = 0;
  if (opcion == 'habilitado') {
    for (i = 0; i < vecSocios.length; i++) {
      if (vecSocios[i].estado == false)
        select += "<option value=" + vecSocios[i].email + ">" + vecSocios[i].email + "</option>";
    }
    $("#socioSel").html(select);
  } else if (opcion == "inhabilitado") {
    for (i = 0; i < vecSocios.length; i++) {
      if (vecSocios[i].estado == true)
        select += "<option value=" + vecSocios[i].email + ">" + vecSocios[i].email + "</option>";
    }
    $("#socioSel").html(select);
  }
}

function estadoSocio() {
  var opcion = $("#estadoSocio").val();
  var socioEmail = $("#socioSel").val();
  var vecSocio = buscarSocio(socioEmail);
  if (opcion == "habilitado") {
    vecSocio.estado = true;
    alert("El socio: " + vecSocio.email + " fue habilitado");
  } else {
    vecSocio.estado = false;
    alert("El socio: " + vecSocio.email + " fue inhabilitado");
  }
}

function cargarCompetenciasSel() {
  $("#competencias").html(cargarCompetencias());
  $("#divSelCompetencias").show();
}

function cargarCompetencias() {
  var selectComp = "<option>Seleccione una competencia</option>";
  for (var i = 0; i < vecCompetencia.length; i++) {
    if (vecCompetencia[i].estadoON == true)
      selectComp += "<option value=" + vecCompetencia[i].nombre + ">" + vecCompetencia[i].nombre + "</option>";
  }
  return selectComp;
}

function inscribirEquipoCompetencia() {
  var competenciaSel = $("#competencias").val();
  if (competenciaSel != null) {
    var laCompetencia = buscarCompetencia(competenciaSel);
    var equipo = buscarEquipoPorSocio(socioActivo.email);
    if (equipo.socios.length === 3 && verificarEquipo(equipo) == true && perteneceAcompetencia(equipo, laCompetencia) == false) {
      laCompetencia.equipos.push(equipo);
      alert("Inscribiste al equipo: " + equipo.nombre + ", a competencia: " + competenciaSel);
    }
    if (equipo.socios.length < 3) {
      alert("El equipo no cuenta con TRES socios");
    }
    $("#divSelCompetencias").hide();
    $("#cargarCompetenciasAbiertas").hide();
  }
}
// verifica que el equipo no se inscriba a una misma competencia da error el  competencia.equipos[i].nombre
function perteneceAcompetencia(equipo, competencia) {
  var pertenece = false;
  for (var i = 0; i < competencia.equipos.length; i++) {
    if (competencia.equipos[i].nombre == equipo.nombre) {
      pertenece = true;
      alert("El equipo ya esta inscripto en esta competencia");
    }
  }
  return pertenece;

}
//verifica que los 3 socios esten habilitados para poder inscribirse a competencia
function verificarEquipo(equipo) {
  var i = 0;
  estadoEquipo = true;
  while (i < equipo.socios.length && estadoEquipo == true) {
    var socio = buscarSocio(equipo.socios[i]);
    if (socio.estado != false)
      i++
    else {
      estadoEquipo = false;
      alert("El equipo no tiene tres socios HABILITADOS");
    }
  }
  return estadoEquipo;
}

function mostrarCompetencias() {
  $("#divMostrarCompetencias").show();
  $("#competenciasAdmin").html(cargarCompetencias());
}

function mostrarEquiposCompetencia() {
  $("#btnConfirmarIngreso").show();
  var competencia = $("#competenciasAdmin").val();
  var laCompetencia = buscarCompetencia(competencia);
  var select = "<option>Seleccione un equipo</option>"
  for (var i = 0; i < laCompetencia.equipos.length; i++) {
    select += "<option value=" + laCompetencia.equipos[i].nombre + ">" +
      laCompetencia.equipos[i].nombre + "</option>";
  }
  $("#selEquiposCompetencia").html(select);
}

//confirma que la competencia finalizó y el admin quiere ingresar los datos.
//cambia el estado de la competencia a finalizada para que no puedan ingresar mas equipos.
function confirmarIngreso() {
  var compSelecIngresoDatos = $('#competenciasAdmin').val();
  var compSelecIngresoDatos = buscarCompetencia(compSelecIngresoDatos);
  if (compSelecIngresoDatos.equipos.length > 1) {
    $("#divEquiposComponenCompetencia").show();
    $("#divMostrarCompetencias").hide();
    $("#cargarCompetenciasAbiertas").hide();
    compSelecIngresoDatos.estadoON = false;
    $("#txtCompSelecIngresoDatos").html("Competencia: " + compSelecIngresoDatos.nombre);
  } else {
    alert("La competencia no está completa");
  }
}

function cargarSociosDatos() {
  $("#tablaSocios").show();
  var equipo = $("#selEquiposCompetencia").val();
  var elEquipo = buscarEquipos(equipo);
  $("#socio1").html(elEquipo.socios[0]);
  $("#socio2").html(elEquipo.socios[1]);
  $("#socio3").html(elEquipo.socios[2]);
}
//variables globales para poder ordenar todos los equipos y socios con tablaSocioReporte
//contador para que se ingresen datos a todos los equipos de la competencia
var vecAuxTablaSocios = [];
var vecAuxTablaEquipos = [];
var contEquipos = 0;

function guardarSociosDatos() {
  var equipo = $("#selEquiposCompetencia").val();
  var elEquipo = buscarEquipos(equipo);
  var competencia = $("#competenciasAdmin").val();
  var mtsSocio1 = parseInt($("#metrosSocio1").val());
  var mtsSocio2 = parseInt($("#metrosSocio2").val());
  var mtsSocio3 = parseInt($("#metrosSocio3").val());
  var datosYaIngresados = buscarCompetenciaEnEquipo(elEquipo, competencia);
  if (datosYaIngresados == false) {
    if ((mtsSocio1 % 50 == 0 && mtsSocio1 > 0) && (mtsSocio2 % 50 == 0 && mtsSocio2 > 0) && (mtsSocio3 % 25 == 0 && mtsSocio3 > 0)) {
      var elSocio1 = buscarSocio(elEquipo.socios[0]);
      elSocio1.competencias.push({
        nombre: competencia,
        metros: mtsSocio1
      })
      vecAuxTablaSocios.push({
        nombre: elSocio1.email,
        metros: mtsSocio1
      });
      var elSocio2 = buscarSocio(elEquipo.socios[1]);
      elSocio2.competencias.push({
        nombre: competencia,
        metros: mtsSocio2
      })
      vecAuxTablaSocios.push({
        nombre: elSocio2.email,
        metros: mtsSocio2
      });
      var elSocio3 = buscarSocio(elEquipo.socios[2]);
      elSocio3.competencias.push({
        nombre: competencia,
        metros: mtsSocio3
      })
      var metrosTotales = mtsSocio1 + mtsSocio2 + mtsSocio3;
      var laCompetencia = buscarCompetencia(competencia);
      elEquipo.competencias.push({
        nombre: competencia,
        metrosTotales: metrosTotales
      })
      vecAuxTablaSocios.push({
        nombre: elSocio3.email,
        metros: mtsSocio3
      });
      vecAuxTablaEquipos.push({
        nombreEq: elEquipo.nombre,
        metros: metrosTotales
      });
      alert("Los metros fueron ingresados correctamente");
      contEquipos++;
    } else
      alert("Los datos ingresados no son correctos o faltan datos");
  } else {
    alert("Los datos a este equipo ya fueron ingresados");
  }
}
//Verifica si ya se ingresaron los datos a este equipo en la competencia
function buscarCompetenciaEnEquipo(eq, comp) {
  var i = 0;
  datosYaIngresados = false;
  while (i < eq.competencias.length && eq.competencias[i].nombre != comp) {
    i++
  }
  if (i < eq.competencias.length)
    datosYaIngresados = true;
  return datosYaIngresados;
}

function tablaCompetencia() {
  var competencia = $("#competenciasAdmin").val();
  var laCompetencia = buscarCompetencia(competencia);
  if (contEquipos < laCompetencia.equipos.length) {
    alert("Quedan equipos sin ingresar datos");
  } else {
    vecAuxTablaSocios.sort(ordenarDescendeteMetros);
    vecAuxTablaEquipos.sort(ordenarDescendeteMetros);

    var tablaFinalizarCompSocios = "<table><thead><tr><th>Socio</th><th>Metros</th></tr></thead>";
    var tablaFinalizarCompEquipos = "<table><thead><tr><th>Equipo</th><th>Metros</th></tr></thead>";

    for (var i = 0; i < vecAuxTablaSocios.length; i++) {
      tablaFinalizarCompSocios += "<tr><td>" + vecAuxTablaSocios[i].nombre + "</td>" +
        " <td>" + vecAuxTablaSocios[i].metros + "</td>" +
        "</tr>";
    }
    for (var i = 0; i < vecAuxTablaEquipos.length; i++) {
      tablaFinalizarCompEquipos += "<tr><td>" + vecAuxTablaEquipos[i].nombreEq + "</td>" +
        " <td>" + vecAuxTablaEquipos[i].metros + "</td>" +
        "</tr>";
    }
    tablaFinalizarCompSocios += "</table>";
    tablaFinalizarCompEquipos += "</table>";
    vecAuxTablaSocios = [];
    vecAuxTablaEquipos = [];
    contEquipos = 0;
    $("#divTablaFinalizarCompSocios").html(tablaFinalizarCompSocios);
    $("#divTablaFinalizarCompEquipos").html(tablaFinalizarCompEquipos);
    $("#finalizarReporteComp").show();
    $("#tablaSocios").hide();
    $("#divEquiposComponenCompetencia").hide();
    $("#divTablaFinalizarCompSocios").show();
    $("#divTablaFinalizarCompEquipos").show();

  }
}

function finalizarReporteComp() {
  $("#divTablaFinalizarComp").hide();
  $("#finalizarReporteComp").hide();
  $("#cargarCompetenciasAbiertas").show();
  $("#divTablaFinalizarCompSocios").hide();
  $("#divTablaFinalizarCompEquipos").hide();
}

function ordenarDescendeteMetros(elem1, elem2) {
  if (elem1.metros > elem2.metros)
    return -1;
  if (elem1.metros < elem2.metros)
    return 1;
  if (elem1.metros == elem2.metros)
    return 0;
}

function reporteSocio() {
  var tablaReporte = "<table><thead><tr><th>Competencia</th><th>Metros</th></tr></thead>";

  for (var i = 0; i < socioActivo.competencias.length; i++) {
    tablaReporte += "<tr><td>" + socioActivo.competencias[i].nombre + "</td>" +
      " <td>" + socioActivo.competencias[i].metros + "</td>" +
      "</tr>";
  }
  tablaReporte += "</table>";
  $("#tablaSocioReporte").show();
  $('#tablaSocioReporte').html(tablaReporte);
  $("#btnFinalizarReporteSocio").show();
  $("#btnReporteSocio").hide();
}

function btnFinalizarReporte() {
  $("#btnReporteSocio").show();
  $("#btnFinalizarReporteSocio").hide();
  $("#tablaSocioReporte").hide();

}

function cargarEquiposRep() {
  $("#divSelectEquiposReporte").show();
  $("#selEquiposAdminReporte").html(mostrarEquipos());

}

function reporteEquipo() {
  var tablaEquipoCompYMts = "<table><thead><tr><th>Competencias</th><th>Metros Totales </th></tr></thead>";
  var tablaEquipoSocios = "<table><thead><tr><th>Socios</th></tr></thead>";
  var equipo = $("#selEquiposAdminReporte").val();
  var elEquipo = buscarEquipos(equipo);

  for (var i = 0; i < elEquipo.competencias.length; i++) {
    tablaEquipoCompYMts += "<tr><td>" + elEquipo.competencias[i].nombre + "</td>" +
      " <td>" + elEquipo.competencias[i].metrosTotales + "</td>" +
      "</tr>";
  }
  for (var i = 0; i < elEquipo.socios.length; i++) {
    tablaEquipoSocios += "<tr><td>" + elEquipo.socios[i] + "</td>" + "</tr>";
  }
  var tablaEquipoimgLogo = "<img src=img/" + elEquipo.imgLogo + ">";
  tablaEquipoCompYMts += "</table>";
  $("#tablaEquipoReporteParteA").html(tablaEquipoCompYMts);
  tablaEquipoSocios += "</table>";
  $("#tablaEquipoReporteParteB").html(tablaEquipoSocios);
  tablaEquipoimgLogo += "</table>";
  $("#tablaEquipoReporteParteC").html(tablaEquipoimgLogo);
  $("#divTablaEquipo").show();
  $("#cerrarReporte").show();
  $('btnCargarEquiposReporte').hide();
}

function cerrarReporteEquipo() {
  $("#divSelectEquiposReporte").hide();
  $('btnCargarEquiposReporte').show();
  $('divSelectEquiposReporte').hide();
  $("#divTablaEquipo").hide();
  $("#cerrarReporte").hide();
}
