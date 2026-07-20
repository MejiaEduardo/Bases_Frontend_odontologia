import { Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import Registro from './Pages/Registro'
import Dashboard from './Pages/Dashboard'
import CrearCita from './Pages/CrearCita'
import EstadosCita from './Pages/EstadosCita'
import OpcionesCitas from './Pages/OpcionesCitas'
import HistorialClinico from './Pages/HistorialClinico'
import PerfilUsuario from './Pages/PerfilUsuario'
import HomePaciente from "./Pages/HomePaciente";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/crear-cita" element={<CrearCita />} />
      <Route path="/estados-cita" element={<EstadosCita />} />
      <Route path="/opciones-citas" element={<OpcionesCitas />} />
      <Route path="/Historial" element={<HistorialClinico />} />
      <Route path="/perfil" element={<PerfilUsuario />} />
      <Route path="/home/paciente" element={<HomePaciente />} />
    </Routes>
  )
}

export default App