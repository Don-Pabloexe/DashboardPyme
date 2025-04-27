const DataTable = () => {
    return (
      <div className="table-responsive mt-4">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Fecha</th>
              <th>Venta ($)</th>
              <th>Cliente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/04/2025</td>
              <td>1,200,000</td>
              <td>Empresa A</td>
            </tr>
            <tr>
              <td>05/04/2025</td>
              <td>850,000</td>
              <td>Empresa B</td>
            </tr>
            <tr>
              <td>10/04/2025</td>
              <td>1,600,000</td>
              <td>Empresa C</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default DataTable;
  