function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor convertido é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);
  var valorEmReal = valorEmEuroNumerico * 6;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor convertido é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}