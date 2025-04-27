import { useContext } from "react";
import { DateContext } from "../context/DataContext";

const Home = () => {
  const { selectedDate } = useContext(DateContext);

  // Simular datos cambiando según fecha
  const ventas = selectedDate === "Marzo 2025" ? 24000000 : selectedDate === "Abril 2025" ? 18000000 : 21000000;
  const clientes = selectedDate === "Marzo 2025" ? 48 : selectedDate === "Abril 2025" ? 38 : 45;
  const inventario = selectedDate === "Marzo 2025" ? 12 : selectedDate === "Abril 2025" ? 9 : 15;
  const margen = selectedDate === "Marzo 2025" ? 18 : selectedDate === "Abril 2025" ? 14 : 20;
  const ingresos = selectedDate === "Marzo 2025" ? 18000000 : selectedDate === "Abril 2025" ? 12000000 : 15000000;

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Dashboard de Negocios</h1>

      <div className="alert alert-success text-center">
        Datos correspondientes a {selectedDate}.
      </div>

      <div className="row g-4 justify-content-center">
        {/* Tarjeta 1 */}
        <div className="col-md-4">
          <div className="card text-white bg-primary shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Ventas del Mes</h5>
              <p className="card-text fs-4">${ventas.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="col-md-4">
          <div className="card text-white bg-success shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Clientes Nuevos</h5>
              <p className="card-text fs-4">{clientes}</p>
            </div>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="col-md-4">
          <div className="card text-white bg-warning shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Inventario Crítico</h5>
              <p className="card-text fs-4">{inventario} Productos</p>
            </div>
          </div>
        </div>

        {/* Tarjeta 4 */}
        <div className="col-md-4">
          <div className="card text-white bg-info shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Margen de Ganancia</h5>
              <p className="card-text fs-4">{margen}%</p>
            </div>
          </div>
        </div>

        {/* Tarjeta 5 */}
        <div className="col-md-4">
          <div className="card text-white bg-dark shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Ingresos Netos</h5>
              <p className="card-text fs-4">${ingresos.toLocaleString()}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
