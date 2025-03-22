function ordenarNumeros() {
    // Obtener los valores de los inputs
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let n3 = parseFloat(document.getElementById("num3").value);

    // Validar que sean números
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      document.getElementById("resultado").innerHTML = "Por favor, ingresa los tres números.";
      document.getElementById("resultado").style.color = "red";
      return;
    }

    // Ordenar los números en un arreglo
    let numeros = [n1, n2, n3];
    numeros.sort(function(a, b) { return a - b; }); // Ordenar de menor a mayor

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = "Orden: " + numeros.join(", ");
    document.getElementById("resultado").style.color = "green";
  }