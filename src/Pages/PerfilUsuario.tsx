import { useNavigate } from 'react-router-dom'
import { User, Mail, Phone, IdCard, Calendar } from 'lucide-react'
import { useState } from 'react'
import EditarPerfilModal from './EditarPerfilModal'

function PerfilUsuario() {
  const navigate = useNavigate()
  const [showEditar, setShowEditar] = useState(false)   // controla si el modal está abierto

  // Datos de ejemplo (mientras no hay backend)
  const paciente = {
    nombre: "Eduardo",
    apellido: "Mejia",
    correo: "eduardomejia66ee@gmail.com",
    telefono: "98745612",
    dni: "0806200300324",
    direccion: "Santa Fe",
    creado: "2025-11-27",
  }

  return (
    // Fondo gris que ocupa toda la pantalla
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Contenedor centrado que limita el ancho */}
      <div className="max-w-4xl mx-auto">

        <h1 className="text-2xl font-bold text-gray-800 mb-4">Perfil de Usuario</h1>

        {/* Tarjeta blanca que contiene las dos columnas */}
        <div className="bg-white rounded-xl shadow-md p-6">
          {/* grid de 3 columnas: la izquierda ocupa 1, la derecha ocupa 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* ===== COLUMNA IZQUIERDA (tarjeta oscura) ===== */}
            <div className="bg-gray-800 text-white rounded-xl p-5 flex flex-col">

              {/* Boton regresar: vuelve a la pantalla anterior */}
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-4"
              >
                <ArrowLeftIcon />
                Regresar
              </button>

              {/* Avatar (circulo con icono de persona) + nombre */}
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center mb-3">
                  <User className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg font-semibold">
                  {paciente.nombre} {paciente.apellido}
                </p>
              </div>

              {/* Lista de datos con iconos (separada por una linea arriba) */}
              <div className="space-y-3 text-sm text-gray-300 border-t border-gray-700 pt-4">
                <p className="flex items-center gap-2 break-all">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {paciente.correo}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {paciente.telefono}
                </p>
                <p className="flex items-center gap-2">
                  <IdCard className="w-4 h-4 flex-shrink-0" />
                  DNI: {paciente.dni}
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  Creado: {paciente.creado}
                </p>
              </div>

              {/* Botón para abrir el modal de edición */}
              <button
                onClick={() => setShowEditar(true)}
                className="mt-4 text-sm text-gray-300 hover:text-white underline"
              >
                Cambiar contraseña
              </button>
            </div>

            {/* ===== COLUMNA DERECHA (Informacion General) ===== */}
            {/* md:col-span-2 = ocupa 2 de las 3 columnas del grid */}
            <div className="md:col-span-2 p-2">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Información General</h2>

              {/* grid de 2 columnas para los 6 datos */}
              <div className="grid grid-cols-2 gap-6">

                <div>
                  <p className="text-sm text-gray-400">Nombre</p>
                  <p className="font-semibold text-gray-800">{paciente.nombre}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Apellido</p>
                  <p className="font-semibold text-gray-800">{paciente.apellido}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Correo</p>
                  <p className="font-semibold text-gray-800">{paciente.correo}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Teléfono</p>
                  <p className="font-semibold text-gray-800">{paciente.telefono}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">DNI</p>
                  <p className="font-semibold text-gray-800">{paciente.dni}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Dirección</p>
                  <p className="font-semibold text-gray-800">{paciente.direccion}</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Modal de edición (solo aparece cuando showEditar es true) */}
      {showEditar && (
        <EditarPerfilModal
          paciente={paciente}
          onGuardar={() => setShowEditar(false)}
          onClose={() => setShowEditar(false)}
        />
      )}
    </div>
  )
}

// Icono de flecha para el boton Regresar
function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

export default PerfilUsuario