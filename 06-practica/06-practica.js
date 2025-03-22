function calcularOperacion() {
    let operacion = document.getElementById("operacion").value;

    try {
      // Usamos eval() para calcular la operación
      let resultado = eval(operacion);

      // Verificamos que el resultado sea un número
      if (isNaN(resultado)) {
        throw new Error("Operación no válida.");
      }

      document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
      document.getElementById("resultado").style.color = "green";
    } catch (error) {
      document.getElementById("resultado").innerHTML = "Error: operación no válida.";
      document.getElementById("resultado").style.color = "red";
    }
  }