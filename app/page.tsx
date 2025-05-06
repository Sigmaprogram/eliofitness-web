import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Star } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920"
            alt="ELIO FITNESS Hero Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* Número de teléfono vertical */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
          <div className="flex flex-col items-center">
            <div className="w-px h-20 bg-red-600 mb-8"></div>
            <Link 
              href="/contact" 
              className="group transition-all duration-300"
            >
              <div className="vertical-text transform rotate-180 text-white text-lg tracking-widest group-hover:text-red-500 group-hover:scale-105 transition-all duration-300">
                +1-809-555-1234
              </div>
            </Link>
            <div className="w-px h-20 bg-red-600 mt-8"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-2xl">
            <h5 className="text-red-600 font-bold mb-4 uppercase tracking-wider">Alcanza Tus</h5>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">METAS FITNESS</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Con <span className="text-red-600">ElioFitness</span>
            </h2>
            <p className="text-lg text-zinc-300 mb-8">
              Transforma tu cuerpo y mente con nuestros entrenadores expertos y programas de fitness premium. Comienza
              tu viaje fitness hoy y conviértete en la mejor versión de ti mismo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/join" className="btn-primary">
                Únete Ahora
              </Link>
              <Link href="/programs" className="btn-secondary">
                Explorar Programas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Programas Destacados</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Elige entre nuestra amplia gama de programas de fitness especializados diseñados para ayudarte a alcanzar
              tus objetivos específicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Entrenamiento de Fuerza",
                image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800",
                description:
                  "Desarrolla músculo, aumenta la fuerza y mejora tu físico general con nuestro programa integral de entrenamiento de fuerza.",
              },
              {
                title: "Fitness Cardiovascular",
                image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800",
                description:
                  "Mejora tu salud cardiovascular, quema calorías y aumenta tu resistencia con nuestro programa de fitness cardiovascular.",
              },
              {
                title: "Entrenamientos HIIT",
                image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800",
                description:
                  "Maximiza la quema de calorías y aumenta tu metabolismo con nuestros entrenamientos de alta intensidad por intervalos.",
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
                  <Link
                    href={`/programs/${program.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center text-red-600 font-bold hover:text-red-500 transition-colors"
                  >
                    Saber Más <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs" className="btn-secondary">
              Ver Todos los Programas
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes de Membresía</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Elige el plan de membresía perfecto que se adapte a tus objetivos de fitness y presupuesto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Plan Básico",
                price: "29€",
                features: [
                  "Acceso a instalaciones del gimnasio",
                  "Evaluación básica de fitness",
                  "2 clases grupales por semana",
                  "Acceso a vestuarios",
                  "Recursos de entrenamiento online",
                ],
                popular: false,
              },
              {
                title: "Plan Premium",
                price: "59€",
                features: [
                  "Acceso completo a instalaciones",
                  "Evaluación integral de fitness",
                  "Clases grupales ilimitadas",
                  "1 sesión de entrenamiento personal/mes",
                  "Consulta de nutrición",
                  "Acceso a funciones premium de la app",
                  "Acceso a vestuarios con servicio de toallas",
                ],
                popular: true,
              },
              {
                title: "Plan Elite",
                price: "99€",
                features: [
                  "Acceso 24/7 a todas las instalaciones",
                  "Evaluación avanzada de fitness",
                  "Clases grupales ilimitadas",
                  "4 sesiones de entrenamiento personal/mes",
                  "Plan de nutrición personalizado",
                  "Acceso a servicios de recuperación",
                  "Funciones premium de la app",
                  "Taquilla VIP con amenidades",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <div key={index} className={`card relative ${plan.popular ? "border-red-600" : "border-zinc-800"}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-bold">
                    POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-zinc-400 ml-1">/mes</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/membership/payment"
                    className={
                      plan.popular ? "btn-primary w-full text-center block" : "btn-secondary w-full text-center block"
                    }
                  >
                    Elegir Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h5 className="text-red-600 font-bold mb-4 uppercase tracking-wider">¿Por Qué Elegirnos?</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Proporcionamos La Mejor Experiencia Fitness</h2>
              <p className="text-zinc-400 mb-8">
                En ElioFitness, estamos comprometidos a ayudarte a alcanzar tus objetivos de fitness con nuestras
                instalaciones de última generación, entrenadores expertos y enfoque personalizado del fitness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Entrenadores Expertos",
                    description: "Nuestros entrenadores certificados te guiarán en tu viaje fitness.",
                  },
                  {
                    title: "Equipamiento Moderno",
                    description: "Equipamiento fitness de última generación para entrenamientos efectivos.",
                  },
                  {
                    title: "Planes Personalizados",
                    description: "Planes de fitness personalizados adaptados a tus objetivos específicos.",
                  },
                  {
                    title: "Comunidad de Apoyo",
                    description: "Únete a una comunidad que se motiva y apoya mutuamente.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-zinc-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800"
                alt="Instalaciones Fitness"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conoce a Nuestros Entrenadores Expertos</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Nuestros profesionales del fitness certificados están dedicados a ayudarte a alcanzar tus objetivos de
              fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Carlos Ruiz",
                role: "Entrenador Principal",
                image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500",
              },
              {
                name: "Ana Martínez",
                role: "Especialista en Nutrición",
                image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=500",
              },
              {
                name: "Juan Martínez",
                role: "Entrenador de Fuerza",
                image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500",
              },
              {
                name: "Sara Rodríguez",
                role: "Especialista en Cardio",
                image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
              },
              {
                name: "Miguel González",
                role: "Experto en Nutrición",
                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500",
              },
              {
                name: "Elena García",
                role: "Instructora de Yoga",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",
              },
            ].map((trainer, index) => (
              <div key={index} className="card group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{trainer.name}</h3>
                  <p className="text-red-600">{trainer.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/trainers" className="btn-secondary">
              Ver Todos los Entrenadores
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Miembros</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Escucha a nuestros miembros que han transformado sus vidas con ElioFitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Roberto K.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
                quote:
                  "He sido miembro durante 6 meses y ya he perdido 15 kilos. ¡Los entrenadores son increíbles y la comunidad es muy solidaria!",
                rating: 5,
              },
              {
                name: "Jennifer L.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
                quote:
                  "El programa de entrenamiento personalizado me ha ayudado a lograr objetivos de fitness que nunca pensé posibles. ¡Altamente recomendado!",
                rating: 5,
              },
              {
                name: "David M.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
                quote:
                  "Las instalaciones son de primera clase y los entrenadores realmente saben lo que hacen. He visto resultados increíbles en solo 3 meses.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-zinc-600"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-zinc-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Últimos Artículos</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Mantente actualizado con los últimos consejos de fitness, asesoramiento nutricional e historias de éxito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "10 Consejos para Desarrollar Músculo Rápidamente",
                image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600",
                date: "1 de Mayo, 2025",
                excerpt:
                  "Aprende los secretos para desarrollar músculo eficientemente con estos consejos aprobados por expertos.",
              },
              {
                title: "La Guía Definitiva para la Pérdida de Grasa",
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600",
                date: "25 de Abril, 2025",
                excerpt:
                  "Descubre las estrategias más efectivas para la pérdida de grasa sostenible y la transformación corporal.",
              },
              {
                title: "Mitos de Nutrición Desmentidos",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
                date: "18 de Abril, 2025",
                excerpt:
                  "Nuestros expertos en nutrición separan la realidad de la ficción sobre las tendencias dietéticas populares y creencias.",
              },
            ].map((article, index) => (
              <div key={index} className="card group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-zinc-500 text-sm mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-zinc-400 mb-4">{article.excerpt}</p>
                  <Link
                    href="/blog"
                    className="flex items-center text-red-600 font-bold hover:text-red-500 transition-colors"
                  >
                    Leer Más <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-secondary">
              Ver Todos los Artículos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Comenzar Tu Viaje Fitness?</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Únete a ElioFitness hoy y da el primer paso hacia un tú más saludable y fuerte. Nuestros entrenadores
            expertos y comunidad de apoyo están aquí para ayudarte a tener éxito.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/join" className="btn-primary bg-white text-red-600 hover:bg-zinc-100">
              Únete Ahora
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-red-600">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
      {/* Resto de las secciones... */}
    </div>
  )
}