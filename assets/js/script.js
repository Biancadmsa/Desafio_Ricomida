
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
// Tooltip: Incluir un botón "Enviar por correo" con un tooltip aplicado

$("#enviarCorreo").click(function () {
  alert("El correo fue enviado correctamente...");
});
// cambiar de color al hacer doble click
$(".ingredientes h3").on("dblclick", function () {
  $(this).css("color", "red");
});


 // Seleccionar el elemento padre (div.card) y usar toggle para mostrar/ocultar
$('.card-title').click(function() {
  $(this).closest('.card').find('.card-text').toggle();
});