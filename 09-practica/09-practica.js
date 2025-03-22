function generarTabla(numero) {
    let html = `<table><tr><th colspan="2">Tabla del ${numero}</th></tr>`;
    for (let i = 1; i <= 10; i++) {
      html += `<tr><td>${numero} x ${i}</td><td>${numero * i}</td></tr>`;
    }
    html += `</table><br>`;
    return html;
  }

  function mostrarTablas() {
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    const contenedor = document.getElementById("resultado");

    if (isNaN(n1) || isNaN(n2) || n1 < 1 || n2 > 10 || n1 > n2) {
      contenedor.innerHTML = "<p style='color:red'>Por favor, ingresa números del 1 al 10, y asegúrate de que el primero sea menor o igual al segundo.</p>";
      return;
    }

    let resultadoHTML = "";
    for (let i = n1; i <= n2; i++) {
      resultadoHTML += generarTabla(i);
    }

    contenedor.innerHTML = resultadoHTML;
  }