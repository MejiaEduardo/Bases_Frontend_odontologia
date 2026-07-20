import { useState } from 'react'

// Mismos regex de validacion que usa el EditarPacienteModal del amigo
const regex = {
  // Contraseña: min 8 caracteres, al menos una mayuscula, un numero y un simbolo
  password: /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
  // DNI: exactamente 13 digitos
  dni: /^\d{13}$/,
  // Telefono: exactamente 8 digitos
  telefono: /^\d{8}$/,
  // Direccion: al menos 5 caracteres
  direccion: /^[a-zA-Z0-9\s.,#'\-]{5,}$/,
}

// Recibe el paciente actual, y dos funciones: guardar y cerrar
function EditarPerfilModal({ paciente, onGuardar, onClose }) {
  // El formulario arranca con los datos actuales del paciente
  const [form, setForm] = useState({
    dni: paciente.dni,
    telefono: paciente.telefono,
    direccion: paciente.direccion,
    password: "",   // la contraseña arranca vacia
  })

  // Guarda los mensajes de error de cada campo
  const [errors, setErrors] = useState({})

  // Se ejecuta cada vez que escribis en un input (validacion en vivo)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })   // actualiza el campo que cambio

    // Revisa si ese campo cumple su regex
    const pattern = regex[name]
    let error = ""
    if (value.length > 0 && !pattern.test(value)) {
      if (name === "password") error = "Min. 8 caracteres, con Mayuscula, numero y simbolo."
      else if (name === "dni") error = "El DNI debe tener exactamente 13 digitos."
      else if (name === "telefono") error = "El Telefono debe tener exactamente 8 digitos."
      else if (name === "direccion") error = "La Direccion debe tener minimo 5 caracteres."
    }
    setErrors({ ...errors, [name]: error })
  }

  // Se ejecuta al apretar "Guardar cambios"
  const handleSubmit = () => {
    // Revisa todos los campos que se llenaron
    const nuevosErrores = {}
    for (const campo of ["dni", "telefono", "direccion", "password"]) {
      const valor = form[campo]
      if (!valor) continue   // si esta vacio, no se valida
      if (!regex[campo].test(valor)) {
        nuevosErrores[campo] = "Formato incorrecto"
      }
    }

    setErrors(nuevosErrores)
    if (Object.keys(nuevosErrores).length > 0) return   // si hay errores, no guarda

    // ==== BACKEND ====
    // Aqui iria el envio real al servidor con los cambios:
    // await axios.put("http://localhost:3000/api/pacientes/mi-perfil", form)
    // ==== FIN BACKEND ====

    // Simulado por ahora
    console.log("Cambios a guardar:", form)
    alert("Cambios guardados (simulado)")

    onGuardar(form)   // avisa a la pagina que se guardo
  }

  // Estilo del input: borde rojo si tiene error, normal si no
  const inputClass = (campo) =>
    `mt-1 w-full p-2 border rounded-lg ${errors[campo] ? "border-red-500" : "focus:border-cyan-500"}`

  return (
    // Fondo oscuro que cubre toda la pantalla
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      {/* La caja blanca del modal */}
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Editar Perfil</h2>

        <div className="space-y-4">

          {/* Correo (deshabilitado, no se puede editar) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo</label>
            <input
              type="email"
              value={paciente.correo}
              disabled
              className="mt-1 w-full p-2 border rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña (dejar vacio para no cambiar)
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="********"
              className={inputClass("password")}
            />
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
          </div>

          {/* DNI y Telefono (editables, lado a lado) */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">DNI</label>
              <input
                type="text"
                name="dni"
                value={form.dni}
                onChange={handleChange}
                className={inputClass("dni")}
              />
              {errors.dni && <p className="text-xs text-red-500 mt-1">{errors.dni}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                type="text"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                className={inputClass("telefono")}
              />
              {errors.telefono && <p className="text-xs text-red-500 mt-1">{errors.telefono}</p>}
            </div>
          </div>

          {/* Direccion (editable) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              name="direccion"
              value={form.direccion}
              onChange={handleChange}
              className={inputClass("direccion")}
            />
            {errors.direccion && <p className="text-xs text-red-500 mt-1">{errors.direccion}</p>}
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-3 pt-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600"
            >
              Guardar cambios
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default EditarPerfilModal