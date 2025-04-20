const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Dashboard de Negocios</h1>

      <div className="row g-4 justify-content-center">
        <div className="col-md-4">
          <div className="card text-white bg-primary shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Ventas del Mes</h5>
              <p className="card-text fs-4">$24.000.000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Clientes Nuevos</h5>
              <p className="card-text fs-4">48</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-warning shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Inventario Crítico</h5>
              <p className="card-text fs-4">12 Productos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
