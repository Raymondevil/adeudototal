import { useState, useEffect } from 'react'

// Constantes globales
const FECHA_INICIO = new Date("2025-03-17");
const FECHA_FIN_PRIMER_PERIODO = new Date("2026-02-20");
const FECHA_INICIO_SEGUNDO_PERIODO = new Date("2026-06-29");
const FECHA_FIN_SEGUNDO_PERIODO = new Date("2026-09-02");
const VALOR_DESCANSO = 400;
const VALOR_DIA = 200;
const VALOR_VACACIONES = 600;

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

// Datos iniciales en caso de no existir en localStorage
const INITIAL_DIAS_DESCANSO = [
"20-Marzo-2025",
"21-Marzo-2025",
"23-Marzo-2025",
"24-Marzo-2025",
"25-Marzo-2025",
"06-Abril-2025",
"13-Abril-2025",
"21-Abril-2025",
"22-Abril-2025",
"23-Abril-2025",
"27-Abril-2025",
"01-Mayo-2025",
"14-Mayo-2025",
"23-Mayo-2025",
"01-Junio-2025",
"08-Junio-2025",
"15-Junio-2025",
"22-Junio-2025",
"29-Junio-2025",
"05-Julio-2025",
"06-Julio-2025",
"13-Julio-2025",
"19-Julio-2025",
"20-Julio-2025",
"27-Julio-2025",
"03-Agosto-2025",
"10-Agosto-2025",
"16-Agosto-2025",
"17-Agosto-2025",
"18-Agosto-2025",
"24-Agosto-2025",
"07-Septiembre-2025",
"14-Septiembre-2025",
"21-Septiembre-2025",
"28-Septiembre-2025",
"05-Octubre-2025",
"12-Octubre-2025",
"17-Octubre-2025",
"27-Octubre-2025",
"07-Noviembre-2025",
"23-Noviembre-2025",
"26-Noviembre-2025",
"07-Diciembre-2025",
"14-Diciembre-2025",
"21-Diciembre-2025",
"23-Diciembre-2025",
"24-Diciembre-2025",
"25-Diciembre-2025",
"26-Diciembre-2025",
"27-Diciembre-2025",
"28-Diciembre-2025",
"29-Diciembre-2025",
"30-Diciembre-2025",
"31-Diciembre-2025",
"01-Enero-2026",
"02-Enero-2026",
"03-Enero-2026",
"04-Enero-2026",
"05-Enero-2026",
"06-Enero-2026",
"18-Enero-2026",
"25-Enero-2026",
"01-Febrero-2026",
"08-Febrero-2026",
"15-Febrero-2026",
"23-Marzo-2026",
"05-Julio-2026",
"12-Julio-2026",
"16-Julio-2026",
"17-Julio-2026",
"26-Julio-2026",
"02-Agosto-2026",
"09-Agosto-2026",
"16-Agosto-2026",
"23-Agosto-2026",
"06-Septiembre-2026",
"13-Septiembre-2026"
];

const INITIAL_DIAS_VACACIONES = [
  // Vacaciones (comentadas por defecto en el original)
 "No hubo vacaciones"
];

