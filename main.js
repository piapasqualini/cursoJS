let saludo = alert(
  "¡Bienvenido! A continuación te haremos algunas preguntas para realizar una tasación aproximada de tu inmueble. \n \n Recordá que nosotros trabajamos exclusivamente en los barrios de Recoleta, Palermo, Belgrano y Núñez. \n Si te encuentras en otro barrio, constáctanos y te recomendaremos un colega. \n \n Ahora sí, iniciamos !"
);

function ingresoDatos(solicitud) {
  let dato = parseInt(prompt(solicitud));
  console.log(dato);
  return dato;
}

let m2cub = ingresoDatos(
  "Por favor, ingresa cuántos m2 cubiertos tiene el inmueble a tasar."
);
let m2desc = ingresoDatos(
  "Ingresa los m2 descubiertos (balcones, terraza, patio). Si no posee, ingresa 0."
);
let estado = ingresoDatos(
  "¿En qué estado de mantenimiento se encuentra el inmueble? \n Ingresa 1 si el estado es Como nuevo, o a estrenar \n Ingresa 2 si el estado es regular: todo se encuentra en funcionamiento pero se precisa alguna mejora \n Ingresa 3 si el estado es a refaccionar"
);

if (m2cub === "" || m2desc === "" || estado === "") {
  alert("¡Atención! Falta aportar datos");
} else {
  alert(
    "El piso a tasar posee " +
      m2cub +
      " metros cuadrados cubiertos, " +
      m2desc +
      " metros cuadrados descubiertos (en balcones, terrazas y/o patios), y un estado general de conservación de nivel " +
      estado +
      "."
  );
}

let incidenciaEstado = 0;

if (estado === 1) {
  incidenciaEstado = 2800;
} else if (estado === 2) {
  incidenciaEstado = 2000;
} else if (estado === 3) {
  incidenciaEstado = 1800;
}

function calcular() {
  let tasacion = (m2cub + m2desc * 0.8) * incidenciaEstado;
  alert(
    "El valor aproximado del inmueble en cuestión es de USD " + tasacion + ".-"
  );
  return tasacion;
}

calcular();

//*Registro para envío de mailing*//

class Inmueble {
  constructor(m2cub, m2desc, estado, nombre, mail) {
    this.m2cub = m2cub;
    this.m2desc = m2desc;
    this.estado = estado;
    this.nombre = nombre;
    this.mail = mail;
  }

  mailing() {
    console.log(
      "Hola, " +
        this.nombre +
        ": Recientemente realizaste una tasación aproximada para un inmueble. El mismo cuenta con " +
        this.m2cub +
        "m2 cubiertos y " +
        this.m2desc +
        "m2 descubiertos, propios de balcones, terrazas y/o patios. Además, indicaste que el estado del mismo corresponde con un nivel " +
        this.estado +
        "\n ¿Estás pensando en vender? Te ofrecemos nuestros servicios de tasación personalizada, así como también el acompañamiento en todo el proceso de venta. \n somos expertos en la zona y podemos ayudarte a optimizar la experiencia. \n Quedamos a tu disposición. \n El equipo de PP Bienes Raíces. "
    );
  }
}

const inmuebles = [];

inmuebles.push(new Inmueble("50", "0", "2", "Pia", "pia@pia.com"));
inmuebles.push(new Inmueble("80", "5", "1", "Juan", "juan@juan.com"));
inmuebles.push(new Inmueble("120", "25", "2", "Laura", "lau@lau.com"));
inmuebles.push(new Inmueble("65", "12", "3", "Raquel", "ra@quel.com"));
inmuebles.push(new Inmueble("185", "30", "1", "Antonio", "tony@tonio.com"));

for (Inmueble of inmuebles) {
  Inmueble.mailing();
}
