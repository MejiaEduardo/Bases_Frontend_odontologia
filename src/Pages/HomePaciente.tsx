import { useState } from "react";
import { Link } from "react-router-dom";
import ModalAgendarCita from "../Pages/ModalAgendarCita";
import ModalEditarCita from "../Pages/ModalEditarCita";
import ConfirmDialog from "../Pages/ConfirmDialog";
import NavbarPaciente from './NavbarPaciente'

// ==== BACKEND: librerías y componentes (descomentar al conectar el servidor) ====
// import { useEffect } from "react";
// import axios from "axios";
// import { FiBell } from "react-icons/fi";
// import ModalAgendarCita from "../components/ModalAgendarCita";
// import ModalEditarCita from "../components/ModalEditarCita";
// import HeaderMenu from "../components/HeaderMenu";
// import Notification from "../components/Notification";
// import ConfirmDialog from "../components/ConfirmDialog";

// interface NotificationState {
//   message: string;
//   type: "success" | "alert" | "info";
// }

// ==== BACKEND: token para las peticiones ====
// const headers = {
//   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// };

export default function HomePaciente() {
  // Nombre de ejemplo (con backend saldrá del usuario logueado)
  const nombreUsuario = "Carlos";

  // Con backend, usá setCitasPendientes para llenarlas desde el servidor
 // const [citasPendientes] = useState<any[]>([
  //{ id: 1, servicio: { nombre: "Limpieza dental" }, doctor: { persona: { nombre: "Dra.", apellido: "López" } }, fecha: "2026-08-01T00:00:00", hora: "10:00", estado: "PENDIENTE" },
//]);
    //const [citasPendientes] = useState<any[]>([
  //{ id: 1, servicio: { nombre: "Limpieza dental" }, doctor: { persona: { nombre: "Dra.", apellido: "López" } }, fecha: "2026-07-20T00:00:00", hora: "10:00", estado: "PENDIENTE" },
//]);
    const [citasPendientes] = useState<any[]>([
  { id: 1, servicio: { nombre: "Limpieza dental" }, doctor: { persona: { nombre: "Dra.", apellido: "López" } }, fecha: "2026-07-20T00:00:00", hora: "10:00", estado: "PENDIENTE" },
  { id: 2, servicio: { nombre: "Ortodoncia - Revisión" }, doctor: { persona: { nombre: "Dra.", apellido: "López" } }, fecha: "2026-08-01T00:00:00", hora: "08:30", estado: "PENDIENTE" },
]);

  // ==== BACKEND: estados de modales y notificaciones ====
  const [showModal, setShowModal] = useState(false)
  const [showModalEditar, setShowModalEditar] = useState(false);
  const [citaEditando, setCitaEditando] = useState<any | null>(null);
  // const [notification, setNotification] = useState<NotificationState | null>(null);
  const [confirmData, setConfirmData] = useState<{ mensaje: string; onConfirm: () => void } | null>(null);

  // ==== BACKEND: usuario logueado + protección de ruta ====
  // const user = JSON.parse(localStorage.getItem("user") as string);
  // if (!user || !user.id) {
  //   window.location.href = "http://localhost:5173/login";
  //   return null;
  // }

  // ---- Lógica pura (no depende del backend, se queda activa) ----

  // Detecta si la cita cae en HOY, MAÑANA o PASADO MAÑANA
  const esCitaProxima = (fechaStr: string) => {
    if (!fechaStr) return false;
    const hoy = new Date();
    const fecha = new Date(fechaStr);
    const hoyMid = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()).getTime();
    const fechaMid = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()).getTime();
    const diffDias = (fechaMid - hoyMid) / (1000 * 60 * 60 * 24);
    return diffDias === 0 || diffDias === 1 || diffDias === 2;
  };

  const formatoHora = (hora: string) =>
    hora.length === 5 ? hora : hora.replace("_", ":");

  const puedeEditar = (cita: any) => cita.estado === "PENDIENTE";
  const puedeConfirmar = (cita: any) => cita.estado === "PENDIENTE";

  // ==== BACKEND: traer citas del servidor y cancelación automática ====
  // const cancelarPorTiempoRestante = async (cita: any) => {
  //   const ahora = new Date();
  //   const fechaCita = new Date(`${cita.fecha}T${cita.hora}`);
  //   const diffHoras = (fechaCita.getTime() - ahora.getTime()) / (1000 * 60 * 60);
  //   if (cita.estado === "PENDIENTE" && diffHoras <= 24) {
  //     try {
  //       await axios.patch(`http://localhost:3000/citas/${cita.id}/cancelar`, {}, headers);
  //       return "CANCELADA";
  //     } catch {
  //       return cita.estado;
  //     }
  //   }
  //   return cita.estado;
  // };
  //
  // const fetchCitasPendientes = async () => {
  //   try {
  //     const pacienteId = user.personaId;
  //     const res = await axios.get(`http://localhost:3000/citas/paciente/${pacienteId}`, headers);
  //     let citas = Array.isArray(res.data) ? res.data : [];
  //     const nuevas = [];
  //     for (let c of citas) {
  //       const nuevoEstado = await cancelarPorTiempoRestante(c);
  //       nuevas.push({ ...c, estado: nuevoEstado });
  //     }
  //     setCitasPendientes(nuevas);
  //   } catch (err) {
  //     console.error("Error al cargar citas", err);
  //   }
  // };
  //
  // useEffect(() => { fetchCitasPendientes(); }, []);
  //
  // useEffect(() => {
  //   if (notification) {
  //     const timer = setTimeout(() => setNotification(null), 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [notification]);

  // ---- Handlers (dejo el cascarón; el cuerpo con backend va comentado) ----

  const handleEditar = (cita: any) => {
    // ==== BACKEND: abrir modal de edición ====
    setCitaEditando(cita);
    setShowModalEditar(true);
    console.log("Editar cita (pendiente de backend):", cita);
  };

  const handleEliminar = (cita: any) => {
    // ==== BACKEND: cancelar cita en el servidor ====
    setConfirmData({
        mensaje: "¿Seguro que desea cancelar esta cita?",
        onConfirm: () => {
    //     try {
    //       const res = await axios.patch(`http://localhost:3000/citas/${cita.id}/cancelar`, {}, headers);
    //       if (res.data.code === 0) {
    //         setNotification({ message: "Cita cancelada correctamente", type: "success" });
    //         fetchCitasPendientes();
    //       } else {
    //         setNotification({ message: res.data.message, type: "alert" });
    //       }
    //     } catch {
    //       setNotification({ message: "Error al cancelar la cita", type: "alert" });
    //     } finally {
    //       setConfirmData(null);
    //     }
    //   },
    // });
    console.log("Cancelar cita (simulado):", cita);
    alert("Cita cancelada (simulado)");
    setConfirmData(null);
  },
    });
};

  const handleConfirmar = (cita: any) => {
    // ==== BACKEND: confirmar asistencia ====
    setConfirmData({
        mensaje: "¿Desea confirmar su asistencia a esta cita?",
        onConfirm: () => {
    //     try {
    //       const res = await axios.patch(`http://localhost:3000/citas/${cita.id}/confirmar`, {}, headers);
    //       if (res.data?.estado === "CONFIRMADA") {
    //         setNotification({ message: "Cita confirmada correctamente", type: "success" });
    //       }
    //       fetchCitasPendientes();
    //     } catch {
    //       setNotification({ message: "Error al confirmar la cita", type: "alert" });
    //     } finally {
    //       setConfirmData(null);
    //     }
    //   },
    // });
    console.log("Confirmar cita (simulado):", cita);
    alert("Cita confirmada (simulado)");
    setConfirmData(null);
        },
    });
  };

  // Derivadas: se separan las próximas de las demás
  const citasProximas = citasPendientes.filter((c) => esCitaProxima(c.fecha));
  const citasOtrasPendientes = citasPendientes.filter((c) => !esCitaProxima(c.fecha));

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
        <NavbarPaciente />
      {/* HEADER */}
      <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
        <div className="text-cyan-500 text-2xl font-bold">
          {`Hola, ${nombreUsuario}`}
        </div>
        <nav className="flex items-center gap-8">
          <Link to="/Historial" className="hover:text-cyan-500 transition cursor-pointer">
            Historial clínico
          </Link>

          <button
            onClick={() => setShowModal(true)}
            className="hover:text-cyan-500 transition cursor-pointer"
            >   
                Crear cita
            </button>

          {/* ==== BACKEND: campana de notificaciones y menú ==== */}
          {/* <FiBell className="hover:text-cyan-500 transition h-6 w-6 cursor-pointer" /> */}
          {/* <HeaderMenu /> */}
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="p-5 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">

          {/* CITAS PENDIENTES DE ASISTIR */}
          <section className="bg-white shadow-xl rounded-xl p-6 md:max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-medium mb-3">Citas pendientes de asistir</h2>

            {citasOtrasPendientes.length > 0 ? (
              citasOtrasPendientes.map((cita) => (
                <div
                  key={cita.id}
                  className="p-4 border-l-4 border-cyan-400 rounded-lg shadow-sm hover:shadow-lg transition mb-4"
                >
                  <div className="text-lg font-semibold">{cita.servicio?.nombre}</div>
                  <div className="mt-1 text-sm text-gray-600">
                    Con <span className="font-medium text-gray-900">{cita.doctor?.persona?.nombre} {cita.doctor?.persona?.apellido}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    Fecha y Hora: <span className="font-medium text-gray-900">{cita.fecha.split("T")[0]} - {formatoHora(cita.hora)}</span>
                  </div>
                  <div className="mt-1 text-sm">
                    Estado: <span className="text-cyan-600 font-semibold">{cita.estado}</span>
                  </div>

                  {cita.estado === "CANCELADA" ? (
                    <p className="text-red-500 mt-3 font-medium">
                      Esta cita fue cancelada. Por favor programe una nueva.
                    </p>
                  ) : (
                    <div className="mt-2 flex justify-center gap-3">
                      <button
                        disabled={!puedeEditar(cita)}
                        onClick={() => handleEditar(cita)}
                        className={`px-3 py-1 rounded-lg bg-cyan-500 text-white ${!puedeEditar(cita) ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleEliminar(cita)}
                        className="px-3 py-1 rounded-lg bg-red-500 text-white cursor-pointer"
                      >
                        Cancelar
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No tiene citas pendientes</p>
            )}
          </section>

          {/* CITAS PRÓXIMAS */}
          <section className="bg-white shadow-xl rounded-xl p-6 md:max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-medium mb-3">Citas próximas</h2>

            {citasProximas.length > 0 ? (
              citasProximas.map((cita) => (
                <div
                  key={cita.id}
                  className="p-4 border-l-4 border-cyan-400 rounded-lg shadow-sm hover:shadow-lg transition mb-4"
                >
                  <div className="text-lg font-semibold">{cita.servicio?.nombre}</div>
                  <div className="mt-1 text-sm text-gray-600">
                    Con <span className="font-medium text-gray-900">{cita.doctor?.persona?.nombre} {cita.doctor?.persona?.apellido}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    Fecha: <span className="font-medium text-gray-900">{cita.fecha.split("T")[0]} - {formatoHora(cita.hora)}</span>
                  </div>
                  <div className="mt-1 text-sm">
                    Estado:{" "}
                    <span className={`font-semibold ${cita.estado === "CONFIRMADA" ? "text-cyan-600" : cita.estado === "CANCELADA" ? "text-red-500" : "text-gray-800"}`}>
                      {cita.estado}
                    </span>
                  </div>

                  {cita.estado === "CANCELADA" ? (
                    <p className="text-red-500 mt-3 font-medium">
                      Esta cita fue cancelada. Por favor programe una nueva.
                    </p>
                  ) : (
                    <div className="mt-2 flex justify-center gap-3">
                      {cita.estado !== "CONFIRMADA" && (
                        <button
                          disabled={!puedeConfirmar(cita)}
                          onClick={() => handleConfirmar(cita)}
                          className="px-3 py-1 rounded-lg bg-cyan-500 text-white cursor-pointer"
                        >
                          Confirmar cita
                        </button>
                      )}
                      {cita.estado === "PENDIENTE" && (
                        <button
                          onClick={() => handleEditar(cita)}
                          className="px-3 py-1 rounded-lg bg-cyan-500 text-white cursor-pointer"
                        >
                          Editar
                        </button>
                      )}
                      <button
                        onClick={() => handleEliminar(cita)}
                        className="px-3 py-1 rounded-lg bg-red-500 text-white cursor-pointer"
                      >
                        Cancelar
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No tiene citas próximas</p>
            )}
          </section>

        </div>
      </main>
     {showModal && <ModalAgendarCita onClose={() => setShowModal(false)} />}
        {showModalEditar && citaEditando && (
  <ModalEditarCita
    cita={citaEditando}
    onClose={() => setShowModalEditar(false)}
    onUpdated={() => setShowModalEditar(false)}
  />
)}

    {confirmData && (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
    <ConfirmDialog
      message={confirmData.mensaje}
      onConfirm={confirmData.onConfirm}
      onCancel={() => setConfirmData(null)}
    />
  </div>
)}

      {/* ==== BACKEND: modales, confirmaciones y notificaciones ==== */}
      {/* {showModal && (
        <ModalAgendarCita onClose={() => { setShowModal(false); fetchCitasPendientes(); }} />
      )}
      {showModalEditar && citaEditando && (
        <ModalEditarCita cita={citaEditando} onClose={() => setShowModalEditar(false)} onUpdated={() => { setShowModalEditar(false); fetchCitasPendientes(); }} />
      )}
      {confirmData && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <ConfirmDialog message={confirmData.mensaje} onConfirm={confirmData.onConfirm} onCancel={() => setConfirmData(null)} />
        </div>
      )}
      {notification && (
        <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />
      )} */}
    </div>
  );
}