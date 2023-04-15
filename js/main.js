
//variables

let mes;
let dias;
let ingresoMensual;
let alquiler, comida, transporte, servicios, comunicaciones, otro;
let gastosFijos;
let presupuestoDiario;
let porcentajeAlquiler;
let porcentajeComida;
let porcentajeTransporte;
let porcentajeServicios;
let porcentajeComunicaciones;
let porcentajeOtro;
let ingresoDisponible;
let mensaje;


//funciones

function sumarGastosFijos(alquiler, comida, transporte, servicios, comunicaciones, otro) {
    gastosFijos = alquiler + comida + transporte + servicios + comunicaciones + otro;
}

function calcularPorcentajes() {
    porcentajeAlquiler = (alquiler / ingresoMensual) * 100;
    porcentajeComida = (comida / ingresoMensual) * 100;
    porcentajeTransporte = (transporte / ingresoMensual) * 100;
    porcentajeServicios = (servicios / ingresoMensual) * 100;
    porcentajeComunicaciones = (comunicaciones / ingresoMensual) * 100;
    porcentajeOtro = (otro / ingresoMensual) * 100;
}

function calcularPresupuestoDiario(ingresoDisponible, dias) {
    presupuestoDiario = ingresoDisponible / dias;
}


// solicito al usuario la entrada de mes (esto lo pongo porque no sé cómo tomar la fecha del día y necesito el dato de cantidad de días del mes para calcular un presupuesto diario)

mes = parseInt(prompt("Por favor, ingresá el mes en formato numérico \n (por ejemplo, para enero ingresa 1, para febrero 2, etc.):"));


//valido el dato mes

while (isNaN(mes) || mes < 1 || mes > 12){
    alert("Ingresaste un mes incorrecto");
    mes = parseInt(prompt("Ingresá el mes en formato numérico \n (por ejemplo, para enero ingresa 1, para febrero 2, etc.):"));
}


// dependiendo del mes le asigno un valor a la variable día, usando un condicional 

if (mes == 2) {
    dias = 28;
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    dias = 30;
} else {
    dias = 31;
}


// solicito al usuario la entrada de ingreso mensual

ingresoMensual = Number(prompt("Colocá tu ingreso mensual neto/de bolsillo sin decimales y sin separar los miles \n (si tu ingreso es de $150.000, debés ingresar '150000'):"));


// validación del dato ingreso mensual 
// tanto acá como en la entrada de cada gasto fijo (que está a continuación) no sé cómo hacer 
//para corregir si el usuario separa los miles con punto (a 50.000 lo toma como 50 coma cero)

while (isNaN(ingresoMensual) || ingresoMensual <= 0) {
    alert("Ingresá un número válido para tu ingreso mensual.");
    ingresoMensual = Number(prompt("Colocá tu ingreso mensual neto/de bolsillo sin decimales y sin separar los miles \n (si tu ingreso es de $150.000, debés ingresar '150000'):"));
}

// solicitar la entrada del usuario para cada variable de gasto hasta que se proporcione un valor válido

do {
    alquiler = Number(prompt("Ingresá tu gasto en alquiler:"));
} while (isNaN(alquiler) || alquiler < 0);

do {
    comida = Number(prompt("Ingresá tu gasto estimado en supermercado:"));
} while (isNaN(comida) || comida < 0);

do {
    transporte = Number(prompt("Ingresa tu gasto estimado en movilidad (por ejemplo, transporte publico o combustible):"));
} while (isNaN(transporte) || transporte < 0);

do {
    servicios = Number(prompt("Ingresá tu gasto en servicios esenciales (luz, agua y gas)"));
} while (isNaN(servicios) || servicios < 0);

do {
    comunicaciones = Number(prompt("Ingresá tu gasto en comunicaciones (teléfono, cable, internet)"));
} while (isNaN(comunicaciones) || comunicaciones < 0);

do {
    otro = Number(prompt("Ingresá la suma de otros gastos fijos (tarjeta, impuestos, seguros)"));
} while (isNaN(otro) || otro < 0);


// En Argentina ningún gasto fijo es fijo jaja, asi que cuando digo "gasto fijo" me refiero a gastos obligatorios, 
//que uno hace cada mes, pero por la inflación es imposible saber exactamente, por eso uso tanto la palabra "estimado".
//Cuando aprendamos cómo hacer para que el usuario interactúe en un form o algo más amigable que un prompt voy a
//repensar las variables de los gastos y reclasificar, pero ahora no queria poner muchos 
//porque iba a ser re denso completar 700 prompt jaja. 
//La app me la imagino con un botón de "agregar gasto", y ahí seleccionás de qué categoría y el monto.
//y un botón de eliminar un gasto creado, etc. 

sumarGastosFijos(alquiler, comida, transporte, servicios, comunicaciones, otro);

calcularPorcentajes();

alert(`Tus gastos fijos suman $${gastosFijos.toFixed(2)}

En relación a tu ingreso representan los siguientes porcentajes:

Alquiler: ${porcentajeAlquiler.toFixed(2)}%
Comida: ${porcentajeComida.toFixed(2)}%
Transporte: ${porcentajeTransporte.toFixed(2)}%
Servicios: ${porcentajeServicios.toFixed(2)}%
Comunicaciones: ${porcentajeComunicaciones.toFixed(2)}%
Otros: ${porcentajeOtro.toFixed(2)}%;

Presioná 'Aceptar' para conocer el dinero que te queda disponible y el presupuesto diario para este mes`);

// resta el total de gastos del ingreso mensual para obtener el ingreso disponible después de pagar los gastos fijos.
ingresoDisponible = ingresoMensual - gastosFijos;

//calcular el presupuesto diario de acuerdo a la cantidad de dias del mes
calcularPresupuestoDiario(ingresoDisponible, dias);

// muestra el resultado al usuario utilizando la función alert.
mensaje = `Tu ingreso disponible después de pagar tus gastos fijos es de $${ingresoDisponible.toFixed(2)}.

Tu presupuesto diario es de $${presupuestoDiario.toFixed(2)}

No te preocupes; siempre que llovió, paró. Ya vendrán tiempos mejores.`;

alert(mensaje);



