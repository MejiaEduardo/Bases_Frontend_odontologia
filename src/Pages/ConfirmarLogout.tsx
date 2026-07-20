import { LogOut } from 'lucide-react'

// Recibe dos funciones: confirmar (cerrar sesion) y cancelar (cerrar el modal)
function ConfirmarLogout({ onConfirmar, onCancelar }) {
  return (
    // Fondo oscuro que cubre toda la pantalla
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      {/* Caja blanca del modal */}
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">

        {/* Icono + texto */}
        <div className="flex items-start gap-4">
          {/* Circulo rojo con icono de salir */}
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <LogOut className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">¿Cerrar sesión?</h3>
            <p className="mt-1 text-sm text-gray-500">
              Tu sesión actual se cerrará y deberás volver a iniciar sesión.
            </p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onCancelar}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirmar}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        </div>

      </div>
    </div>
  )
}

export default ConfirmarLogout