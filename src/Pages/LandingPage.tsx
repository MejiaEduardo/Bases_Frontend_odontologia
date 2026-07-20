import { Link } from 'react-router-dom'
// Reemplaza el import de la imagen de la doctora por el del diente
import diente from '../assets/diente_2.svg'
// (deja tu import de Link como lo tenías: import { Link } from 'react-router-dom')

function LandingPage() {
  return (
<div>

    {/*NAVBAR */}
    <div className='sticky top-0 z-50 bg-white opacity-100'>
        <div className='flex items-center justify-between px-4 md:px-8 lg:px-16 py-4'>
            <img src={diente} alt='' className='h-8 w-auto' />
            <div className='cursor-pointer flex-1 flex justify-center gap-10 whitespace-nowrap font-semibold'>
                <h1>Servicios</h1>
                <h1>Especialistas</h1>
                <h1>Contacto</h1>
                <h1>Preguntas Frecuentes</h1>
            </div>
            <Link to="/login">
                <button className='cursor-pointer active:scale-90 text-white px-6 py-2 whitespace-nowrap font-bold border border-cyan-200 rounded-md bg-cyan-500 shadow-lg hover:scale-110 hover:bg-cyan-600 duration-150'>
                    Iniciar Sesión
                </button>
            </Link>
        </div>
        <hr className="border-t-2 border-gray-100"></hr>
    </div>

    {/* CONTENEDOR PRINCIPAL*/}
    <div className='relative overflow-hidden bg-gradient-to-br from-cyan-50 via-gray-100 to-sky-100'>

        <div className='pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl'></div>
        <div className='pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl'></div>
        <div className='pointer-events-none absolute -bottom-10 left-1/4 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl'></div>
        <div className='pointer-events-none absolute -left-16 top-40 h-56 w-56 rounded-full border-[3px] border-cyan-200/70'></div>
        <div className='pointer-events-none absolute right-24 top-10 h-32 w-32 rounded-full border-[3px] border-sky-200/70'></div>

        <div className='relative z-10 max-w-7xl mx-auto flex items-center gap-8 px-8 pb-40 min-h-[calc(100vh-80px)]'>
            <div className='flex-1'>
    <h1 className='display text-5xl md:text-6xl leading-tight text-gray-900'>
        Sonríe con Confianza
    </h1>
    <h2 className='text-cyan-500 font-semibold max-w-md mt-6'>
        En nuestra clínica odontológica, nos encargamos de tu salud dental con el mejor cuidado y tecnología.
    </h2>
    <div className='flex items-center gap-8 mt-10'>
        <button className='cursor-pointer active:scale-90 rounded-lg bg-zinc-900 text-white px-7 py-3.5 text-sm font-bold shadow-lg hover:scale-110 duration-150'>
            Agenda tu cita
        </button>
        <button className='cursor-pointer text-sm font-bold text-gray-900 hover:text-cyan-500 duration-150'>
            Nuestros Servicios →
        </button>
    </div>
</div>
            <div className='flex-1 flex justify-center'>
                <div className='relative flex items-center justify-center'>
                    <div className='absolute h-[22rem] w-[22rem] -rotate-6 rounded-[2.75rem] bg-cyan-100/80'></div>
                    <div className='relative rounded-[2.25rem] bg-white p-10 shadow-2xl shadow-cyan-900/10 ring-1 ring-cyan-100/70'>
                        <div className='relative flex h-72 w-72 items-center justify-center rounded-full bg-cyan-50'>
                            <div className='absolute inset-4 rounded-full border-2 border-dashed border-cyan-200'></div>
                            <img src={diente} alt='Diente' className='relative z-10 h-44 w-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <svg className='absolute bottom-0 left-0 w-full text-white' viewBox='0 0 1440 120' preserveAspectRatio='none'>
            <path fill='currentColor' fillOpacity='0.5' d='M0,80 C360,20 1080,140 1440,64 L1440,120 L0,120 Z'></path>
            <path fill='currentColor' d='M0,96 C360,48 1080,150 1440,88 L1440,120 L0,120 Z'></path>
        </svg>
    </div>

    {/* SERVICIOS */}
    <div className='bg-white px-8 pb-24 pt-8'>
        <div className='max-w-7xl mx-auto text-center'>
            <p className='text-sm font-bold uppercase tracking-widest text-cyan-500'>Nuestros Servicios</p>
            <h1 className='font-extrabold text-3xl mt-3'>Cuidamos cada sonrisa</h1>
            <div className='grid gap-6 md:grid-cols-3 mt-12'>
                <div className='hover:scale-110 rounded-2xl bg-slate-50 p-8 text-left ring-1 ring-slate-100 hover:shadow-lg duration-150'>
                    <h2 className='font-bold text-lg mt-5'>Limpieza dental</h2>
                    <p className='text-sm text-gray-500 mt-2'>Mantén tus dientes sanos y libres de sarro.</p>
                </div>
                <div className='hover:scale-110 rounded-2xl bg-slate-50 p-8 text-left ring-1 ring-slate-100 hover:shadow-lg duration-150'>
                    <h2 className='font-bold text-lg mt-5'>Blanqueamiento</h2>
                    <p className='text-sm text-gray-500 mt-2'>Recupera el brillo natural de tu sonrisa con tecnología sin dolor.</p>
                </div>
                <div className='hover:scale-110 rounded-2xl bg-slate-50 p-8 text-left ring-1 ring-slate-100 hover:shadow-lg duration-150'>
                    
                    <h2 className='font-bold text-lg mt-5'>Ortodoncia</h2>
                    <p className='text-sm text-gray-500 mt-2'>Alineadores y brackets para corregir tu mordida a cualquier edad.</p>
                </div>
                
                
            </div>
            <div className='flex justify-center mt-6'>
                <button className='cursor-pointer border-2 rounded-lg bg-black text-white px-12 py-4 duration-150 active:scale-90 hover:scale-110 '>Ver Servicios </button>
            </div>
        </div>
    </div>
    {/* PIE DE PAGINA*/}
<div className='bg-slate-900 text-white px-8 py-16'>
    <div className='max-w-7xl mx-auto grid gap-10 md:grid-cols-4'>

        {/* Marca */}
        <div>
            <div className='flex items-center'>
                <img src={diente} alt='' className='h-8 w-auto' />
                <h1 className='font-extrabold text-xl'></h1>
            </div>
            <p className='text-sm text-gray-400 mt-4'>Buscamos brindar atención médica de calidad, accesible y humana para todos nuestros pacientes.</p>
        </div>

        {/* Servicios */}
        <div>
            <h2 className='font-bold mb-4'>Servicios</h2>
            <div className='flex flex-col gap-2 text-sm text-gray-400'>
                <a href='#' className='hover:text-cyan-400 duration-150'>Limpieza</a>
                <a href='#' className='hover:text-cyan-400 duration-150'>Blanqueamiento</a>
                <a href='#' className='hover:text-cyan-400 duration-150'>Ortodoncia</a>
                
            </div>
        </div>

        {/* Enlaces */}
        <div>
            <h2 className='font-bold mb-4'>Enlaces</h2>
            <div className='flex flex-col gap-2 text-sm text-gray-400'>
                <a href='#' className='hover:text-cyan-400 duration-150'>Especialistas</a>
                <a href='#' className='hover:text-cyan-400 duration-150'>Preguntas Frecuentes</a>
                <a href='#' className='hover:text-cyan-400 duration-150'>Contacto</a>
            </div>
        </div>

        {/* Contacto */}
        <div>
            <h2 className='font-bold mb-4'>Contacto</h2>
            <div className='flex flex-col gap-3 text-sm text-gray-400'>
                <p>Tegucigalpa</p>
                <p>EjemploCOrreo@gmail.com</p>
                <p>Lun–Vie · 8AM – 6PM</p>
            </div>
        </div>

    </div>
</div>
    
</div>
  )
}
export default LandingPage