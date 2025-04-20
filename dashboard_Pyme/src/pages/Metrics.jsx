import SalesChart from "../components/SalesChart";

const Metrics = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Métricas Detalladas</h1>

      <div className="card p-4 shadow mb-4" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SalesChart />
      </div>

      <div className="alert alert-secondary text-center">
        Este gráfico es interactivo y muestra datos generados aleatoriamente.
      </div>
    </div>
  );
};

export default Metrics;
