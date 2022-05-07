let frente = parseInt(
  prompt("¡Hola! Por favor, ingrese cuántos metros tiene su lote de frente.")
);
let fondo = parseInt(
  prompt("Estupendo. Ahora indícanos cuántos metros mide su lote de fondo. ")
);
let deseo = parseInt(
  prompt("Finalmente: ¿cuántos metros hacia el fondo desea construir?")
);

for (let i = deseo; i <= fondo; i += 5) {
  alert(
    "Si Ud. construye " +
      i +
      " metros, entonces su casa tendrá un total de " +
      frente * i +
      " metros cuadrados, y deberá invertir un total de u$s" +
      frente * i * 800 +
      ".-"
  );
}
