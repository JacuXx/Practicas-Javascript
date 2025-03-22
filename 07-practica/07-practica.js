function calcularIMC() {
    const altura = parseInt(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const edad = parseInt(document.getElementById("edad").value);
    const sexo = document.getElementById("sexo").value;

    // Validación básica
    if (!altura || isNaN(peso) || isNaN(edad) || !sexo) {
      document.getElementById("resultado").innerHTML = "Por favor, completa todos los campos.";
      document.getElementById("resultado").style.color = "red";
      return;
    }

    // Cálculo del IMC
    const alturaEnMetros = altura / 100;
    const imc = peso / (alturaEnMetros * alturaEnMetros);
    let clasificacion = "";

    if (imc < 18.5) {
      clasificacion = "Bajo de peso";
    } else if (imc >= 18.5 && imc < 25) {
      clasificacion = "Normal";
    } else if (imc >= 25 && imc < 30) {
      clasificacion = "Sobrepeso";
    } else {
      clasificacion = "Obesidad";
    }

    document.getElementById("resultado").innerHTML = 
      `Tu IMC es ${imc.toFixed(2)}. Clasificación: ${clasificacion}.`;
    document.getElementById("resultado").style.color = "darkgreen";
  }