const INITIAL_ABONOS = [
{fecha: "11-Mayo-2025", monto: 3700, nota: "Dia que pase la deuda"},
{fecha: "17-Junio-2025", monto: 3600, nota: "El dia que traia la pitahaya"},
{fecha: "30-Junio-2025", monto: 3600, nota: "Dia que me pidio agua"},
{fecha: "03-Septiembre-2025", monto: 3000, nota: "Para el pago de la escuela me los dio en la casa de abajo"},
{fecha: "02-Octubre-2025", monto: 3000, nota: "Pagar la escuela jueves madrugada"},
{fecha: "08-Octubre-2025", monto: 800, nota: "Dia que el gordo prendio la moto de mencha"},
{fecha: "10-Octubre-2025", monto: 1000, nota: "Dia de botes y puli faros al laganoso"},
{fecha: "13-Octubre-2025", monto: 1000, nota: "Cuando no vinieron a trabajar"},
{fecha: "15-Octubre-2025", monto: 900, nota: "Fue cuando le pase corriente al carro"},
{fecha: "18-Octubre-2025", monto: 900, nota: "Sabado no funcionaba mi celular"},
{fecha: "22-Octubre-2025", monto: 900, nota: "Arme compu de piti"},
{fecha: "23-Octubre-2025", monto: 900, nota: "Mencha andaba amanecido"},
{fecha: "03-Noviembre-2025", monto: 3000, nota: "Pagar escuela"},
{fecha: "02-Enero-2026", monto: 3000, nota: "Domingo casa arriba"},
{fecha: "16-Febrero-2026", monto: 3000, nota: "Dia que trabajo el pollo"},
{fecha: "24-Febrero-2026", monto: 3000, nota: "Recuperacion"},
{fecha: "02-Marzo-2026", monto: 3000, nota: "Llego con la lap casa abajo"},
{fecha: "26-Marzo-2026", monto: 3000, nota: "Pagar colegiatura dormi en la casa de abajo"},
{fecha: "04-Abril-2026", monto: 1500, nota: "Visita doctor"},
{fecha: "14-Abril-2026", monto: 600, nota: "Terapia"},
{fecha: "18-Abril-2026", monto: 600, nota: "Terapia"},
{fecha: "21-Abril-2026", monto: 600, nota: "Terapia"},
{fecha: "28-Abril-2026", monto: 2000, nota: "Para mensualidad escuela"},
{fecha: "29-Abril-2026", monto: 1000, nota: "Faltaban de un dia antes"},
{fecha: "21-Mayo-2026", monto: 1000, nota: "Cuando no fue chuky"},
{fecha: "01-Junio-2026", monto: 3000, nota: "Fiesta plaza los fresnos"},
{fecha: "15-Junio-2026", monto: 1000, nota: "Dia que estaba enfermo"},
{fecha: "21-Junio-2026", monto: 1000, nota: "Dia del padre"},
{fecha: "24-Junio-2026", monto: 1000, nota: "Dia que jugo la seleccion"},
{fecha: "03-Julio-2026", monto: 3000, nota: "Dia que me cambie de casa de abajo para arriba"},
{fecha: "21-Julio-2026", monto: 1000, nota: "Dia que nina andaba amanecida"},
{fecha: "09-Agosto-2026", monto: 3000, nota: "Dia que se fue la luz en la cuadra"},
{fecha: "01-Septiembre-2026", monto: 1500, nota: "Para pagar colegiatura"},
{fecha: "15-Septiembre-2026", monto: 1000, nota: "terminar de pagar colegiatura"},

];

// Helper functions para el formateo y conversión de fechas
function stringToDate(fechaStr) {
  const partes = fechaStr.split("-");
  const mesIndex = MESES.indexOf(partes[1].toLowerCase());
  const dia = parseInt(partes[0], 10);
  const año = parseInt(partes[2], 10);
  return new Date(año, mesIndex, dia);
}

function dateToString(date) {
  const dia = date.getDate().toString().padStart(2, "0");
  const mes = MESES[date.getMonth()];
  const año = date.getFullYear();
  return `${dia}-${mes}-${año}`;
}

function formatHumanDate(date) {
  const dia = date.getDate();
  const mes = MESES[date.getMonth()];
  const año = date.getFullYear();
  return `${dia} de ${mes}, ${año}`;
}

function crearFechaDesdeInput(fechaStr) {
  const [year, month, day] = fechaStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatearMoneda(cantidad) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  }).format(cantidad);
}

