function sumar() {
    // Obtener los valores de los inputs
    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);

    // Validar que se ingresaron números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
      document.getElementById("resultado").innerHTML = "Por favor, ingresa números válidos.";
      document.getElementById("resultado").style.color = "red";
    } else {
      let suma = numero1 + numero2;
      // Mostrar el resultado usando innerHTML
      document.getElementById("resultado").innerHTML = "Resultado: " + suma;
      document.getElementById("resultado").style.color = "blue";
    }
  }