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
            src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1920"
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

      {/* Programas Principales */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Entrenamiento de Fuerza",
                image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800",
                description: "Desarrolla fuerza y músculo con nuestro programa especializado.",
                duration: "12 semanas",
                groupSize: "Grupos reducidos",
                level: "Todos los niveles",
              },
              {
                title: "Cardio y Resistencia",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
                description: "Mejora tu resistencia y quema grasa con entrenamientos cardiovasculares.",
                duration: "8 semanas",
                groupSize: "Clases grupales",
                level: "Principiante a Avanzado",
              },
              {
                title: "HIIT Elite",
                image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800",
                description: "Entrenamientos de alta intensidad para máximos resultados.",
                duration: "6 semanas",
                groupSize: "Grupos reducidos",
                level: "Intermedio a Avanzado",
              },
              {
                title: "Yoga y Flexibilidad",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
                description:
                  "Mejora tu flexibilidad, equilibrio y fuerza mientras reduces el estrés con nuestras clases de yoga.",
                duration: "Continuo",
                groupSize: "Clases grupales",
                level: "Todos los niveles",
              },
              {
                title: "Pérdida de Peso",
                image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800",
                description:
                  "Programa integral que combina ejercicio y nutrición para ayudarte a alcanzar tus objetivos de pérdida de peso.",
                duration: "12 semanas",
                groupSize: "Seguimiento personalizado",
                level: "Todos los niveles",
              },
              {
                title: "Entrenamiento Funcional",
                image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800",
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
                    <div className="flex items-center text-zinc-300">
                      <Clock size={16} className="mr-2" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center text-zinc-300">
                      <Users size={16} className="mr-2" />
                      <span>{program.groupSize}</span>
                    </div>
                    <div className="flex items-center text-zinc-300">
                      <Target size={16} className="mr-2" />
                      <span>{program.level}</span>
                    </div>
                  </div>
                  <Link
                    href={`/programs/${program.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="btn-primary w-full text-center"
                  >
                    Más Información
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programas Especializados */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Programas Especializados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Yoga y Flexibilidad",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
                description: "Mejora tu flexibilidad y equilibrio con nuestras clases de yoga.",
              },
              {
                title: "Rehabilitación Deportiva",
                image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800",
                description: "Programa especializado para recuperación de lesiones.",
              },
            ].map((program, index) => (
              <div key={index} className="card group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="text-zinc-300">{program.description}</p>
                  </div>
                </div>
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
            Únete a cualquiera de nuestros programas y comienza tu transformación hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/join" className="btn-primary bg-white text-red-600 hover:bg-zinc-100">
              Inscríbete Ahora
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-red-600">
              Consulta Gratis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
