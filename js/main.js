// Datos del proyecto
const FECHA_INICIO = new Date("2025-03-17");
const VALOR_DESCANSO = 400;
const VALOR_DIA = 200;
const VALOR_VACACIONES = 600;

// Fechas de vacaciones
const FECHA_INICIO_VACACIONES = new Date("2025-09-15");
const FECHA_FIN_VACACIONES = new Date("2025-10-07");

// Días de descanso
const DIAS_DESCANSO = [
"20-marzo-2025", "21-marzo-2025", "23-marzo-2025", "24-marzo-2025", "25-marzo-2025", "06-abril-2025", "13-abril-2025", "21-abril-2025", "22-abril-2025", "23-abril-2025", "27-abril-2025", "01-mayo-2025", "14-mayo-2025", "23-mayo-2025", "01-junio-2025", "08-junio-2025", "15-junio-2025", "22-junio-2025", "29-junio-2025", "05-julio-2025", "13-julio-2025", "19-julio-2025", "27-julio-2025", "03-agosto-2025", "10-agosto-2025", "16-agosto-2025", "17-agosto-2025", "18-agosto-2025", "24-agosto-2025", "07-septiembre-2025", "14-septiembre-2025", "21-septiembre-2025", "28-septiembre-2025", "05-octubre-2025", "12-octubre-2025", "17-octubre-2025", "27-octubre-2025", "07-noviembre-2025", "23-noviembre-2025", "26-noviembre-2025", "07-diciembre-2025", "14-diciembre-2025", "21-diciembre-2025", "23-diciembre-2025", "24-diciembre-2025", "25-diciembre-2025", "26-diciembre-2025", "27-diciembre-2025", "29-diciembre-2025", "30-diciembre-2025", "01-enero-2026", "02-enero-2026", "03-enero-2026", "04-enero-2026", "05-enero-2026", "06-enero-2026", "07-enero-2026", "08-febrero-2026", "15-febrero-2026", "05-julio-2026"
];

// Días de vacaciones (15 septiembre - 7 octubre 2025)
const DIAS_VACACIONES = [
	//    "15-septiembre-2025", "16-septiembre-2025", "17-septiembre-2025", "18-septiembre-2025", "19-septiembre-2025",
	//  "20-septiembre-2025", "21-septiembre-2025", "22-septiembre-2025", "23-septiembre-2025", "24-septiembre-2025",
	// "25-septiembre-2025", "26-septiembre-2025", "27-septiembre-2025", "28-septiembre-2025", "29-septiembre-2025",
	//    "30-septiembre-2025", "01-octubre-2025", "02-octubre-2025", "03-octubre-2025", "04-octubre-2025",
];

// Abonos
const ABONOS = [
{fecha: "11-mayo-2025", monto: 3700, nota: "fue el dia que le pase la cuenta de la deuda"},
{fecha: "16-junio-2025", monto: 3600, nota: "fue el dia de la pitahaya casa abajo"},
{fecha: "30-junio-2025", monto: 3600, nota: "fue el dia que me pidio agua"},
{fecha: "10-agosto-2025", monto: 3600, nota: "dia que me los dio en las pizzas del parque"},
{fecha: "30-agosto-2025", monto: 1800, nota: "fue el dia que tome ballenas"},
{fecha: "03-septiembre-2025", monto: 3000, nota: "Para el pago de la escuela me los dio en la casa de abajo"},
{fecha: "02-octubre-2025", monto: 3000, nota: "pagar la escuela jueves madrugada"},
{fecha: "08-octubre-2025", monto: 800, nota: "dia que el gordo prendio la moto de mencha"},
{fecha: "10-octubre-2025", monto: 1000, nota: "Dia de botes y puli faros al lagañoso"},
{fecha: "13-octubre-2025", monto: 1000, nota: "Cuando no vinieron a trabajar"},
{fecha: "15-octubre-2025", monto: 900, nota: "fue cuando le pase corriente al carro"},
{fecha: "18-octubre-2025", monto: 900, nota: "sábado no funcionaba mi celular"},
{fecha: "22-octubre-2025", monto: 900, nota: "arme compu de piti"},
{fecha: "23-octubre-2025", monto: 900, nota: "mencha andaba amanecido"},
{fecha: "03-noviembre-2025", monto: 3000, nota: "pagar escuela"},
{fecha: "03-enero-2026", monto: 3000, nota: "Domingo casa arriba"},
{fecha: "16-febrero-2026", monto: 3000, nota: "Dia que trabajo el pollo"},
{fecha: "24-febrero-2026", monto: 3000, nota: "recuperacion"},
{fecha: "02-marzo-2026", monto: 3000, nota: "llego con la lap casa abajo"},
{fecha: "26-marzo-2026", monto: 3000, nota: "pagar colegiatura dormi en la casa de abajo"},
{fecha: "04-abril-2026", monto: 1500, nota: "visita doctor"},
{fecha: "14-abril-2026", monto: 600, nota: "terapia"},
{fecha: "18-abril-2026", monto: 600, nota: "terapia"},
{fecha: "21-abril-2026", monto: 600, nota: "terapia"},
{fecha: "28-abril-2026", monto: 2000, nota: "para mensualidad escuela"},
{fecha: "29-abril-2026", monto: 1000, nota: "faltaban de un dia antes"},
{fecha: "21-mayo-2026", monto: 1000, nota: "cuando no fue chuky"},
{fecha: "01-junio-2026", monto: 3000, nota: "Fiesta plaza los fresnos"},
{fecha: "15-junio-2026", monto: 1000, nota: "dia que estaba enfermo"},
{fecha: "21-junio-2026", monto: 1000, nota: "dia del padre"},
{fecha: "24-junio-2026", monto: 1000, nota: "Dia que jugo la seleccion"},
{fecha: "03-julio-2026", monto: 3000, nota: "dia que me cambie de casa de abajo para arriba"},
];

