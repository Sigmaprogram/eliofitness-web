import Image from "next/image"
import Link from "next/link"
import { User, CreditCard, Calendar, Settings, Bell, LogOut, Edit, ChevronRight } from "lucide-react"

export default function CuentaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Mi Cuenta"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mi Cuenta</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Gestiona tu perfil, membresía y preferencias desde tu panel de control personal.
            </p>
          </div>
        </div>
      </section>

      {/* Account Dashboard */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden sticky top-24">
                <div className="p-6 text-center border-b border-zinc-800">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Foto de Perfil"
                      fill
                      className="rounded-full object-cover"
                    />
                    <button className="absolute bottom-0 right-0 bg-red-600 p-1 rounded-full">
                      <Edit size={14} />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold">Juan Martínez</h3>
                  <p className="text-zinc-400">Miembro desde Enero 2025</p>
                </div>
                <nav className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/account" className="flex items-center p-3 rounded-md bg-zinc-800 text-white">
                        <User size={18} className="mr-3" />
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/account/membership"
                        className="flex items-center p-3 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      >
                        <CreditCard size={18} className="mr-3" />
                        Membresía
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/account/classes"
                        className="flex items-center p-3 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      >
                        <Calendar size={18} className="mr-3" />
                        Mis Clases
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/account/settings"
                        className="flex items-center p-3 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      >
                        <Settings size={18} className="mr-3" />
                        Configuración
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/account/notifications"
                        className="flex items-center p-3 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      >
                        <Bell size={18} className="mr-3" />
                        Notificaciones
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/login"
                        className="flex items-center p-3 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      >
                        <LogOut size={18} className="mr-3" />
                        Cerrar Sesión
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Profile Information */}
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Información Personal</h2>
                  <button className="text-red-600 hover:text-red-500 flex items-center">
                    <Edit size={16} className="mr-1" /> Editar
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm text-zinc-500 mb-1">Nombre Completo</h3>
                    <p className="text-white">Juan Martínez García</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-zinc-500 mb-1">Correo Electrónico</h3>
                    <p className="text-white">juan.martinez@ejemplo.com</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-zinc-500 mb-1">Teléfono</h3>
                    <p className="text-white">(+34) 600 123 456</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-zinc-500 mb-1">Fecha de Nacimiento</h3>
                    <p className="text-white">15 de Marzo, 1990</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-zinc-500 mb-1">Género</h3>
                    <p className="text-white">Masculino</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-zinc-500 mb-1">Dirección</h3>
                    <p className="text-white">Calle Ejemplo 123, 28001 Madrid</p>
                  </div>
                </div>
              </div>

              {/* Membership Information */}
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Información de Membresía</h2>
                  <Link href="/account/membership" className="text-red-600 hover:text-red-500 flex items-center">
                    Ver Detalles <ChevronRight size={16} />
                  </Link>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Plan Premium</h3>
                      <p className="text-zinc-400">Renovación: 15 de Junio, 2025</p>
                    </div>
                    <span className="bg-green-600/20 text-green-500 px-3 py-1 rounded-full text-sm font-medium">
                      Activo
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm text-zinc-500 mb-1">Método de Pago</h3>
                    <p className="text-white flex items-center">
                      <CreditCard size={16} className="mr-2" /> •••• •••• •••• 4589
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm text-zinc-500 mb-1">Ciclo de Facturación</h3>
                    <p className="text-white">Mensual</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-zinc-500 mb-1">Próximo Pago</h3>
                    <p className="text-white">15 de Junio, 2025 - 59€</p>
                  </div>
                </div>
              </div>

              {/* Upcoming Classes */}
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Próximas Clases</h2>
                  <Link href="/account/classes" className="text-red-600 hover:text-red-500 flex items-center">
                    Ver Todas <ChevronRight size={16} />
                  </Link>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      class: "HIIT Intenso",
                      instructor: "Sara Rodríguez",
                      date: "Hoy, 18:00 - 19:00",
                      location: "Sala 3",
                    },
                    {
                      class: "Yoga Restaurativo",
                      instructor: "Elena García",
                      date: "Mañana, 10:00 - 11:00",
                      location: "Sala 2",
                    },
                    {
                      class: "Entrenamiento de Fuerza",
                      instructor: "Juan Martínez",
                      date: "Jueves, 19:00 - 20:00",
                      location: "Sala 1",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-zinc-800 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-bold">{item.class}</h3>
                        <p className="text-zinc-400">
                          {item.instructor} • {item.location}
                        </p>
                        <p className="text-zinc-500 text-sm">{item.date}</p>
                      </div>
                      <button className="btn-secondary py-2 px-4">Cancelar</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fitness Progress */}
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Mi Progreso Fitness</h2>
                  <Link href="/account/progress" className="text-red-600 hover:text-red-500 flex items-center">
                    Ver Detalles <ChevronRight size={16} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-zinc-800 rounded-lg p-4 text-center">
                    <h3 className="text-zinc-400 mb-2">Visitas este mes</h3>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-4 text-center">
                    <h3 className="text-zinc-400 mb-2">Clases asistidas</h3>
                    <p className="text-3xl font-bold">8</p>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-4 text-center">
                    <h3 className="text-zinc-400 mb-2">Calorías quemadas</h3>
                    <p className="text-3xl font-bold">4,250</p>
                  </div>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h3 className="font-bold mb-4">Objetivos Actuales</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Pérdida de peso</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full bg-zinc-700 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Fuerza</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-zinc-700 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Resistencia</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-zinc-700 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
