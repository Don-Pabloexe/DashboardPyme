import { useContext } from "react";
import { DateContext } from "../context/DataContext";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart = () => {
  const { selectedDate } = useContext(DateContext);

  const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];

  const generateData = () => {
    switch (selectedDate) {
      case "Marzo 2025":
        return labels.map(() => Math.floor(Math.random() * 10000000) + 500000);
      case "Abril 2025":
        return labels.map(() => Math.floor(Math.random() * 5000000) + 100000);
      case "Mayo 2025":
        return labels.map(() => Math.floor(Math.random() * 8000000) + 300000);
      default:
        return [];
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: `Ventas (${selectedDate})`,
        data: generateData(),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: `Ventas Mensuales - ${selectedDate}` },
    },
  };

  return <Bar options={options} data={data} />;
};

export default SalesChart;
