function calcularEdad() {
    let anioNacimiento = parseInt(document.getElementById("anio").value);
    let anioActual = new Date().getFullYear();

    if (isNaN(anioNacimiento) || anioNacimiento > anioActual || anioNacimiento < 1900) {
      document.getElementById("resultado").innerHTML = "Por favor, ingresa un año válido.";
      document.getElementById("resultado").style.color = "red";
      return;
    }

    let edad = anioActual - anioNacimiento;
    let categoria = "";

    if (edad < 12) {
      categoria = "NIÑEZ";
    } else if (edad >= 12 && edad <= 17) {
      categoria = "ADOLESCENTE";
    } else if (edad >= 18 && edad <= 59) {
      categoria = "ADULTO";
    } else {
      categoria = "ADULTO MAYOR";
    }

    document.getElementById("resultado").innerHTML = `Tienes ${edad} años. Categoría: ${categoria}`;
    document.getElementById("resultado").style.color = "darkblue";
  }