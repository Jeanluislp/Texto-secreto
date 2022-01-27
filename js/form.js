var botonencriptar = document.querySelector("#btn-encriptar");
botonencriptar.addEventListener("click", function (event) {
  event.preventDefault();

  var texto = document.getElementById("input-texto").value;

  var resultado = encripatar(texto);

  document.getElementById("msg").value = resultado;
});

var botondesencriptar = document.querySelector("#btn-desencriptar");

botondesencriptar.addEventListener("click", function (event) {
  event.preventDefault();

  var texto = document.getElementById("input-texto").value;
  var resultado = desencriptar(texto);
  document.getElementById("msg").value = resultado;
});

function agrandarcuadrito(elemento) {
  const textarea = document.querySelector(elemento);

  textarea.addEventListener("keyup", (e) => {
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
  });
}

agrandarcuadrito("#input-texto");
agrandarcuadrito("#msg");
