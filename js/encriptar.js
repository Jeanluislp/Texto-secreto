function encripatar(palabra) {
  var texto = palabra;
  var numcar = texto.length;
  var salida = "";
  var caracter;

  var i;
  for (i = 0; i < numcar; i++) {
    caracter = texto.charAt(i);
    if (caracter === "a" || caracter === "A"|| caracter === "á") {
      caracter = "ai";
    }

    if (caracter === "e" || caracter === "E"|| caracter === "é") {
      caracter = "enter";
    }
    if (caracter === "i" || caracter === "I"|| caracter === "í") {
      caracter = "imes";
    }
    if (caracter === "o" || caracter === "O"|| caracter === "ó") {
      caracter = "ober";
    }
    if (caracter === "u" || caracter === "U"|| caracter === "ú") {
      caracter = "ufat";
    }
    salida = salida + caracter;
  }
  return salida;
}
