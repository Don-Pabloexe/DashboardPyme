import { Link } from "react-router-dom";
import { useContext } from "react";
import { DateContext } from "../context/DataContext";

const Navbar = () => {
  const { selectedDate, setSelectedDate } = useContext(DateContext);

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">BizVision</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/metrics">Métricas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clientes">Clientes</Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <select className="form-select me-3" style={{ width: '150px' }} value={selectedDate} onChange={handleChange}>
            <option>Marzo 2025</option>
            <option>Abril 2025</option>
            <option>Mayo 2025</option>
          </select>
          <span className="navbar-text">Usuario: Admin</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
