"use client"

import Image from "next/image"
import Link from "next/link"
import { 
  Calendar, 
  CreditCard, 
  Settings, 
  User, 
  FileText, 
  Bell, 
  LogOut,
  ChevronRight,
  Activity 
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div>
      {/* Panel Principal */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Menú Lateral */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <div className="flex items-center mb-8">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Foto de Perfil"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Juan Pérez</h3>
                    <p className="text-zinc-400">Miembro Premium</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  {[
                    { icon: User, label: "Perfil", href: "/cuenta/perfil" },
                    { icon: Calendar, label: "Mis Clases", href: "/cuenta/clases" },
                    { icon: Activity, label: "Mi Progreso", href: "/cuenta/progreso" },
                    { icon: CreditCard, label: "Facturación", href: "/cuenta/facturacion" },
                    { icon: FileText, label: "Documentos", href: "/cuenta/documentos" },
                    { icon: Bell, label: "Notificaciones", href: "/cuenta/notificaciones" },
                    { icon: Settings, label: "Configuración", href: "/cuenta/configuracion" },
                    { icon: LogOut, label: "Cerrar Sesión", href: "/logout" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center justify-between p-3 rounded-md hover:bg-zinc-800 transition-colors"
                    >
                      <div className="flex items-center">
                        <item.icon size={20} className="mr-3" />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight size={16} />
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Contenido Principal */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                  <h3 className="text-xl font-bold mb-4">Próximas Clases</h3>
                  <div className="space-y-4">
                    {[
                      {
                        class: "Entrenamiento Funcional",
                        trainer: "María García",
                        date: "Mañana, 10:00",
                      },
                      {
                        class: "Yoga Flow",
                        trainer: "Ana Torres",
                        date: "Jueves, 18:30",
                      },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold">{session.class}</h4>
                          <p className="text-zinc-400">{session.trainer}</p>
                        </div>
                        <p className="text-zinc-400">{session.date}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                  <h3 className="text-xl font-bold mb-4">Mi Progreso</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-zinc-400 mb-2">Asistencia este mes</p>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-zinc-400 mb-2">Objetivos completados</p>
                      <div className="w-full bg-zinc-800 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-xl font-bold mb-4">Actividad Reciente</h3>
                <div className="space-y-4">
                  {[
                    {
                      action: "Clase completada",
                      detail: "Entrenamiento Funcional con María García",
                      date: "Hoy, 10:00",
                    },
                    {
                      action: "Objetivo alcanzado",
                      detail: "5 clases completadas esta semana",
                      date: "Ayer, 18:30",
                    },
                    {
                      action: "Nueva reserva",
                      detail: "Yoga Flow para el Jueves",
                      date: "Hace 2 días",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold">{activity.action}</h4>
                        <p className="text-zinc-400">{activity.detail}</p>
                      </div>
                      <p className="text-zinc-400">{activity.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
