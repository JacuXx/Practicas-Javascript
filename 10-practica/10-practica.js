function mostrarTabla() {
    const numero = parseInt(document.getElementById("numero").value);
    const limite = parseInt(document.getElementById("limite").value);
    const contenedor = document.getElementById("resultado");

    if (isNaN(numero) || isNaN(limite) || limite < 1) {
      contenedor.innerHTML = "<p style='color:red'>Por favor, ingresa un número válido y un límite mayor que 0.</p>";
      return;
    }

    let tablaHTML = "<table>";
    for (let i = 1; i <= limite; i++) {
      tablaHTML += `<tr>
                      <td>${numero} x ${i}</td>
                      <td>=</td>
                      <td>${numero * i}</td>
                    </tr>`;
    }
    tablaHTML += "</table>";

    contenedor.innerHTML = tablaHTML;
  }