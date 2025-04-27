import SalesChart from "../components/SalesChart";
import DataTable from "../components/DataTable";
import SecondChart from "../components/SecondChart";

const Metrics = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Métricas Detalladas</h1>

      <div className="card p-4 shadow mb-4" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SalesChart />
      </div>

      <div className="card p-4 shadow mb-4" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SecondChart />
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Datos Detallados</h5>
        <button className="btn btn-primary">Exportar Datos</button>
      </div>

      <DataTable />
    </div>
  );
};

export default Metrics;
