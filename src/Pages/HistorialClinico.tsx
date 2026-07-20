import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Stethoscope, Heart, BriefcaseMedical, Pill } from "lucide-react";

// ==== BACKEND: fetch del expediente del paciente logueado ====
// import { useEffect } from "react";
// import { getExpedienteById } from "../services/expedientesService";

export default function HistorialClinico() {
  const navigate = useNavigate();
  const [ascending, setAscending] = useState(false);

  // Expediente de ejemplo (con backend saldrá del paciente logueado)
  const [expediente] = useState<any>({
    nombrePaciente: "Carlos Murillo",
    alergias: "Ninguna",
    enfermedades: "Ninguna",
    medicamentos: "Ninguno",
    observaciones: "N/A",
    detalles: [
      { id: 1, fecha: "2025-11-26T00:00:00", motivo: "Limpieza", diagnostico: "Dientes sanos", tratamiento: "Limpieza", planTratamiento: "Pasta dental" },
      { id: 2, fecha: "2025-09-22T00:00:00", motivo: "Control anual", diagnostico: "Dientes sanos, sarro leve", tratamiento: "Limpieza profunda", planTratamiento: "Continuar con higiene" },
    ],
  });

  // ==== BACKEND: traer el expediente del servidor ====
  // const fetchExpediente = async () => {
  //   try {
  //     const data = await getExpedienteById(/* id del paciente logueado */);
  //     setExpediente(data);
  //   } catch (err) {
  //     console.error("Error al obtener expediente:", err);
  //   }
  // };
  // useEffect(() => { fetchExpediente(); }, []);

  // Ordenar consultas por fecha (lógica pura, se queda)
  const sorted = useMemo(() => {
    if (!expediente?.detalles) return [];
    return [...expediente.detalles].sort((a, b) =>
      ascending
        ? new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
        : new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );
  }, [expediente?.detalles, ascending]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-3 py-1 rounded-lg bg-gray-800 text-white text-sm cursor-pointer"
        >
          ← Regresar
        </button>

        <div className="p-6 bg-white rounded-xl shadow-xl">

          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-gray-800">{expediente.nombrePaciente}</h2>

            {expediente.detalles?.length > 0 && (
              <button
                onClick={() => setAscending(!ascending)}
                className="px-3 py-1 rounded-lg bg-cyan-500 text-white text-sm cursor-pointer"
              >
                {ascending ? "▲ Ascendente" : "▼ Descendente"}
              </button>
            )}
          </div>

          {/* Información básica con iconos */}
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-800">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-cyan-500" />
              <span className="font-semibold">Alergias:</span>
              <div className="break-words">{expediente.alergias || "N/A"}</div>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseMedical className="w-4 h-4 text-cyan-500" />
              <span className="font-semibold">Enfermedades:</span>
              <div className="break-words">{expediente.enfermedades || "N/A"}</div>
            </div>
            <div className="flex items-center gap-2">
              <Pill className="w-4 h-4 text-green-500" />
              <span className="font-semibold">Medicamentos:</span>
              <div className="break-words">{expediente.medicamentos || "N/A"}</div>
            </div>
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-gray-600" />
              <span className="font-semibold">Observaciones:</span>
              <div className="break-words">{expediente.observaciones || "N/A"}</div>
            </div>
          </div>

          {/* Consultas */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Consultas</h3>
            {sorted.length === 0 ? (
              <p className="text-gray-500 text-sm">No hay consultas registradas.</p>
            ) : (
              <div className="space-y-4">
                {sorted.map((d) => (
                  <div key={d.id} className="p-4 bg-white border-l-4 border-cyan-400 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-cyan-600 font-semibold flex items-center">
                        <Stethoscope className="w-4 h-4 mr-1" /> Consulta
                      </h4>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" /> {new Date(d.fecha).toLocaleDateString("es-ES")}
                      </p>
                    </div>
                    <p><strong>Motivo:</strong> {d.motivo}</p>
                    <p><strong>Diagnóstico:</strong> {d.diagnostico}</p>
                    <p><strong>Tratamiento:</strong> {d.tratamiento}</p>
                    <p><strong>Plan:</strong> <span className="text-green-600">{d.planTratamiento}</span></p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}