// Función para formatear fecha en español
function formatearFecha(fecha) {
	const meses = [
		"enero",
		"febrero",
		"marzo",
		"abril",
		"mayo",
		"junio",
		"julio",
		"agosto",
		"septiembre",
		"octubre",
		"noviembre",
		"diciembre",
	];

	const dia = fecha.getDate();
	const mes = meses[fecha.getMonth()];
	const año = fecha.getFullYear();

	return `${dia} de ${mes}, ${año}`;
}

// Función para convertir fecha string a Date
function convertirFecha(fechaStr) {
	const partes = fechaStr.split("-");
	const meses = {
		enero: 0,
		febrero: 1,
		marzo: 2,
		abril: 3,
		mayo: 4,
		junio: 5,
		julio: 6,
		agosto: 7,
		septiembre: 8,
		octubre: 9,
		noviembre: 10,
		diciembre: 11,
	};

	const dia = parseInt(partes[0]);
	const mes = meses[partes[1]];
	const año = parseInt(partes[2]);

	return new Date(año, mes, dia);
}

// Función para formatear moneda
function formatearMoneda(cantidad) {
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		minimumFractionDigits: 0,
	}).format(cantidad);
}

// Función para calcular días transcurridos
function calcularDiasTranscurridos() {
	const hoy = new Date();
	const diferencia = hoy - FECHA_INICIO;
	return Math.floor(diferencia / (1000 * 60 * 60 * 24));
}

// Función para calcular días trabajados
function calcularDiasTrabajados() {
	const diasTranscurridos = calcularDiasTranscurridos();
	const totalDescansos = DIAS_DESCANSO.length;
	return Math.max(0, diasTranscurridos - totalDescansos);
}

// Función para calcular suma de abonos
function calcularSumaAbonos() {
	return ABONOS.reduce((suma, abono) => suma + abono.monto, 0);
}

// Función para calcular valor de vacaciones
function calcularValorVacaciones() {
	return DIAS_VACACIONES.length * VALOR_VACACIONES;
}

// Función para renderizar días de descanso
function renderizarDescansos() {
	const container = document.getElementById("lista-descansos");
	container.innerHTML = "";

	DIAS_DESCANSO.forEach((fechaStr) => {
		const fecha = convertirFecha(fechaStr);
		const div = document.createElement("div");
		div.className = "descanso-item rounded-lg p-3 text-center animate-fade-in";
		div.innerHTML = `
            <div class="text-sm font-medium">${formatearFecha(fecha)}</div>
            <div class="text-xs mt-1 font-semibold">${formatearMoneda(VALOR_DESCANSO)}</div>
        `;
		container.appendChild(div);
	});
}

// Función para renderizar abonos
function renderizarAbonos() {
	const container = document.getElementById("lista-abonos");
	container.innerHTML = "";

	ABONOS.forEach((abono, index) => {
		const fecha = convertirFecha(abono.fecha);
		const div = document.createElement("div");
		div.className = "abono-item rounded-lg p-4 flex justify-between items-center animate-fade-in";
		div.innerHTML = `
            <div class="flex-1">
                <div class="font-semibold">${formatearFecha(fecha)}</div>
                ${abono.nota ? `<div class="text-sm mt-1 opacity-80">${abono.nota}</div>` : ""}
            </div>
            <div class="text-xl font-bold">${formatearMoneda(abono.monto)}</div>
        `;
		container.appendChild(div);
	});
}

