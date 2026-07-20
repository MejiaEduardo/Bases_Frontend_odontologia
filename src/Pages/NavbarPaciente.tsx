import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import ConfirmarLogout from './ConfirmarLogout'

function NavbarPaciente() {
  const navigate = useNavigate()
  const [showLogout, setShowLogout] = useState(false)   // controla el modal de confirmacion

  // Se ejecuta al confirmar "Cerrar sesion" en el modal
  const handleLogout = () => {
    // ==== BACKEND ====
    // Logica original del amigo (para empleados avisa al servidor, y limpia la sesion):
    // if (rol === "DOCTOR" || rol === "RECEPCIONISTA") { logoutService(idEmpleado) }
    // localStorage.removeItem("token")
    // localStorage.removeItem("user")
    // ==== FIN BACKEND ====

    // Por ahora (sin auth real) solo redirige a la landing
    navigate("/")
  }

  return (
    <nav className="bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Nombre de la clinica (a la izquierda) */}
      <Link to="/home/paciente" className="text-lg font-bold text-cyan-600">
        Clínica Dental
      </Link>

      {/* Links de navegacion (al centro/derecha) */}
      <div className="flex items-center gap-6">
        <Link to="/home/paciente" className="text-sm text-gray-600 hover:text-cyan-600">
          Inicio
        </Link>
        <Link to="/Historial" className="text-sm text-gray-600 hover:text-cyan-600">
          Historial
        </Link>
        <Link to="/perfil" className="text-sm text-gray-600 hover:text-cyan-600">
          Perfil
        </Link>

        {/* Boton de cerrar sesion: abre el modal de confirmacion */}
        <button
          onClick={() => setShowLogout(true)}
          className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600"
        >
          <LogOut className="w-4 h-4" />
          Cerrar sesión
        </button>
      </div>

      {/* Modal de confirmacion (solo aparece cuando showLogout es true) */}
      {showLogout && (
        <ConfirmarLogout
          onConfirmar={handleLogout}
          onCancelar={() => setShowLogout(false)}
        />
      )}
    </nav>
  )
}

export default NavbarPaciente