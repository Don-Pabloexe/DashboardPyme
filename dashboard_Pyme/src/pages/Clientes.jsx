import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [form, setForm] = useState({ nombre: "", correo: "", empresa: "" });
  const [modoEdicion, setModoEdicion] = useState(false);
  const [clienteEditando, setClienteEditando] = useState(null);

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("clientes")) || [];
    setClientes(guardados);
  }, []);

  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }, [clientes]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.correo || !form.empresa) return alert("Completa todos los campos");

    if (modoEdicion) {
      const actualizados = clientes.map((c) =>
        c.id === clienteEditando ? { ...c, ...form } : c
      );
      setClientes(actualizados);
      setModoEdicion(false);
      setClienteEditando(null);
    } else {
      const nuevoCliente = { id: Date.now(), ...form };
      setClientes([...clientes, nuevoCliente]);
    }
    setForm({ nombre: "", correo: "", empresa: "" });
  };

  const eliminarCliente = (id) => {
    const confirm = window.confirm("¿Seguro que deseas eliminar este cliente?");
    if (confirm) {
      setClientes(clientes.filter((c) => c.id !== id));
    }
  };

  const editarCliente = (cliente) => {
    setForm({ nombre: cliente.nombre, correo: cliente.correo, empresa: cliente.empresa });
    setModoEdicion(true);
    setClienteEditando(cliente.id);
  };

  const headers = [
    { label: "Nombre", key: "nombre" },
    { label: "Correo", key: "correo" },
    { label: "Empresa", key: "empresa" }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Gestión de Clientes</h2>

      <form className="row g-3 mb-4" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <input
            type="email"
            className="form-control"
            name="correo"
            placeholder="Correo"
            value={form.correo}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            name="empresa"
            placeholder="Empresa"
            value={form.empresa}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary w-100">
            {modoEdicion ? "✔" : "+"}
          </button>
        </div>
      </form>

      <div className="d-flex justify-content-end mb-3">
        <CSVLink
          data={clientes}
          headers={headers}
          filename="clientes.csv"
          className="btn btn-success"
        >
          Exportar CSV
        </CSVLink>
      </div>

      {clientes.length === 0 ? (
        <p className="text-center text-muted">No hay clientes registrados.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark text-center">
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Empresa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nombre}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.empresa}</td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => editarCliente(cliente)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => eliminarCliente(cliente.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clientes;
