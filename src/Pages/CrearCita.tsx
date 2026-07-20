import { Link } from 'react-router-dom'

function CrearCita() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-100">
      <h1 className="text-4xl font-bold text-slate-800">Crear Cita</h1>
      <Link to="/dashboard" className="text-blue-600 underline">← Volver al dashboard</Link>
    </div>
  )
}

export default CrearCita