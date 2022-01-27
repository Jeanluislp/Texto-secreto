function desencriptar(letras) {
  var texto = letras;

  var salida_a = texto.replace(/ai/g, "a");
  var salida_e = salida_a.replace(/enter/g, "e");
  var salida_i = salida_e.replace(/imes/g, "i");
  var salida_o = salida_i.replace(/ober/g, "o");
  var salida_u = salida_o.replace(/ufat/g, "u");

  var desencriptar = salida_u;

  return desencriptar;
}
