function Converter() {
    let valorElemento = document.getElementById("valor").value;
    let grausC = parseFloat(valorElemento);
    let grausF = (grausC * 9/5) + 32;

    let elemento = document.getElementById("valorConvertidoF");
    let valorConv = (`${grausC} Celsius é equivalente a ${grausF} Fahreinheint`);
    elemento.innerHTML = valorConv;
  }

  function ConverterK() {
      let grausC = document.getElementById("valor").value;
      let grausK = parseFloat(grausC) + 273.15;
      let elemento2 = document.getElementById("valorConvertidoK");
      let tempConvertida = (`${grausC} Celsius é equivalente a ${grausK} Kelvin`);
      elemento2.innerHTML = tempConvertida;
}