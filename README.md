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



## 🧠 Autor
Pablo Gómez Quidel

⚙️ Cómo instalar y ejecutar el proyecto
Clonar el repositorio

bash
Copiar
Editar
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
Instalar las dependencias

Asegúrate de tener instalado Node.js (preferiblemente versión 18 o superior).

Luego ejecuta:

bash
Copiar
Editar
npm install
Ejecutar el proyecto en modo desarrollo

bash
Copiar
Editar
npm run dev
Abrir la aplicación

Una vez que el servidor esté corriendo, abre tu navegador y entra en:

arduino
Copiar
Editar
http://localhost:5173/
💬 Notas adicionales
El proyecto no tiene conexión real a un backend; los datos son simulados dinámicamente en el frontend.

Cada vez que cambias el filtro de fecha, los gráficos, KPIs y tablas se actualizan automáticamente simulando diferentes períodos de tiempo.

Si deseas generar una versión para producción, puedes ejecutar:

bash
Copiar
Editar
npm run build

