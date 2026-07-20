import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-100">
      <h1 className="text-4xl font-bold text-slate-800">Dashboard (Cliente)</h1>
      <div className="flex flex-wrap gap-3 justify-center max-w-md">
        <Link to="/crear-cita" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Crear Cita</Link>
        <Link to="/estados-cita" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Estados de Cita</Link>
        <Link to="/opciones-citas" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Opciones de Citas</Link>
        <Link to="/historial" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Historial Clínico</Link>
        <Link to="/perfil" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Perfil</Link>
      </div>
      <Link to="/" className="text-blue-600 underline mt-2">← Cerrar sesión</Link>
    </div>
  )
}

export default Dashboard