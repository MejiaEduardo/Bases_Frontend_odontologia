import { useState } from "react";
import { Link } from "react-router-dom";

export default function Registro() {
  // Un solo estado con todos los campos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Actualiza el campo correcto según su "name"
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    // Aquí luego irá la conexión real con tu backend
    setSuccess("Usuario registrado con éxito (simulado)");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 pt-6 pb-7 rounded-2xl shadow-xl border border-gray-300 w-full max-w-3xl"
      >
        <h2 className="text-2xl font-bold mb-5 text-gray-900 text-center">
          Registro de Paciente
        </h2>

        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-5 text-sm text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-500 text-white p-3 rounded mb-5 text-sm text-center">
            {success}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {[
            { name: "nombre", label: "Nombre", type: "text", placeholder: "Nombre" },
            { name: "apellido", label: "Apellido", type: "text", placeholder: "Apellido" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col">
              <label htmlFor={field.name} className="text-gray-700 font-medium mb-2 text-left">
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                className="p-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col">
          <label htmlFor="correo" className="text-gray-700 font-medium mb-2 text-left">
            Correo electrónico
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            placeholder="email@ejemplo.com"
            value={formData.correo}
            onChange={handleChange}
            className="p-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mt-5">
          {[
            { name: "password", label: "Contraseña", type: "password", placeholder: "********" },
            { name: "confirmPassword", label: "Confirmar contraseña", type: "password", placeholder: "********" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col">
              <label htmlFor={field.name} className="text-gray-700 font-medium mb-2 text-left">
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                className="p-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-7">
          <button
            type="submit"
            className="flex-1 bg-cyan-500 text-white p-2.5 rounded-xl hover:bg-cyan-600 transition text-base font-semibold"
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/landing")}
            className="flex-1 border border-cyan-500 text-cyan-600 p-2.5 rounded-xl hover:bg-cyan-500 hover:text-white transition text-base font-semibold cursor-pointer"
          >
            Cancelar
          </button>
        </div>

        <div className="mt-4 text-center">
          <Link to="/login" className="text-cyan-600 hover:underline text-sm cursor-pointer">
            ¿Ya tienes cuenta? Inicia sesión aquí
          </Link>
        </div>
      </form>
    </div>
  );
}