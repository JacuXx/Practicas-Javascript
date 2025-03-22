    function pedirNumeros() {
      let numero;
      do {
        numero = parseInt(prompt("Ingresa un número (0 para salir):"));
        
        if (!isNaN(numero)) {
          console.log("Número ingresado:", numero);
        } else {
          console.log("Entrada no válida. Intenta de nuevo.");
        }

      } while (numero !== 0);

      console.log("Programa terminado. Ingresaste el número 0.");
    }
