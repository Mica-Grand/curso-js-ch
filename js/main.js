
let gastosFijos;
let presupuestoDiario;

function sumarGastosFijos(alquiler, comida, transporte, servicios, comunicaciones, otro) {
    gastosFijos = alquiler + comida + transporte + servicios + comunicaciones + otro;
}

function calcularPresupuestoDiario(ingresoDisponible, dias) {
    presupuestoDiario = ingresoDisponible / dias;
}

// entrada de mes (no se como hacer para validar que sea un numero entero)
let mes = parseInt(prompt("Ingresa el mes en formato numerico (por ejemplo, para enero ingresa 1, para febrero 2, etc.):"));

while (isNaN(mes) || mes < 1 || mes > 12){
    alert("Ingresaste un mes incorrecto");
    mes = parseInt(prompt("Ingresa el mes en formato numerico (por ejemplo, para enero ingresa 1, para febrero 2, etc.):"));
}

let dias;

if (mes == 2) {
    dias = 28;
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    dias = 30;
} else {
    dias = 31;
}

// entrada de ingreso mensual
let ingresoMensual = Number(prompt("Ingresa tu ingreso mensual neto:"));

// validación del dato
while (isNaN(ingresoMensual) || ingresoMensual <= 0) {
    alert("Ingresa un número válido para tu ingreso mensual.");
    ingresoMensual = Number(prompt("Ingresa tu ingreso mensual neto:"));
}

// entrada de gastos fijos del mes, como alquiler, comida, transporte, etc. 
let alquiler, comida, transporte, servicios, comunicaciones, otro;

// solicitar la entrada del usuario para cada variable de gasto hasta que se proporcione un valor válido
do {
    alquiler = Number(prompt("Ingresa tu gasto en alquiler:"));
} while (isNaN(alquiler) || alquiler < 0);

do {
    comida = Number(prompt("Ingresa tu gasto estimado en supermercado:"));
} while (isNaN(comida) || comida < 0);

do {
    transporte = Number(prompt("Ingresa tu gasto en transporte (por ejemplo transporte publico o combustible):"));
} while (isNaN(transporte) || transporte < 0);

do {
    servicios = Number(prompt("Ingresa tu gasto en servicios esenciales (luz, agua y gas)"));
} while (isNaN(servicios) || servicios < 0);

do {
    comunicaciones = Number(prompt("Ingresa tu gasto en comunicaciones (telefono, cable, internet)"));
} while (isNaN(comunicaciones) || comunicaciones < 0);

do {
    otro = Number(prompt("Ingresa la suma de otros gastos fijos"));
} while (isNaN(otro) || otro < 0);

sumarGastosFijos(alquiler, comida, transporte, servicios, comunicaciones, otro);

alert(`Tus gastos fijos suman $${gastosFijos.toFixed(2)}`);

alert("Presiona 'Aceptar' para conocer el dinero que te queda disponible y tu presupuesto diario");


// resta el total de gastos del ingreso mensual para obtener el ingreso disponible después de pagar los gastos fijos.
let ingresoDisponible = ingresoMensual - gastosFijos;

//calcular el presupuesto diario de acuerdo a la cantidad de dias del mes
calcularPresupuestoDiario(ingresoDisponible, dias);

// muestra el resultado al usuario utilizando la función alert.
let mensaje = `Tu ingreso disponible después de pagar tus gastos fijos es de $${ingresoDisponible.toFixed(2)}.
Tu presupuesto diario es de $${presupuestoDiario.toFixed(2)}`;
alert(mensaje);



    // Quiero agregar una funcion que calcule que porcentaje del ingreso corresponde a cada tipo de gasto