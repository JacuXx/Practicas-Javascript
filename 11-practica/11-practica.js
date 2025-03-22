let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentosMaximos = 7;
let intentosUsados = 0;

function adivinar() {
  const intentoUsuario = parseInt(document.getElementById("intento").value);
  const resultado = document.getElementById("resultado");
  const restantes = document.getElementById("intentos-restantes");

  if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100) {
    resultado.innerHTML = "Por favor, ingresa un número válido entre 1 y 100.";
    resultado.style.color = "red";
    return;
  }

  intentosUsados++;

  if (intentoUsuario === numeroSecreto) {
    resultado.innerHTML = `¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentosUsados} intento(s). 🎉`;
    resultado.style.color = "green";
    desactivarJuego();
  } else if (intentosUsados >= intentosMaximos) {
    resultado.innerHTML = `¡Agotaste tus intentos! El número era ${numeroSecreto}. 😢`;
    resultado.style.color = "darkred";
    desactivarJuego();
  } else {
    if (intentoUsuario < numeroSecreto) {
      resultado.innerHTML = "Pista: el número es mayor.";
      resultado.style.color = "blue";
    } else {
      resultado.innerHTML = "Pista: el número es menor.";
      resultado.style.color = "blue";
    }
    restantes.innerHTML = `Intentos restantes: ${intentosMaximos - intentosUsados}`;
  }
}

function desactivarJuego() {
  document.getElementById("intento").disabled = true;
}