// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el div que abre el modal
var divTrigger = document.getElementById("myDiv");

// Obtener el span que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en el div, abrir el modal
divTrigger.onclick = function() {
  modal.style.display = "block";
}

// Cuando se hace clic en la "X", cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando se hace clic fuera del modal, cerrar el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
