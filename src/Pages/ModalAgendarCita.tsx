import { useState } from "react";

// ==== BACKEND: librerías y componentes (descomentar al conectar servidor) ====
// import { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import Notification from "../components/Notification";

// const headers = {
//   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// };
// interface NotificationState {
//   message: string;
//   type: "success" | "alert" | "info";
// }

// El { onClose } es una "prop": una función que le pasa el padre para cerrar el modal
export default function ModalAgendarCita({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    servicioId: "",
    fecha: "",
    hora: "",
    doctorId: "",
    comentarios: "",
  });

  // ==== DATOS DE EJEMPLO (borrar cuando el backend llene estas listas) ====
  const servicios = [
    { id: 1, nombre: "Limpieza dental" },
    { id: 2, nombre: "Ortodoncia" },
  ];
  const doctoresDisponibles = [
    { id: 1, nombre: "Dra. López" },
    { id: 2, nombre: "Dr. Martínez" },
  ];
  const horasDisponibles = ["09:00", "10:00", "11:00"];

  // ==== BACKEND: estados reales de las listas (reemplazan los de ejemplo) ====
  // const [servicios, setServicios] = useState([]);
  // const [doctoresDisponibles, setDoctoresDisponibles] = useState([]);
  // const [horasDisponibles, setHorasDisponibles] = useState([]);
  // const [notification, setNotification] = useState<NotificationState | null>(null);
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // ==== BACKEND: normaliza distintas formas de respuesta del servidor ====
  // const extractData = (res: any) => {
  //   const data = res.data;
  //   if (Array.isArray(data)) return data;
  //   if (data && Array.isArray(data.data)) return data.data;
  //   if (data && Array.isArray(data.message)) return data.message;
  //   return [];
  // };

  // ==== BACKEND: cargar servicios activos al abrir el modal ====
  // useEffect(() => {
  //   const fetchServicios = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3000/servicios", headers);
  //       const data = extractData(res);
  //       setServicios(data.filter((s: any) => s.activo === true || s.activo === "true"));
  //     } catch (err) {
  //       console.error("Error al cargar servicios:", err);
  //       setNotification({ message: "Error al cargar Servicios", type: "alert" });
  //     }
  //   };
  //   fetchServicios();
  // }, []);

  // ==== BACKEND: cargar doctores según servicio + fecha ====
  // useEffect(() => {
  //   const resetDoctorAndHours = () => {
  //     setDoctoresDisponibles([]);
  //     setHorasDisponibles([]);
  //     setFormData((prev) => ({ ...prev, doctorId: "", hora: "" }));
  //   };
  //   const fetchDoctores = async () => {
  //     if (!formData.servicioId || !formData.fecha) {
  //       resetDoctorAndHours();
  //       return;
  //     }
  //     try {
  //       const res = await axios.get(`http://localhost:3000/citas/doctores-disponibles?fecha=${formData.fecha}&servicioId=${formData.servicioId}`, headers);
  //       const data = extractData(res);
  //       setDoctoresDisponibles(data);
  //       if (!data.some((d: any) => d.id === parseInt(formData.doctorId))) {
  //         setFormData((prev) => ({ ...prev, doctorId: "" }));
  //       }
  //     } catch (err) {
  //       console.error("Error al obtener doctores disponibles:", err);
  //       setDoctoresDisponibles([]);
  //       setNotification({ message: "Fallo al cargar doctores", type: "alert" });
  //     }
  //   };
  //   fetchDoctores();
  // }, [formData.servicioId, formData.fecha]);

  // ==== BACKEND: cargar horas según doctor + fecha ====
  // useEffect(() => {
  //   const fetchHoras = async () => {
  //     if (!formData.fecha || !formData.doctorId) {
  //       setHorasDisponibles([]);
  //       setFormData((prev) => ({ ...prev, hora: "" }));
  //       return;
  //     }
  //     try {
  //       const res = await axios.get(`http://localhost:3000/citas/horas-disponibles?doctorId=${formData.doctorId}&fecha=${formData.fecha}`, headers);
  //       const data = extractData(res);
  //       setHorasDisponibles(data);
  //       if (formData.hora && !data.includes(formData.hora)) {
  //         setFormData((prev) => ({ ...prev, hora: "" }));
  //       }
  //     } catch (err) {
  //       console.error("Error al obtener horas disponibles:", err);
  //       setHorasDisponibles([]);
  //       setNotification({ message: "Fallo al cargar horarios.", type: "alert" });
  //     }
  //   };
  //   fetchHoras();
  // }, [formData.fecha, formData.doctorId]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (e.target.name === "servicioId" || e.target.name === "fecha") {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value, doctorId: "", hora: "" }));
      return;
    }
    if (e.target.name === "doctorId") {
      setFormData((prev) => ({ ...prev, doctorId: e.target.value, hora: "" }));
      return;
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    if (!formData.servicioId || !formData.fecha || !formData.hora || !formData.doctorId) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }
    setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleConfirm = () => {
    // ==== BACKEND: crear la cita en el servidor ====
    // if (isSubmitting) return;
    // setIsSubmitting(true);
    // try {
    //   const payload = {
    //     servicioId: parseInt(formData.servicioId),
    //     fecha: formData.fecha,
    //     hora: formData.hora,
    //     doctorId: parseInt(formData.doctorId),
    //     pacienteId: parseInt(JSON.parse(localStorage.getItem("user")!).persona.id),
    //   };
    //   const res = await axios.post("http://localhost:3000/citas", payload, headers);
    //   if (res.data.code === 0) {
    //     setNotification({ message: "Cita creada exitosamente", type: "success" });
    //     setTimeout(() => { onClose(); }, 2000);
    //   } else {
    //     setNotification({ message: res.data.message, type: "alert" });
    //     setIsSubmitting(false);
    //   }
    // } catch (err) {
    //   console.error("Error al crear cita:", err);
    //   setNotification({ message: "Error al crear cita.", type: "alert" });
    //   setIsSubmitting(false);
    // }
    alert("Cita creada (simulado)");
    onClose();
  };

  // ==== BACKEND: limpiar notificación tras 3 segundos ====
  // useEffect(() => {
  //   if (notification) {
  //     const timer = setTimeout(() => setNotification(null), 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [notification]);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          {step === 1 ? "Agendar Cita" : "Confirmar Cita"}
        </h2>

        {step === 1 ? (
          <div className="space-y-4">
            {/* Tipo de atención */}
            <div>
              <label className="block text-md font-medium text-gray-600">Tipo de atención *</label>
              <select name="servicioId" className="w-full border border-gray-300 rounded-lg p-2 mt-1" value={formData.servicioId} onChange={handleChange}>
                <option value="">Seleccione...</option>
                {servicios.map((serv) => (
                  <option key={serv.id} value={serv.id}>{serv.nombre}</option>
                ))}
              </select>
            </div>

            {/* Fecha */}
            <div>
              <label className="block text-md font-medium text-gray-600">Fecha *</label>
              <input
                type="date"
                name="fecha"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                value={formData.fecha}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            {/* Doctor */}
            <div>
              <label className="block text-md font-medium text-gray-600">Doctor *</label>
              <select name="doctorId" className="w-full border border-gray-300 rounded-lg p-2 mt-1" value={formData.doctorId} onChange={handleChange}>
                <option value="">Seleccione...</option>
                {doctoresDisponibles.map((doc) => (
                  <option key={doc.id} value={doc.id}>{doc.nombre}</option>
                ))}
              </select>
            </div>

            {/* Horas disponibles */}
            <div>
              <label className="block text-md font-medium text-gray-600">Horas disponibles *</label>
              {horasDisponibles.length > 0 ? (
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {horasDisponibles.map((hora) => (
                    <button
                      key={hora}
                      type="button"
                      className={`p-2 rounded-lg border transition cursor-pointer ${
                        formData.hora === hora
                          ? "bg-cyan-500 text-white"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-cyan-100"
                      }`}
                      onClick={() => setFormData((prev) => ({ ...prev, hora }))}
                    >
                      {hora}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 mt-2">Seleccione fecha y doctor para ver horarios disponibles.</p>
              )}
            </div>

            {/* Botones */}
            <div className="flex justify-between mt-4">
              <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">Cancelar</button>
              <button onClick={handleNext} className="px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 cursor-pointer">Siguiente ➜</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-2 mb-4">
              <p><strong>Tipo de atención:</strong> {servicios.find((s) => s.id === parseInt(formData.servicioId))?.nombre}</p>
              <p><strong>Fecha:</strong> {formData.fecha}</p>
              <p><strong>Hora:</strong> {formData.hora.replace("_", ":")}</p>
              <p><strong>Doctor:</strong> {doctoresDisponibles.find((d) => d.id === parseInt(formData.doctorId))?.nombre}</p>
              {formData.comentarios && <p><strong>Comentarios:</strong> {formData.comentarios}</p>}
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={handleBack} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">← Volver</button>
              <button onClick={handleConfirm} className="px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 cursor-pointer">Confirmar cita</button>
            </div>
          </div>
        )}
      </div>

      {/* ==== BACKEND: notificación emergente ==== */}
      {/* {notification && (
        <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />
      )} */}
    </div>
  );
}