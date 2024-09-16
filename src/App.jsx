import { BrowserRouter, Routes, Route } from "react-router-dom";
import Interfas_user from "./pages/Interfas_user";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Propietarios from "./Secciones/Propietarios";
import Registro_sistema from "./Secciones/Registro_sistema";
import Seguro_vehicular from "./Secciones/Seguro_vehicular";
import Usuario from "./Secciones/Usuarios";
import Vehiculos from "./Secciones/Vehiculos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Propietarios" element={<Propietarios />} />
          <Route path="Registro_sistema" element={<Registro_sistema />} />
          <Route path="Seguro_vehicular" element={<Seguro_vehicular />} />
          <Route path="Usuario" element={<Usuario />} />
          <Route path="Vehiculos" element={<Vehiculos />} />
        </Route>
        <Route path="/interfas_user" element={<Interfas_user />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
