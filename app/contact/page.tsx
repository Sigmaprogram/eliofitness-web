import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?w=1920"
            alt="Contacto"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Estamos aquí para responder tus preguntas y ayudarte en tu viaje fitness. No dudes en contactarnos.
            </p>
          </div>
        </div>
      </section>

      {/* Información de Contacto y Formulario */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Información de Contacto</h2>
                <div className="w-20 h-1 bg-red-600 mb-6"></div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Ubicación</h3>
                    <p className="text-zinc-400">Av. Principal #123, Santo Domingo</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Teléfono</h3>
                    <p className="text-zinc-400">+1-809-555-1234</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-zinc-400">info@eliofitness.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Horario</h3>
                    <p className="text-zinc-400">Lunes a Viernes: 6:00 AM - 10:00 PM</p>
                    <p className="text-zinc-400">Sábados y Domingos: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Síguenos en Redes Sociales</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-zinc-400 hover:text-red-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-red-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-red-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
                    alt="Nuestras Instalaciones"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-input" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="Tu email" />
                  </div>
                </div>
                <div>
                  <label className="form-label">Asunto</label>
                  <input type="text" className="form-input" placeholder="Asunto del mensaje" />
                </div>
                <div>
                  <label className="form-label">Mensaje</label>
                  <textarea className="form-input h-32" placeholder="Tu mensaje"></textarea>
                </div>

                <div>
                  <label htmlFor="asunto" className="form-label">
                    Asunto
                  </label>
                  <select id="asunto" className="form-select" required>
                    <option value="">Seleccionar asunto</option>
                    <option value="membresia">Información sobre Membresías</option>
                    <option value="clases">Información sobre Clases</option>
                    <option value="entrenadores">Consulta sobre Entrenadores</option>
                    <option value="soporte">Soporte Técnico</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    className="form-textarea"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Mapa de ubicación"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h2>
            <p className="text-zinc-400 mb-12">
              Encuentra respuestas rápidas a las preguntas más comunes. Si no encuentras lo que buscas, no dudes en
              contactarnos.
            </p>
            <Link href="/faq" className="btn-primary">
              Ver Todas las Preguntas Frecuentes
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
