# Control de Trabajo y Finanzas (React + Vite)

Una aplicación web interactiva y moderna para el seguimiento y control de días trabajados, descansos y abonos financieros.

---

## 🎯 Objetivo del Proyecto

Esta aplicación permite monitorear y calcular automáticamente:
- **Días transcurridos** desde el inicio del período laboral (17 de marzo de 2025).
- **Días de descanso** tomados y su valor acumulado.
- **Abonos (pagos) recibidos** y su saldo restante.
- **Cálculo de ingresos netos** y balance financiero en tiempo real.

---

## ✅ Características Clave (Versión React)

### 📊 Dashboard Dinámico
- **Métricas clave:** Tarjetas visuales interactivas para días transcurridos, descansos, abonos totales, vacaciones e ingresos por días.
- **Reactividad total:** La interfaz se actualiza al instante cuando agregas o eliminas un registro sin necesidad de recargar la página.
- **Cálculos automáticos:** Recalcula de forma precisa el total general considerando ingresos, descansos, abonos y el estado de visibilidad del período vacacional.

### 💾 Persistencia Local (LocalStorage)
- Todos tus registros (días de descanso, abonos agregados y el tema activo) se guardan automáticamente en el navegador. **No perderás tus datos al recargar o cerrar la página**.

### 🎛️ Panel de Control Interactivo
- **Agregar Descansos:** Selecciona una fecha del calendario y añádela al instante.
- **Registrar Abonos:** Formulario interactivo para ingresar la fecha, el monto en pesos y una nota descriptiva de cada pago.
- **Eliminación Directa:** Cada descanso y abono listado cuenta con un botón para eliminarlo (`x`), permitiendo corregir errores de captura inmediatamente.

### 🎨 Selector de Temas Incorporado
Control en el encabezado para cambiar el diseño visual de la aplicación en tiempo real:
- **Clásico:** Degradado azul/morado original.
- **Oscuro:** Interfaz optimizada para baja luminosidad.
- **Verde:** Tonos verdes frescos de tipo ecológico/naturaleza.
- **Azul:** Estilo profesional y corporativo.

---

## 🛠️ Tecnologías Utilizadas

- **React 19:** Biblioteca base para la creación de componentes reactivos.
- **Vite:** Herramienta de compilación ultrarrápida para desarrollo frontend.
- **Tailwind CSS v4:** Framework de utilidades CSS moderno e integrado nativamente.
- **Font Awesome 6:** Iconografía premium para todas las secciones.
- **Local Storage API:** Almacenamiento local directo en el cliente.

---

## 📁 Estructura del Proyecto

```text
/
├── index.html          # Punto de entrada HTML5 y carga de fuentes/iconos
├── package.json        # Dependencias y scripts de ejecución de Node.js
├── vite.config.js      # Configuración de Vite con plugins de React y Tailwind v4
├── src/
│   ├── main.jsx        # Punto de entrada de renderizado React
│   ├── App.jsx         # Componente principal (Lógica de estados, cálculos y UI)
│   └── index.css       # Configuración global de Tailwind v4 y variables de tema
└── public/             # Recursos estáticos (iconos, favicon)
```

---

## 🚀 Cómo Iniciar en Modo Desarrollo

Para ejecutar el proyecto en tu entorno local (ej. Termux u otra terminal):

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *Esto iniciará el servidor de Vite y te dará una URL local (ej. `http://localhost:5173`) para abrirla en tu navegador.*

3. **Construir para producción (Build):**
   ```bash
   npm run build
   ```
   *Generará una versión altamente optimizada en la carpeta `/dist/` lista para ser desplegada en cualquier servidor estático (ej. GitHub Pages).*

---

## 📋 Reglas Financieras y Valores Base

- **Fecha de Inicio del Período:** 17 de marzo de 2025.
- **Valor por Día de Descanso:** $400 MXN.
- **Valor por Día Regular:** $200 MXN.
- **Valor por Día de Vacaciones:** $600 MXN (Período: 15 de septiembre al 7 de octubre de 2025).
- **Fórmula de Total General:**
  $$\text{Total} = (\text{Descansos} \times \$400) + (\text{Vacaciones} \times \$600 \text{ [si están visibles]}) + (\text{Días Transcurridos} \times \$200) - \text{Abonos}$$

---

**Desarrollado con ❤️ para un control financiero ágil, móvil y moderno.**