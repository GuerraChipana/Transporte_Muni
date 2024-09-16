import { BrowserRouter, Routes, Route } from "react-router-dom";
import Interfas_user from "./pages/Interfas_user";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/interfas_user" element={<Interfas_user />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
