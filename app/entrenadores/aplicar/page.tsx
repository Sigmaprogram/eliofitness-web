import Image from "next/image"
import Link from "next/link"

export default function AplicarEntrenadorPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Aplicar como Entrenador"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Únete al Equipo ElioFitness</h1>
            <p className="text-xl text-zinc-300 mb-8">
              ¿Eres un profesional del fitness apasionado que busca marcar la diferencia? Estamos buscando entrenadores
              talentosos para unirse a nuestro equipo.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Formulario de Solicitud para Entrenadores</h2>
              <form className="space-y-8">
                <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
                  <h3 className="text-xl font-bold mb-6">Información Personal</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="form-label">
                        Nombre
                      </label>
                      <input type="text" id="nombre" className="form-input" placeholder="Juan" />
                    </div>
                    <div>
                      <label htmlFor="apellidos" className="form-label">
                        Apellidos
                      </label>
                      <input type="text" id="apellidos" className="form-input" placeholder="Martínez" />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Correo Electrónico
                      </label>
                      <input type="email" id="email" className="form-input" placeholder="juan@ejemplo.com" />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="form-label">
                        Teléfono
                      </label>
                      <input type="tel" id="telefono" className="form-input" placeholder="(+34) 600 123 456" />
                    </div>
                    <div>
                      <label htmlFor="ciudad" className="form-label">
                        Ciudad
                      </label>
                      <input type="text" id="ciudad" className="form-input" placeholder="Madrid" />
                    </div>
                    <div>
                      <label htmlFor="pais" className="form-label">
                        País
                      </label>
                      <input type="text" id="pais" className="form-input" placeholder="España" />
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
                  <h3 className="text-xl font-bold mb-6">Experiencia y Cualificaciones</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="experiencia" className="form-label">
                        Años de Experiencia
                      </label>
                      <select id="experiencia" className="form-select">
                        <option value="">Seleccionar</option>
                        <option value="0-1">Menos de 1 año</option>
                        <option value="1-3">1-3 años</option>
                        <option value="3-5">3-5 años</option>
                        <option value="5-10">5-10 años</option>
                        <option value="10+">Más de 10 años</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="especialidad" className="form-label">
                        Especialidad Principal
                      </label>
                      <select id="especialidad" className="form-select">
                        <option value="">Seleccionar</option>
                        <option value="fuerza">Entrenamiento de Fuerza</option>
                        <option value="cardio">Fitness Cardiovascular</option>
                        <option value="hiit">HIIT</option>
                        <option value="yoga">Yoga</option>
                        <option value="pilates">Pilates</option>
                        <option value="nutricion">Nutrición</option>
                        <option value="rehabilitacion">Rehabilitación</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="certificaciones" className="form-label">
                        Certificaciones (selecciona todas las que apliquen)
                      </label>
                      <div className="space-y-3 mt-2">
                        {[
                          "NSCA-CPT",
                          "ACE-CPT",
                          "NASM-CPT",
                          "ACSM-CPT",
                          "ISSA-CPT",
                          "CrossFit Level 1",
                          "Yoga Alliance RYT",
                          "Pilates Certificado",
                          "Nutricionista Certificado",
                          "Otro",
                        ].map((cert, index) => (
                          <label key={index} className="flex items-center">
                            <input type="checkbox" className="form-checkbox mr-2" />
                            <span>{cert}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="experiencia-detalle" className="form-label">
                        Detalla tu Experiencia Profesional
                      </label>
                      <textarea
                        id="experiencia-detalle"
                        rows={5}
                        className="form-input"
                        placeholder="Describe tu experiencia laboral previa, incluyendo lugares donde has trabajado, roles y responsabilidades."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
                  <h3 className="text-xl font-bold mb-6">Documentos Requeridos</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="cv" className="form-label">
                        Currículum Vitae (PDF)
                      </label>
                      <input type="file" id="cv" accept=".pdf" className="form-file" />
                    </div>

                    <div>
                      <label htmlFor="certificados" className="form-label">
                        Certificados (PDF, puede seleccionar múltiples)
                      </label>
                      <input type="file" id="certificados" accept=".pdf" multiple className="form-file" />
                    </div>

                    <div>
                      <label htmlFor="foto" className="form-label">
                        Foto Profesional (JPG, PNG)
                      </label>
                      <input type="file" id="foto" accept=".jpg, .jpeg, .png" className="form-file" />
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
                  <h3 className="text-xl font-bold mb-6">Información Adicional</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="disponibilidad" className="form-label">
                        Disponibilidad
                      </label>
                      <select id="disponibilidad" className="form-select">
                        <option value="">Seleccionar</option>
                        <option value="tiempo-completo">Tiempo Completo</option>
                        <option value="medio-tiempo">Medio Tiempo</option>
                        <option value="fines-semana">Fines de Semana</option>
                        <option value="flexible">Horario Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="motivacion" className="form-label">
                        ¿Por qué quieres unirte a ElioFitness?
                      </label>
                      <textarea
                        id="motivacion"
                        rows={4}
                        className="form-input"
                        placeholder="Cuéntanos por qué te gustaría formar parte de nuestro equipo y qué te hace un buen candidato."
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="enfoque" className="form-label">
                        Describe tu enfoque de entrenamiento
                      </label>
                      <textarea
                        id="enfoque"
                        rows={4}
                        className="form-input"
                        placeholder="Explica tu filosofía de entrenamiento y cómo trabajas con clientes para ayudarles a alcanzar sus objetivos."
                      ></textarea>
                    </div>

                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox mr-2" />
                        <span className="text-sm">
                          Acepto que ElioFitness procese mis datos personales de acuerdo con la{" "}
                          <Link href="/privacy" className="text-red-600 hover:underline">
                            Política de Privacidad
                          </Link>
                          .
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn-primary">
                  Enviar Solicitud
                </button>
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Lo Que Buscamos</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Certificaciones reconocidas a nivel nacional en tu área de especialización</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Mínimo de 3 años de experiencia profesional en entrenamiento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Pasión por ayudar a los clientes a alcanzar sus objetivos de fitness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Excelentes habilidades de comunicación e interpersonales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Compromiso con la educación continua y el desarrollo profesional</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-6">Beneficios</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Salario competitivo y estructura de bonificaciones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Oportunidades de desarrollo profesional y certificaciones adicionales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Membresía gratuita para el gimnasio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Horarios flexibles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Ambiente de trabajo positivo y de apoyo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Preguntas Sobre el Proceso de Solicitud?</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Si tienes alguna pregunta sobre el proceso de solicitud o los requisitos, no dudes en ponerte en contacto
            con nuestro equipo de recursos humanos.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-red-600 hover:bg-zinc-100">
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  )
}
