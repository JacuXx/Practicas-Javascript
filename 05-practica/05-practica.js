function calcularDias() {
    let mes = parseInt(document.getElementById("mes").value);
    let anio = parseInt(document.getElementById("anio").value);

    // Validaciones básicas
    if (isNaN(mes) || isNaN(anio) || mes < 1 || mes > 12 || anio < 0) {
      document.getElementById("resultado").innerHTML = "Por favor, ingresa un mes (1-12) y un año válidos.";
      document.getElementById("resultado").style.color = "red";
      return;
    }

    let dias;

    // Determinar días del mes
    switch (mes) {
      case 2:
        // Verificar si es año bisiesto
        if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
          dias = 29;
        } else {
          dias = 28;
        }
        break;
      case 4: case 6: case 9: case 11:
        dias = 30;
        break;
      default:
        dias = 31;
    }

    const nombresMeses = [
      "", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    document.getElementById("resultado").innerHTML = `${nombresMeses[mes]} de ${anio} tiene ${dias} días.`;
    document.getElementById("resultado").style.color = "purple";
  }