function dibujarRombo() {
    let d = parseInt(document.getElementById("diametro").value);

    if (isNaN(d) || d < 1 || d % 2 === 0) {
      alert("Por favor, ingresa un número impar mayor que 0.");
      return;
    }

    let mitad = Math.floor(d / 2);

    console.clear(); // Limpia la consola antes de dibujar

    // Parte superior del rombo
    for (let i = 0; i <= mitad; i++) {
      let espacios = " ".repeat(mitad - i);
      let estrellas = "*".repeat(2 * i + 1);
      console.log(espacios + estrellas);
    }

    // Parte inferior del rombo
    for (let i = mitad - 1; i >= 0; i--) {
      let espacios = " ".repeat(mitad - i);
      let estrellas = "*".repeat(2 * i + 1);
      console.log(espacios + estrellas);
    }
  }