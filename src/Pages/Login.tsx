import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  // Estados: variables que React "vigila". Cuando cambian, redibuja.
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Se ejecuta al enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // evita que la página se recargue

    if (!usernameOrEmail || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError("");
    setLoading(true);

    // Aquí luego irá la conexión real con tu backend
    alert("Inicio de sesión simulado exitoso");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-xl border border-gray-300 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Iniciar Sesión
        </h2>

        {error && (
          <div className="bg-red-500 text-white p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-left">Correo o Usuario</label>
          <input
            type="text"
            value={usernameOrEmail}
            placeholder="email@ejemplo.com"
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-left">Contraseña</label>
          <input
            type="password"
            value={password}
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 text-white rounded-lg py-2.5 px-4 font-medium shadow-md hover:bg-cyan-600 transition-all duration-300 mt-4 mb-3"
          disabled={loading}
        >
          {loading ? "Ingresando..." : "Iniciar Sesión"}
        </button>

        <button
          type="button"
          onClick={() => alert("Login con Google (pendiente de backend)")}
          className="flex items-center justify-center gap-3 w-full bg-white text-gray-700 border border-gray-300 rounded-lg py-2.5 px-4 font-medium shadow-sm hover:bg-gray-50 transition-all duration-300"
        >
          <span>Iniciar sesión con Google</span>
        </button>

        <div className="flex justify-center gap-12 mt-4 text-center">
            <a className="text-cyan-600 hover:underline text-sm cursor-pointer"
            onClick={() => alert("Redirigir a recuperar contraseña")}
          >
            Olvidé mi contraseña
          </a>
 
          <Link to="/registro" className="text-cyan-600 hover:underline text-sm cursor-pointer">
            Registrarse
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;