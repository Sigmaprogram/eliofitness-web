import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, Target } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Nuestros Programas"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Programas</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Descubre nuestra amplia gama de programas diseñados para ayudarte a alcanzar tus objetivos fitness,
              sin importar tu nivel de experiencia.
            </p>
          </div>
        </div>
      </section>

      {/* Programas */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Entrenamiento de Fuerza",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Desarrolla fuerza, gana masa muscular y mejora tu composición corporal con nuestro programa de entrenamiento de fuerza.",
                duration: "12 semanas",
                groupSize: "Grupos reducidos",
                level: "Todos los niveles",
              },
              {
                title: "Fitness Cardiovascular",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Mejora tu resistencia, quema calorías y optimiza tu salud cardiovascular con entrenamientos dinámicos y variados.",
                duration: "8 semanas",
                groupSize: "Clases grupales",
                level: "Principiante a Avanzado",
              },
              {
                title: "HIIT",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Maximiza la quema de calorías y mejora tu condición física con entrenamientos de alta intensidad por intervalos.",
                duration: "6 semanas",
                groupSize: "Grupos reducidos",
                level: "Intermedio a Avanzado",
              },
              {
                title: "Yoga y Flexibilidad",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Mejora tu flexibilidad, equilibrio y fuerza mientras reduces el estrés con nuestras clases de yoga.",
                duration: "Continuo",
                groupSize: "Clases grupales",
                level: "Todos los niveles",
              },
              {
                title: "Pérdida de Peso",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Programa integral que combina ejercicio y nutrición para ayudarte a alcanzar tus objetivos de pérdida de peso.",
                duration: "12 semanas",
                groupSize: "Seguimiento personalizado",
                level: "Todos los niveles",
              },
              {
                title: "Entrenamiento Funcional",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Mejora tu fuerza, movilidad y rendimiento en actividades cotidianas con ejercicios funcionales.",
                duration: "8 semanas",
                groupSize: "Grupos reducidos",
                level: "Todos los niveles",
              },
            ].map((program, index) => (
              <div key={index} className="card group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="text-zinc-400 mb-4">{program.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-zinc-400">
                      <Clock size={16} className="mr-2" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center text-zinc-400">
                      <Users size={16} className="mr-2" />
                      <span>{program.groupSize}</span>
                    </div>
                    <div className="flex items-center text-zinc-400">
                      <Target size={16} className="mr-2" />
                      <span>{program.level}</span>
                    </div>
                  </div>
                  <Link
                    href={`/programs/${program.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center text-red-600 font-bold hover:text-red-500 transition-colors"
                  >
                    Ver Detalles <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios de Nuestros Programas</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Descubre por qué nuestros programas son la mejor opción para alcanzar tus objetivos fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Entrenadores Expertos",
                description:
                  "Todos nuestros programas están dirigidos por entrenadores certificados con años de experiencia.",
              },
              {
                title: "Programas Personalizados",
                description:
                  "Adaptamos los entrenamientos a tu nivel y objetivos específicos para maximizar resultados.",
              },
              {
                title: "Seguimiento Continuo",
                description:
                  "Monitoreamos tu progreso y ajustamos el programa según sea necesario para garantizar tu éxito.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Comenzar?</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Únete a uno de nuestros programas y comienza tu transformación fitness hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/join" className="btn-primary bg-white text-red-600 hover:bg-zinc-100">
              Inscríbete Ahora
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-red-600">
              Consulta Gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
