import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function JoinPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Join Hero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Únete a ElioFitness</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Da el primer paso hacia una vida más saludable y fuerte. Elige el plan de membresía que se ajuste a tus objetivos y
              comienza tu viaje fitness hoy.
            </p>
          </div>
        </div>
      </section>

      {/* Planes de Membresía */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Elige tu Plan de Membresía</h2>
            <p className="text-zinc-400">
              Ofrecemos una variedad de opciones de membresía para adaptarnos a tus objetivos fitness, horario y presupuesto. Todos los planes
              incluyen acceso a nuestras instalaciones de última generación y asesoramiento experto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Plan Básico",
                price: "29,99€",
                period: "mensual",
                features: [
                  "Acceso a instalaciones del gimnasio",
                  "Evaluación física básica",
                  "2 clases grupales por semana",
                  "Acceso a vestuarios",
                  "Recursos de entrenamiento online",
                ],
                popular: false,
              },
              {
                title: "Plan Premium",
                price: "59,99€",
                period: "mensual",
                features: [
                  "Acceso completo a instalaciones",
                  "Evaluación física completa",
                  "Clases grupales ilimitadas",
                  "1 sesión PT mensual",
                  "Consulta nutricional",
                  "Acceso a funciones premium de la app",
                  "Acceso a vestuarios con servicio de toallas",
                ],
                popular: true,
              },
              {
                title: "Plan Elite",
                price: "99,99€",
                period: "mensual",
                features: [
                  "Acceso 24/7 a todas las instalaciones",
                  "Evaluación física avanzada",
                  "Clases grupales ilimitadas",
                  "4 sesiones PT mensuales",
                  "Plan nutricional personalizado",
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
                    <span className="text-zinc-400 ml-1">/{plan.period}</span>
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
                    href="#registration-form"
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

      {/* Formulario de Registro */}
      <section id="registration-form" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Regístrate Ahora</h2>
              <p className="text-zinc-400 mb-8">
                Completa el formulario para iniciar tu membresía. Nuestro equipo te contactará para completar el proceso
                de registro y programar tu primera visita.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Juan"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Pérez"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="(+34) 600 123 456"
                  />
                </div>

                <div>
                  <label htmlFor="membership" className="block text-sm font-medium mb-2">
                    Plan de Membresía
                  </label>
                  <select
                    id="membership"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Selecciona un plan</option>
                    <option value="basic">Plan Básico - 29,99€/mes</option>
                    <option value="premium">Plan Premium - 59,99€/mes</option>
                    <option value="elite">Plan Elite - 99,99€/mes</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5 bg-zinc-800 border border-zinc-700 rounded focus:ring-2 focus:ring-red-600 text-red-600"
                    />
                    <span className="ml-2 text-zinc-300 text-sm">
                      Acepto los{" "}
                      <Link href="/terms" className="text-red-600 hover:underline">
                        Términos de Servicio
                      </Link>{" "}
                      y la{" "}
                      <Link href="/privacy" className="text-red-600 hover:underline">
                        Política de Privacidad
                      </Link>
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn-primary">
                  Enviar Registro
                </button>
              </form>
            </div>

            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=1200&width=800" alt="Registro" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios de Membresía */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Beneficios de la Membresía</h2>
            <p className="text-zinc-400">
              Cuando te unes a ElioFitness, no solo obtienes acceso a un gimnasio, te unes a una comunidad dedicada
              a ayudarte a alcanzar tus objetivos fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Instalaciones de Última Generación",
                description: "Acceso a equipamiento premium, amplias áreas de entrenamiento e instalaciones modernas y limpias.",
              },
              {
                title: "Asesoramiento Experto",
                description: "Trabaja con entrenadores certificados dedicados a ayudarte a alcanzar tus objetivos fitness.",
              },
              {
                title: "Variedad de Clases",
                description: "Elige entre una amplia variedad de clases grupales para mantener tus entrenamientos frescos y motivadores.",
              },
              {
                title: "Comunidad de Apoyo",
                description: "Únete a una comunidad de personas con objetivos similares que te motivarán e inspirarán en tu viaje fitness.",
              },
              {
                title: "Horarios Flexibles",
                description: "Con horarios extendidos y acceso 24/7 para miembros Elite, puedes entrenar según tu agenda.",
              },
              {
                title: "Recursos Digitales",
                description: "Accede a planes de entrenamiento, guías nutricionales y seguimiento de progreso a través de nuestra app móvil.",
              },
              {
                title: "Servicios de Recuperación",
                description: "Aprovecha nuestras instalaciones de recuperación para ayudar a tu cuerpo a repararse y fortalecerse.",
              },
              {
                title: "Eventos Especiales",
                description: "Participa en eventos exclusivos para miembros, desafíos y talleres durante todo el año.",
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

      {/* Testimonios */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Lo Que Dicen Nuestros Miembros</h2>
            <p className="text-zinc-400">
              No solo tomes nuestra palabra. Escucha a nuestros miembros que han transformado sus vidas con ElioFitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Roberto K.",
                image: "/placeholder.svg?height=200&width=200",
                quote: "Llevo 6 meses como miembro y ya he perdido 15 kilos. ¡Los entrenadores son increíbles y la comunidad muy motivadora!",
                plan: "Miembro Premium",
              },
              {
                name: "Jennifer L.",
                image: "/placeholder.svg?height=200&width=200",
                quote: "El programa de entrenamiento personalizado me ha ayudado a alcanzar objetivos fitness que nunca pensé posibles. ¡Altamente recomendado!",
                plan: "Miembro Elite",
              },
              {
                name: "David M.",
                image: "/placeholder.svg?height=200&width=200",
                quote: "Las instalaciones son de primera clase y los entrenadores realmente saben lo que hacen. He visto resultados increíbles en solo 3 meses.",
                plan: "Miembro Básico",
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
                    <p className="text-red-600">{testimonial.plan}</p>
                  </div>
                </div>
                <p className="text-zinc-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Preguntas Frecuentes</h2>
            <p className="text-zinc-400">
              ¿Tienes preguntas sobre cómo unirte a ElioFitness? Encuentra respuestas a las preguntas más comunes a continuación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "¿Hay una cuota de inscripción?",
                answer: "Sí, hay una cuota única de inscripción de 49€ para todos los planes. Sin embargo, frecuentemente tenemos promociones que la bonifican, consulta las ofertas actuales.",
              },
              {
                question: "¿Puedo cancelar mi membresía en cualquier momento?",
                answer: "Sí, puedes cancelar tu membresía en cualquier momento. Sin embargo, ten en cuenta que algunos planes pueden tener un período mínimo de compromiso o tarifas de cancelación.",
              },
              {
                question: "¿Ofrecen membresías familiares?",
                answer: "Sí, ofrecemos paquetes de membresía familiar que proporcionan tarifas con descuento para miembros del hogar. Por favor, contacta con nuestro equipo de membresías para más detalles.",
              },
              {
                question: "¿Hay un requisito de edad mínima?",
                answer: "Los miembros deben tener al menos 16 años. Los miembros de 16-17 años deben tener un padre o tutor que firme su acuerdo de membresía.",
              },
              {
                question: "¿Puedo congelar mi membresía?",
                answer: "Sí, puedes congelar tu membresía hasta 3 meses al año por razones médicas o viajes prolongados. Puede aplicarse una pequeña cuota mensual de mantenimiento.",
              },
              {
                question: "¿Ofrecen membresías corporativas?",
                answer: "Sí, ofrecemos tarifas especiales para empresas. Contacta con nuestro equipo de bienestar corporativo para más información sobre cómo establecer una cuenta corporativa.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-400 mb-4">¿Aún tienes preguntas? Estamos aquí para ayudarte.</p>
            <Link href="/contact" className="btn-secondary">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Transformar tu Vida?</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Únete a ElioFitness hoy y da el primer paso hacia un tú más saludable y fuerte. Nuestros entrenadores expertos
            y comunidad de apoyo están aquí para ayudarte a tener éxito.
          </p>
          <a href="#registration-form" className="btn-primary bg-white text-red-600 hover:bg-zinc-100">
            Únete Ahora
          </a>
        </div>
      </section>
    </div>
  )
}
