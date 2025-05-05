import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Metrics from "./pages/Metrics";
import Profile from "./pages/Profile"; // <-- Importa el nuevo
import Clientes from "./pages/Clientes";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/clientes" element={<Clientes />} />

        </Routes>
      </div>

      {/* Footer bonito */}
      <footer className="bg-light text-center py-3 mt-5">
        © 2025 BizVision - Todos los derechos reservados
      </footer>
    </Router>
  );
}

export default App;
