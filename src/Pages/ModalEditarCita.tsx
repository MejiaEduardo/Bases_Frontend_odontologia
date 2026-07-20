import { useState } from "react";

// ==== BACKEND: librerías y token (descomentar al conectar el servidor) ====
// import { useEffect } from "react";
// import axios from "axios";
// const headers = {
//   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// };

interface ModalEditarCitaProps {
  cita: any;                 // misma forma que ya venía del backend
  onClose: () => void;
  onUpdated: () => void;
}

export default function ModalEditarCita({ cita, onClose, onUpdated }: ModalEditarCitaProps) {
  // Normalizar la hora que viene del backend ("H10_00" -> "10:00"). Lógica pura, se queda.
  const horaInicial =
    cita.hora.length === 6
      ? cita.hora.slice(1).replace("_", ":")
      : cita.hora;

  const [fecha, setFecha] = useState(cita.fecha.split("T")[0]);
  const [hora, setHora] = useState(horaInicial);

  // Horas de ejemplo (con backend saldrán del servidor según doctor y fecha)
  const [horasDisponibles] = useState<string[]>([
    "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "13:00", "13:30", "14:00",
  ]);

  // ==== BACKEND: traer horas disponibles del servidor al cambiar la fecha ====
  // useEffect(() => {
  //   const fetchHoras = async () => {
  //     if (!fecha) {
  //       setHorasDisponibles([]);
  //       return;
  //     }
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:3000/citas/horas-disponibles?doctorId=${cita.doctorId}&fecha=${fecha}`, headers
  //       );
  //       const data = Array.isArray(res.data)
  //         ? res.data
  //         : Array.isArray(res.data.message)
  //         ? res.data.message
  //         : [];
  //       const normalizadas = data.map((h) =>
  //         h.length === 6 ? h.slice(1).replace("_", ":") : h
  //       );
  //       setHorasDisponibles(normalizadas);
  //       if (!normalizadas.includes(hora)) setHora("");
  //     } catch (err) {
  //       console.error("Error al obtener horas:", err);
  //       setHorasDisponibles([]);
  //     }
  //   };
  //   fetchHoras();
  // }, [fecha]);

  // Guardar cambios
  const handleSave = () => {
    if (!fecha || !hora) {
      alert("Seleccione fecha y hora");
      return;
    }

    const body = { fecha, hora };
    console.log("Guardar cambios de cita (pendiente de backend):", body);
    alert(`Cita actualizada (simulado): ${fecha} - ${hora}`);

    // ==== BACKEND: guardar la cita en el servidor ====
    // try {
    //   const res = await axios.put(`http://localhost:3000/citas/${cita.id}`, body, headers);
    //   if (res.data.code === 0) {
    //     onUpdated();
    //     onClose();
    //   } else {
    //     alert(res.data.message);
    //   }
    // } catch (err) {
    //   console.error("Error al actualizar cita:", err);
    //   alert("No se pudo actualizar la cita");
    // }

    onUpdated();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg">

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Editar Cita
        </h2>

        <div className="flex flex-col gap-2">
          <label>Fecha</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border rounded-md px-3 py-2"
            min={new Date().toISOString().split("T")[0]}
          />

          <label>Hora</label>
          <select
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="">Seleccione una hora</option>
            {horasDisponibles.map((h, i) => (
              <option key={i} value={h}>{h}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-3 py-1 bg-gray-200 rounded-lg">
            Cancelar
          </button>

          <button
            onClick={handleSave}
            className="px-3 py-1 bg-cyan-500 text-white rounded-lg"
          >
            Guardar
          </button>
        </div>

      </div>
    </div>
  );
}