// Función para renderizar vacaciones
function renderizarVacaciones() {
	const container = document.getElementById("lista-vacaciones");
	container.innerHTML = "";

	DIAS_VACACIONES.forEach((fechaStr) => {
		const fecha = convertirFecha(fechaStr);
		const div = document.createElement("div");
		div.className = "vacaciones-item rounded-lg p-3 text-center animate-fade-in";
		div.innerHTML = `
            <div class="text-sm font-medium">${formatearFecha(fecha)}</div>
            <div class="text-xs mt-1 font-semibold">${formatearMoneda(VALOR_VACACIONES)}</div>
        `;
		container.appendChild(div);
	});
}

// Estado del toggle de vacaciones
let vacacionesVisibles = false;

// Función para convertir fecha Date a string formato dd-mes-yyyy
function formatearFechaParaArray(fecha) {
	const meses = [
		"enero",
		"febrero",
		"marzo",
		"abril",
		"mayo",
		"junio",
		"julio",
		"agosto",
		"septiembre",
		"octubre",
		"noviembre",
		"diciembre",
	];

	const dia = fecha.getDate().toString().padStart(2, "0");
	const mes = meses[fecha.getMonth()];
	const año = fecha.getFullYear();

	return `${dia}-${mes}-${año}`;
}

// Función para agregar día de descanso
function agregarDiaDescanso() {
	const inputFecha = document.getElementById("nueva-fecha-descanso");
	const fechaValue = inputFecha.value;

	if (!fechaValue) {
		alert("Por favor selecciona una fecha");
		return;
	}

	const fecha = new Date(fechaValue);
	const fechaFormateada = formatearFechaParaArray(fecha);

	// Verificar si la fecha ya existe
	if (DIAS_DESCANSO.includes(fechaFormateada)) {
		alert("Esta fecha ya está en la lista de descansos");
		return;
	}

	// Agregar la fecha al array
	DIAS_DESCANSO.push(fechaFormateada);

	// Ordenar el array por fecha
	DIAS_DESCANSO.sort((a, b) => {
		const fechaA = convertirFecha(a);
		const fechaB = convertirFecha(b);
		return fechaA - fechaB;
	});

	// Limpiar input
	inputFecha.value = "";

	// Actualizar la interfaz
	actualizarCalculos();
	renderizarDescansos();

	// Mostrar mensaje de éxito
	mostrarNotificacion(`Día de descanso agregado: ${formatearFecha(fecha)}`, "success");
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo = "info") {
	// Crear elemento de notificación
	const notificacion = document.createElement("div");
	notificacion.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;

	// Estilos según el tipo
	const estilos = {
		success: "bg-green-500 text-white",
		error: "bg-red-500 text-white",
		info: "bg-blue-500 text-white",
		warning: "bg-yellow-500 text-black",
	};

	notificacion.className += ` ${estilos[tipo] || estilos.info}`;
	notificacion.innerHTML = `
        <div class="flex items-center gap-2">
            <i class="fas fa-${tipo === "success" ? "check-circle" : tipo === "error" ? "exclamation-triangle" : "info-circle"}"></i>
            <span>${mensaje}</span>
        </div>
    `;

	document.body.appendChild(notificacion);

	// Animar entrada
	setTimeout(() => {
		notificacion.style.transform = "translateX(0)";
	}, 100);

	// Remover después de 3 segundos
	setTimeout(() => {
		notificacion.style.transform = "translateX(full)";
		setTimeout(() => {
			document.body.removeChild(notificacion);
		}, 300);
	}, 3000);
}

// Función para actualizar títulos dinámicos
function actualizarTitulos() {
	const totalDescansos = DIAS_DESCANSO.length;
	const valorDescansos = totalDescansos * VALOR_DESCANSO;
	const totalVacaciones = DIAS_VACACIONES.length;
	const valorVacaciones = calcularValorVacaciones();

	// Actualizar título de descansos
	document.getElementById("titulo-descansos").textContent =
		`Días de Descanso (${totalDescansos} días × $${VALOR_DESCANSO} = ${formatearMoneda(valorDescansos)})`;

	// Actualizar título de vacaciones
	document.getElementById("titulo-vacaciones").textContent =
		`Días de Vacaciones (${totalVacaciones} días × $${VALOR_VACACIONES} = ${formatearMoneda(valorVacaciones)})`;
}