function App() {
  // --- Estados de Datos ---
  const [diasDescanso, setDiasDescanso] = useState(() => {
    const saved = localStorage.getItem('diasDescanso');
    return saved ? JSON.parse(saved) : INITIAL_DIAS_DESCANSO;
  });

  const [diasVacaciones, setDiasVacaciones] = useState(() => {
    const saved = localStorage.getItem('diasVacaciones');
    return saved ? JSON.parse(saved) : INITIAL_DIAS_VACACIONES;
  });

  const [abonos, setAbonos] = useState(() => {
    const saved = localStorage.getItem('abonos');
    return saved ? JSON.parse(saved) : INITIAL_ABONOS;
  });

  const [vacacionesVisibles, setVacacionesVisibles] = useState(() => {
    const saved = localStorage.getItem('vacacionesVisibles');
    return saved ? JSON.parse(saved) === 'true' : false;
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem('viewMode') || 'grid';
  });

  // --- Estados de Inputs ---
  const [nuevaFechaDescanso, setNuevaFechaDescanso] = useState('');
  const [nuevaFechaAbono, setNuevaFechaAbono] = useState('');
  const [nuevoMontoAbono, setNuevoMontoAbono] = useState('');
  const [nuevaNotaAbono, setNuevaNotaAbono] = useState('');

  // --- Estado de Notificaciones (Toasts) ---
  const [toasts, setToasts] = useState([]);

  // --- Efectos para Persistencia ---
  useEffect(() => {
    localStorage.setItem('diasDescanso', JSON.stringify(diasDescanso));
  }, [diasDescanso]);

  useEffect(() => {
    localStorage.setItem('diasVacaciones', JSON.stringify(diasVacaciones));
  }, [diasVacaciones]);

  useEffect(() => {
    localStorage.setItem('abonos', JSON.stringify(abonos));
  }, [abonos]);

  useEffect(() => {
    localStorage.setItem('vacacionesVisibles', vacacionesVisibles.toString());
  }, [vacacionesVisibles]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Cambiar la clase en el body para aplicar los estilos CSS
    document.body.className = '';
    if (theme !== 'light') {
      document.body.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('viewMode', viewMode);
  }, [viewMode]);

  // --- Sistema de Notificaciones ---
  const showNotification = (mensaje, tipo = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, mensaje, tipo }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // --- Operaciones ---
  const handleAgregarDescanso = () => {
    if (!nuevaFechaDescanso) {
      showNotification("Por favor selecciona una fecha", "warning");
      return;
    }

    const fechaObj = crearFechaDesdeInput(nuevaFechaDescanso);
    const fechaFormateada = dateToString(fechaObj);

    if (diasDescanso.includes(fechaFormateada)) {
      showNotification("Esta fecha ya está en la lista de descansos", "warning");
      return;
    }

    const nuevosDescansos = [...diasDescanso, fechaFormateada].sort((a, b) => stringToDate(a) - stringToDate(b));
    setDiasDescanso(nuevosDescansos);
    setNuevaFechaDescanso('');
    showNotification(`Día de descanso agregado: ${formatHumanDate(fechaObj)}`, "success");
  };

  const handleEliminarDescanso = (fechaFormateada) => {
    const confirmacion = window.confirm(`¿Seguro que deseas eliminar el descanso del ${fechaFormateada}?`);
    if (!confirmacion) return;

    setDiasDescanso(prev => prev.filter(d => d !== fechaFormateada));
    showNotification(`Descanso eliminado: ${fechaFormateada}`, "danger");
  };

  const handleAgregarAbono = () => {
    if (!nuevaFechaAbono || !nuevoMontoAbono) {
      showNotification("Por favor selecciona una fecha y escribe un monto", "warning");
      return;
    }

    const monto = parseFloat(nuevoMontoAbono);
    if (isNaN(monto) || monto <= 0) {
      showNotification("El monto debe ser un número positivo", "warning");
      return;
    }

    const fechaObj = crearFechaDesdeInput(nuevaFechaAbono);
    const fechaFormateada = dateToString(fechaObj);

    const nuevoAbono = {
      fecha: fechaFormateada,
      monto,
      nota: nuevaNotaAbono.trim()
    };

    const nuevosAbonos = [...abonos, nuevoAbono].sort((a, b) => stringToDate(a.fecha) - stringToDate(b.fecha));
    setAbonos(nuevosAbonos);
    setNuevaFechaAbono('');
    setNuevoMontoAbono('');
    setNuevaNotaAbono('');
    showNotification(`Abono de ${formatearMoneda(monto)} agregado con éxito`, "success");
  };

  const handleEliminarAbono = (index, abono) => {
    const confirmacion = window.confirm(`¿Seguro que deseas eliminar el abono del ${abono.fecha} por ${formatearMoneda(abono.monto)}?`);
    if (!confirmacion) return;

    setAbonos(prev => prev.filter((_, i) => i !== index));
    showNotification(`Abono de ${formatearMoneda(abono.monto)} eliminado`, "danger");
  };

  // --- Cálculos Matemáticos ---
  const calcularDiasEntreFechas = (fechaInicio, fechaFin) => {
    const diferencia = fechaFin - fechaInicio;
    return Math.floor(diferencia / (1000 * 60 * 60 * 24));
  };

  const hoy = new Date();
  const diasPrimerPeriodo = calcularDiasEntreFechas(FECHA_INICIO, FECHA_FIN_PRIMER_PERIODO);
  const diasSegundoPeriodo = hoy >= FECHA_FIN_SEGUNDO_PERIODO
    ? calcularDiasEntreFechas(FECHA_INICIO_SEGUNDO_PERIODO, FECHA_FIN_SEGUNDO_PERIODO)
    : hoy >= FECHA_INICIO_SEGUNDO_PERIODO
      ? calcularDiasEntreFechas(FECHA_INICIO_SEGUNDO_PERIODO, hoy)
      : 0;
  const diasTranscurridos = diasPrimerPeriodo + diasSegundoPeriodo;

  const totalDescansos = diasDescanso.length;
  const valorDescansos = totalDescansos * VALOR_DESCANSO;

  const totalVacaciones = diasVacaciones.length;
  const valorVacaciones = totalVacaciones * VALOR_VACACIONES;

  const sumaAbonos = abonos.reduce((suma, abono) => suma + abono.monto, 0);
  const ingresosPorDias = diasTranscurridos * VALOR_DIA;

  const diasTrabajados = diasTranscurridos;

  const totalGeneral = valorDescansos + (vacacionesVisibles ? valorVacaciones : 0) + ingresosPorDias - sumaAbonos;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`p-4 rounded-lg shadow-lg flex items-center gap-2 text-white pointer-events-auto transform transition-all duration-300 animate-bounce-short ${
              toast.tipo === 'success' ? 'bg-emerald-500' :
              toast.tipo === 'warning' ? 'bg-amber-500 text-slate-900' :
              toast.tipo === 'danger' ? 'bg-rose-500' : 'bg-blue-500'
            }`}
          >
            <i className={`fas ${
              toast.tipo === 'success' ? 'fa-check-circle' :
              toast.tipo === 'warning' ? 'fa-exclamation-triangle' :
              toast.tipo === 'danger' ? 'fa-trash-alt' : 'fa-info-circle'
            }`}></i>
            <span className="font-medium text-sm">{toast.mensaje}</span>
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-8 bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-sm">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <i className="fas fa-calendar-alt text-blue-600"></i>
            Control de Trabajo y Finanzas
          </h1>
          <p className="text-gray-600 mt-1">Seguimiento interactivo de días trabajados, descansos y abonos</p>
        </div>

        {/* Switchers (View & Theme) */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center self-start md:self-center">
          {/* Selector de Vista (Cuadrícula / Tabla) */}
          <div className="bg-gray-200/80 dark:bg-slate-700/80 p-1.5 rounded-full flex gap-1 items-center shadow-inner">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                viewMode === 'grid' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md scale-105' : 'text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <i className="fas fa-th-large"></i> Cuadrícula
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                viewMode === 'list' ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md scale-105' : 'text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <i className="fas fa-table"></i> Tabla
            </button>
          </div>

          {/* Theme Pill Switcher */}
          <div className="bg-gray-200/80 dark:bg-slate-700/80 p-1.5 rounded-full flex gap-1 items-center shadow-inner">
            <button
              onClick={() => setTheme('light')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                theme === 'light' ? 'bg-white text-blue-600 shadow-md scale-105' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <i className="fas fa-sun mr-1"></i> Claro
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                theme === 'dark' ? 'bg-slate-900 text-blue-400 shadow-md scale-105' : 'text-gray-400 hover:text-slate-200'
              }`}
            >
              <i className="fas fa-moon mr-1"></i> Oscuro
            </button>
            <button
              onClick={() => setTheme('green')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                theme === 'green' ? 'bg-emerald-600 text-white shadow-md scale-105' : 'text-emerald-700 hover:text-emerald-950'
              }`}
            >
              <i className="fas fa-leaf mr-1"></i> Verde
            </button>
            <button
              onClick={() => setTheme('blue')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                theme === 'blue' ? 'bg-blue-900 text-white shadow-md scale-105' : 'text-blue-800 hover:text-blue-950'
              }`}
            >
              <i className="fas fa-briefcase mr-1"></i> Azul
            </button>
          </div>
        </div>
      </header>

      {/* Resumen General (Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-white rounded-2xl shadow-sm p-5 text-center transition-all duration-300">
          <div className="text-3xl font-bold dias-transcurridos pulse-gentle">{diasTranscurridos}</div>
          <div className="text-gray-600 font-medium mt-1">Días Transcurridos</div>
          <div className="text-xs text-gray-500 mt-1.5">Primer período + Segundo período</div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5 text-center transition-all duration-300">
          <div className="text-3xl font-bold descansos-card">{totalDescansos}</div>
          <div className="text-gray-600 font-medium mt-1">Días de Descanso</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1.5">{formatearMoneda(valorDescansos)}</div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5 text-center transition-all duration-300">
          <div className="text-3xl font-bold abonos-card">{formatearMoneda(sumaAbonos)}</div>
          <div className="text-gray-600 font-medium mt-1">Total Abonos</div>
          <div className="text-xs text-gray-500 mt-1.5">Recibidos a la fecha</div>
        </div>

        <div className={`bg-white rounded-2xl shadow-sm p-5 text-center transition-all duration-300 ${!vacacionesVisibles ? 'opacity-50' : ''}`}>
          <div className="text-3xl font-bold vacaciones-card">{vacacionesVisibles ? totalVacaciones : 0}</div>
          <div className="text-gray-600 font-medium mt-1">Días de Vacaciones</div>
          <div className="text-xs text-purple-600 font-semibold mt-1.5">
            {vacacionesVisibles ? formatearMoneda(valorVacaciones) : formatearMoneda(0)}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5 text-center transition-all duration-300">
          <div className="text-3xl font-bold ingresos-card">{formatearMoneda(ingresosPorDias)}</div>
          <div className="text-gray-600 font-medium mt-1">Ingresos por Días</div>
          <div className="text-xs text-gray-500 mt-1.5">Días transcurridos × $200</div>
        </div>
      </div>

      {/* Información de Fechas y Resumen Financiero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold flex items-center gap-2 mb-4 border-b pb-3">
            <i className="fas fa-play-circle text-emerald-500"></i>
            Información del Período
          </h2>
          <div className="space-y-3.5">
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-gray-600">Fecha de Inicio:</span>
              <span className="font-semibold text-emerald-600">17 de marzo, 2025</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-gray-600">Primer período final:</span>
              <span className="font-semibold text-emerald-600">20 de febrero, 2026</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-gray-600">Segundo período inicio:</span>
              <span className="font-semibold text-emerald-600">29 de junio, 2026</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-gray-600">Segundo período final:</span>
              <span className="font-semibold text-emerald-600">2 de septiembre, 2026</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-gray-600">Fecha Actual:</span>
              <span className="font-semibold text-blue-600">{formatHumanDate(new Date())}</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-gray-600">Días primer período:</span>
              <span className="font-bold text-slate-800 bg-gray-100 px-3 py-1 rounded-full">{diasPrimerPeriodo} días</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-gray-600">Días segundo período:</span>
              <span className="font-bold text-slate-800 bg-gray-100 px-3 py-1 rounded-full">{diasSegundoPeriodo} días</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-gray-600">Total días:</span>
              <span className="font-bold text-slate-800 bg-gray-100 px-3 py-1 rounded-full">{diasTranscurridos} días</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-gray-600">Días Trabajados (Neto):</span>
              <span className="font-bold text-slate-800 bg-gray-100 px-3 py-1 rounded-full">{diasTrabajados} días</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold flex items-center gap-2 mb-4 border-b pb-3">
            <i className="fas fa-calculator text-blue-500"></i>
            Resumen Financiero
          </h2>
          <div className="space-y-3.5">
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-gray-600">Valor por Descanso:</span>
              <span className="font-semibold text-blue-600">$400</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-gray-600">Valor por Día:</span>
              <span className="font-semibold text-blue-600">$200</span>
            </div>
            <div className="flex justify-between items-center border-t pt-3 mt-4">
              <span className="text-slate-800 font-bold text-base md:text-lg">Total General:</span>
              <span className="font-bold total-general text-xl pulse-gentle">
                {formatearMoneda(totalGeneral)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Panel de Control (Formularios) */}
      <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-slate-800/40 dark:to-slate-700/40 rounded-2xl shadow-sm p-6 mb-8 border border-blue-100/50 dark:border-slate-700">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
          <i className="fas fa-cogs text-blue-500"></i>
          Panel de Control
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Agregar Descanso */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <i className="fas fa-plus-circle text-emerald-500"></i>
              Agregar Día de Descanso
            </h3>
            <div className="flex gap-2">
              <input
                type="date"
                value={nuevaFechaDescanso}
                onChange={(e) => setNuevaFechaDescanso(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAgregarDescanso()}
                className="flex-1 px-3.5 py-2 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleAgregarDescanso}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          {/* Agregar Abono */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <i className="fas fa-hand-holding-usd text-blue-500"></i>
              Registrar Nuevo Abono
            </h3>
            <div className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="date"
                  value={nuevaFechaAbono}
                  onChange={(e) => setNuevaFechaAbono(e.target.value)}
                  className="px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Monto ($)"
                  value={nuevoMontoAbono}
                  onChange={(e) => setNuevoMontoAbono(e.target.value)}
                  className="px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Nota (ej. escuela, pizzas, etc.)"
                  value={nuevaNotaAbono}
                  onChange={(e) => setNuevaNotaAbono(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAgregarAbono()}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleAgregarAbono}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors flex items-center justify-center cursor-pointer"
                >
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Días de Descanso */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-4 border-b pb-3">
          <i className="fas fa-bed text-purple-600"></i>
          <span>Días de Descanso ({totalDescansos} días × $400 = {formatearMoneda(valorDescansos)})</span>
        </h2>
        {diasDescanso.length === 0 ? (
          <p className="text-gray-500 italic py-4 text-center">No hay días de descanso registrados.</p>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {diasDescanso.map((fechaStr, index) => {
              const fecha = stringToDate(fechaStr);
              return (
                <div
                  key={index}
                  className="descanso-item rounded-xl p-3 text-center animate-fade-in relative group transition-all"
                >
                  <button
                    onClick={() => handleEliminarDescanso(fechaStr)}
                    className="absolute -top-1.5 -right-1.5 bg-rose-500 hover:bg-rose-600 text-white w-5 h-5 rounded-full text-[10px] items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer shadow-md hidden sm:flex"
                    title="Eliminar descanso"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  {/* Para móviles, el botón es visible siempre */}
                  <button
                    onClick={() => handleEliminarDescanso(fechaStr)}
                    className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center sm:hidden shadow-md cursor-pointer"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <div className="text-xs font-semibold md:text-sm">{formatHumanDate(fecha)}</div>
                  <div className="text-xs mt-1 font-bold opacity-80">{formatearMoneda(VALOR_DESCANSO)}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-200/60 dark:border-slate-700/60 shadow-sm">
            <table className="w-full text-left border-collapse bg-white dark:bg-slate-800">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                  <th className="py-3 px-4 w-12 text-center">#</th>
                  <th className="py-3 px-4">Fecha</th>
                  <th className="py-3 px-4 text-right">Monto</th>
                  <th className="py-3 px-4 text-center w-24">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-150 dark:divide-slate-700/50 text-sm">
                {diasDescanso.map((fechaStr, index) => {
                  const fecha = stringToDate(fechaStr);
                  return (
                    <tr key={index} className="hover:bg-gray-50/50 dark:hover:bg-slate-700/20 transition-colors">
                      <td className="py-3 px-4 text-center font-medium text-gray-400">{index + 1}</td>
                      <td className="py-3 px-4 font-semibold text-gray-800 dark:text-slate-200">{formatHumanDate(fecha)}</td>
                      <td className="py-3 px-4 text-right font-bold text-purple-600 dark:text-purple-400">{formatearMoneda(VALOR_DESCANSO)}</td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleEliminarDescanso(fechaStr)}
                          className="bg-rose-50 hover:bg-rose-100 dark:bg-rose-500/10 dark:hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors inline-flex items-center gap-1"
                          title="Eliminar descanso"
                        >
                          <i className="fas fa-trash-alt"></i> <span>Eliminar</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Lista de Días de Vacaciones */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
        <div className="flex justify-between items-center mb-4 border-b pb-3">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <i className="fas fa-umbrella-beach text-orange-500"></i>
            <span>Días de Vacaciones ({totalVacaciones} días × $600 = {formatearMoneda(valorVacaciones)})</span>
          </h2>
          <button
            onClick={() => setVacacionesVisibles(!vacacionesVisibles)}
            id="toggle-vacaciones"
            className="text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <i className={`fas ${vacacionesVisibles ? 'fa-eye-slash' : 'fa-eye'}`} id="icono-toggle"></i>
            <span>{vacacionesVisibles ? 'Ocultar' : 'Mostrar'}</span>
          </button>
        </div>

        {vacacionesVisibles && (
          <div>
            <p className="text-xs text-gray-500 mb-4 bg-gray-50 dark:bg-slate-700/50 p-2.5 rounded-lg border border-gray-150 dark:border-slate-600">
              <i className="fas fa-info-circle text-orange-400 mr-1.5"></i>
              Período de vacaciones: Del 15 de septiembre al 7 de octubre, 2025.
            </p>
            {diasVacaciones.length === 0 ? (
              <p className="text-gray-500 italic py-2 text-center text-sm">No hay días de vacaciones configurados.</p>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {diasVacaciones.map((fechaStr, index) => {
                  const fecha = stringToDate(fechaStr);
                  return (
                    <div
                      key={index}
                      className="vacaciones-item rounded-xl p-3 text-center animate-fade-in"
                    >
                      <div className="text-xs font-semibold md:text-sm">{formatHumanDate(fecha)}</div>
                      <div className="text-xs mt-1 font-bold opacity-80">{formatearMoneda(VALOR_VACACIONES)}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-gray-200/60 dark:border-slate-700/60 shadow-sm">
                <table className="w-full text-left border-collapse bg-white dark:bg-slate-800">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                      <th className="py-3 px-4 w-12 text-center">#</th>
                      <th className="py-3 px-4">Fecha</th>
                      <th className="py-3 px-4 text-right">Monto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 dark:divide-slate-700/50 text-sm">
                    {diasVacaciones.map((fechaStr, index) => {
                      const fecha = stringToDate(fechaStr);
                      return (
                        <tr key={index} className="hover:bg-gray-50/50 dark:hover:bg-slate-700/20 transition-colors">
                          <td className="py-3 px-4 text-center font-medium text-gray-400">{index + 1}</td>
                          <td className="py-3 px-4 font-semibold text-gray-800 dark:text-slate-200">{formatHumanDate(fecha)}</td>
                          <td className="py-3 px-4 text-right font-bold text-orange-600 dark:text-orange-400">{formatearMoneda(VALOR_VACACIONES)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Registro de Abonos */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-4 border-b pb-3">
          <i className="fas fa-money-bill-wave text-emerald-500"></i>
          <span>Registro de Abonos (Total: {formatearMoneda(sumaAbonos)})</span>
        </h2>
        {abonos.length === 0 ? (
          <p className="text-gray-500 italic py-4 text-center">No hay abonos registrados.</p>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {abonos.map((abono, index) => {
              const fecha = stringToDate(abono.fecha);
              return (
                <div
                  key={index}
                  className="abono-item rounded-xl p-4 flex justify-between items-center animate-fade-in relative group transition-all"
                >
                  <button
                    onClick={() => handleEliminarAbono(index, abono)}
                    className="absolute -top-1.5 -right-1.5 bg-rose-500 hover:bg-rose-600 text-white w-5.5 h-5.5 rounded-full text-[10px] items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer shadow-md hidden sm:flex"
                    title="Eliminar abono"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <button
                    onClick={() => handleEliminarAbono(index, abono)}
                    className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white w-5.5 h-5.5 rounded-full text-[10px] flex items-center justify-center sm:hidden shadow-md cursor-pointer"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <div className="flex-1 pr-4">
                    <div className="font-semibold text-xs md:text-sm">{formatHumanDate(fecha)}</div>
                    {abono.nota && (
                      <div className="text-xs mt-1.5 italic opacity-85 leading-relaxed bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded border-l-2 border-emerald-400">
                        {abono.nota}
                      </div>
                    )}
                  </div>
                  <div className="text-base md:text-lg font-bold whitespace-nowrap">
                    {formatearMoneda(abono.monto)}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-200/60 dark:border-slate-700/60 shadow-sm">
            <table className="w-full text-left border-collapse bg-white dark:bg-slate-800">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                  <th className="py-3 px-4 w-12 text-center">#</th>
                  <th className="py-3 px-4">Fecha</th>
                  <th className="py-3 px-4">Nota / Concepto</th>
                  <th className="py-3 px-4 text-right">Monto</th>
                  <th className="py-3 px-4 text-center w-24">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-150 dark:divide-slate-700/50 text-sm">
                {abonos.map((abono, index) => {
                  const fecha = stringToDate(abono.fecha);
                  return (
                    <tr key={index} className="hover:bg-gray-50/50 dark:hover:bg-slate-700/20 transition-colors">
                      <td className="py-3 px-4 text-center font-medium text-gray-400">{index + 1}</td>
                      <td className="py-3 px-4 font-semibold text-gray-800 dark:text-slate-200">{formatHumanDate(fecha)}</td>
                      <td className="py-3 px-4">
                        {abono.nota ? (
                          <span className="italic text-gray-600 dark:text-slate-300 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded border-l-2 border-emerald-400 block text-xs leading-relaxed max-w-md">
                            {abono.nota}
                          </span>
                        ) : (
                          <span className="text-gray-400 italic text-xs">Sin nota</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-emerald-600 dark:text-emerald-400">{formatearMoneda(abono.monto)}</td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleEliminarAbono(index, abono)}
                          className="bg-rose-50 hover:bg-rose-100 dark:bg-rose-500/10 dark:hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors inline-flex items-center gap-1"
                          title="Eliminar abono"
                        >
                          <i className="fas fa-trash-alt"></i> <span>Eliminar</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
