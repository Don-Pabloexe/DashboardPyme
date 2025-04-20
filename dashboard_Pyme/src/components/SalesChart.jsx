import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  import { Bar } from 'react-chartjs-2';
  
  // Registrar módulos para que Chart.js funcione correctamente
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
  const SalesChart = () => {
    // Etiquetas de los meses
    const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
  
    // Datos aleatorios simulados
    const data = {
      labels,
      datasets: [
        {
          label: 'Ventas Mensuales ($)',
          data: labels.map(() => Math.floor(Math.random() * 10000000) + 1000000),
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderRadius: 5,
        },
      ],
    };
  
    // Opciones del gráfico
    const options = {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: {
          display: true,
          text: 'Simulación de Ventas por Mes',
          font: { size: 18 }
        },
      },
    };
  
    return <Bar options={options} data={data} />;
  };
  
  export default SalesChart;
  