// Función para toggle de vacaciones
function toggleVacaciones() {
	const seccionVacaciones = document.getElementById("seccion-vacaciones");
	const tarjetaVacaciones = document.getElementById("tarjeta-vacaciones");
	const iconoToggle = document.getElementById("icono-toggle");
	const textoToggle = document.getElementById("texto-toggle");
	const listaVacaciones = document.getElementById("lista-vacaciones");

	vacacionesVisibles = !vacacionesVisibles;

	if (vacacionesVisibles) {
		// Mostrar vacaciones
		seccionVacaciones.style.display = "block";
		tarjetaVacaciones.style.display = "block";
		listaVacaciones.style.display = "grid";
		iconoToggle.className = "fas fa-eye-slash";
		textoToggle.textContent = "Ocultar";

		// Animar entrada
		seccionVacaciones.style.opacity = "0";
		seccionVacaciones.style.transform = "translateY(-20px)";
		setTimeout(() => {
			seccionVacaciones.style.transition = "all 0.3s ease";
			seccionVacaciones.style.opacity = "1";
			seccionVacaciones.style.transform = "translateY(0)";
		}, 10);
	} else {
		// Ocultar vacaciones
		seccionVacaciones.style.transition = "all 0.3s ease";
		seccionVacaciones.style.opacity = "0";
		seccionVacaciones.style.transform = "translateY(-20px)";
		tarjetaVacaciones.style.display = "none";
		iconoToggle.className = "fas fa-eye";
		textoToggle.textContent = "Mostrar";

		setTimeout(() => {
			seccionVacaciones.style.display = "none";
		}, 300);
	}

	// Recalcular totales
	actualizarCalculos();
}

// Función para actualizar todos los cálculos
function actualizarCalculos() {
	const diasTranscurridos = calcularDiasTranscurridos();
	const diasTrabajados = calcularDiasTrabajados();
	const totalDescansos = DIAS_DESCANSO.length;
	const valorDescansos = totalDescansos * VALOR_DESCANSO;
	const totalVacaciones = DIAS_VACACIONES.length;
	const valorVacaciones = calcularValorVacaciones();
	const sumaAbonos = calcularSumaAbonos();
	const ingresosPorDias = diasTranscurridos * VALOR_DIA;

	// Calcular total general considerando si las vacaciones están visibles
	const totalGeneral = vacacionesVisibles
		? valorDescansos + valorVacaciones + ingresosPorDias - sumaAbonos
		: valorDescansos + ingresosPorDias - sumaAbonos;

	// Actualizar elementos del DOM
	document.getElementById("dias-transcurridos").textContent = diasTranscurridos;
	document.getElementById("total-descansos").textContent = totalDescansos;
	document.getElementById("valor-descansos").textContent = formatearMoneda(valorDescansos);
	document.getElementById("total-vacaciones").textContent = vacacionesVisibles
		? totalVacaciones
		: 0;
	document.getElementById("valor-vacaciones").textContent = vacacionesVisibles
		? formatearMoneda(valorVacaciones)
		: formatearMoneda(0);
	document.getElementById("suma-abonos").textContent = formatearMoneda(sumaAbonos);
	document.getElementById("ingresos-dias").textContent = formatearMoneda(ingresosPorDias);
	document.getElementById("fecha-actual").textContent = formatearFecha(new Date());
	document.getElementById("dias-trabajados").textContent = diasTrabajados;
	document.getElementById("total-general").textContent = formatearMoneda(totalGeneral);

	// Actualizar títulos dinámicos
	actualizarTitulos();
}

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", function () {
	actualizarCalculos();
	renderizarDescansos();
	renderizarVacaciones();
	renderizarAbonos();

	// Configurar botón toggle de vacaciones
	document.getElementById("toggle-vacaciones").addEventListener("click", toggleVacaciones);

	// Configurar botón agregar descanso
	document.getElementById("agregar-descanso").addEventListener("click", agregarDiaDescanso);

	// Configurar enter en el input de fecha
	document.getElementById("nueva-fecha-descanso").addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			agregarDiaDescanso();
		}
	});

	// Actualizar cada minuto por si cambia el día
	setInterval(actualizarCalculos, 60000);
});

// Agregar animaciones de entrada
window.addEventListener("load", function () {
	const cards = document.querySelectorAll(".bg-white");
	cards.forEach((card, index) => {
		card.style.opacity = "0";
		card.style.transform = "translateY(20px)";
		setTimeout(() => {
			card.style.transition = "all 0.6s ease";
			card.style.opacity = "1";
			card.style.transform = "translateY(0)";
		}, index * 100);
	});
});
