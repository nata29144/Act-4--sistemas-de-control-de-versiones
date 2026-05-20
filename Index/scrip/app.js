const formulario = document.getElementById("formulario");
const listaHistorias = document.getElementById("listaHistorias");

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;

  const item = document.createElement("li");
  item.innerHTML = `<strong>${titulo}</strong><br>${descripcion}`;

  listaHistorias.appendChild(item);

  formulario.reset();
});