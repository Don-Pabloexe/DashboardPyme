# 📊 BizVision: Dashboard Inteligente para PYMES

Este proyecto es un **Prototipo Mínimo Navegable (PMN)** desarrollado usando **React + Vite**, con diseño responsivo usando **Bootstrap** y gráficos dinámicos con **Chart.js**.  
Está pensado como una solución ligera de Business Intelligence para pequeñas y medianas empresas (PYMES).

## 🚀 Funcionalidades principales

- Navegación fluida entre pantallas: Inicio, Métricas y Perfil.
- Filtro de fechas en el Navbar que actualiza dinámicamente todos los datos.
- Visualización de KPIs clave como Ventas, Clientes Nuevos, Inventario Crítico, Margen de Ganancia e Ingresos Netos.
- Gráficos interactivos de ventas mensuales y clientes nuevos por mes.
- Tabla de datos simulados, adaptable según la fecha.
- Diseño responsivo y limpio basado en Bootstrap.

## 🛠️ Tecnologías utilizadas

- **React + Vite** para la construcción de la aplicación.
- **Bootstrap 5** para los estilos responsivos.
- **Chart.js** y **react-chartjs-2** para la creación de gráficos dinámicos.
- **Context API de React** para manejar el estado del filtro de fecha globalmente.

## 📋 Estructura de carpetas

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── SalesChart.jsx
│   ├── SecondChart.jsx
│   ├── DataTable.jsx
├── pages/
│   ├── Home.jsx
│   ├── Metrics.jsx
│   ├── Profile.jsx
├── context/
│   ├── DateContext.jsx
├── App.jsx
├── main.jsx


