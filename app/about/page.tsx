import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Sobre Nosotros"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Descubre la historia detrás de FitnessElite y nuestra pasión por ayudar a las personas a alcanzar sus metas fitness.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-zinc-400 mb-6">
                Fundado en 2020, FitnessElite nació con una visión clara: revolucionar la forma en que las personas
                abordan su salud y bienestar. Comenzamos como un pequeño gimnasio local y hemos crecido hasta
                convertirnos en una de las comunidades fitness más vibrantes de la región.
              </p>
              <p className="text-zinc-400 mb-6">
                Nuestra filosofía se basa en la creencia de que cada persona merece acceso a entrenamiento de alta
                calidad y apoyo personalizado para alcanzar sus objetivos de fitness.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Nuestra Historia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Los principios que guían cada aspecto de nuestro servicio y compromiso con tu éxito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excelencia",
                description:
                  "Nos esforzamos por ofrecer la más alta calidad en instalaciones, programas y servicio al cliente.",
              },
              {
                title: "Innovación",
                description:
                  "Constantemente actualizamos nuestros métodos y equipamiento para proporcionar la mejor experiencia fitness.",
              },
              {
                title: "Comunidad",
                description:
                  "Creamos un ambiente acogedor y motivador donde todos se sienten parte de la familia FitnessElite.",
              },
            ].map((valor, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-bold mb-3">{valor.title}</h3>
                <p className="text-zinc-400">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Conoce a los profesionales dedicados que hacen posible tu transformación fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Carlos Ruiz",
                role: "Director General",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Ana Martínez",
                role: "Directora de Entrenamiento",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Roberto Sánchez",
                role: "Jefe de Nutrición",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Laura Torres",
                role: "Coordinadora de Programas",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((miembro, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={miembro.image} alt={miembro.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{miembro.name}</h3>
                <p className="text-red-600">{miembro.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Únete a Nuestra Comunidad</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Sé parte de FitnessElite y comienza tu viaje hacia una vida más saludable y activa hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/join" className="btn-primary bg-white text-red-600 hover:bg-zinc-100">
              Comenzar Ahora
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-red-600">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
