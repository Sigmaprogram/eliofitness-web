import Image from "next/image"
import Link from "next/link"
import { Check, CreditCard, Calendar, Lock } from "lucide-react"

export default function PagoMembresiaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Pago de Membresía"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pago de Membresía</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Completa tu pago para comenzar a disfrutar de todos los beneficios de tu membresía FitnessElite.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Form */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Información de Pago</h2>

              <form className="space-y-8">
                <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
                  <h3 className="text-xl font-bold mb-6">Información Personal</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="form-label">
                        Nombre
                      </label>
                      <input type="text" id="nombre" className="form-input" placeholder="Juan" required />
                    </div>
                    <div>
                      <label htmlFor="apellidos" className="form-label">
                        Apellidos
                      </label>
                      <input type="text" id="apellidos" className="form-input" placeholder="Martínez" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Correo Electrónico
                      </label>
                      <input type="email" id="email" className="form-input" placeholder="juan@ejemplo.com" required />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="form-label">
                        Teléfono
                      </label>
                      <input type="tel" id="telefono" className="form-input" placeholder="(+34) 600 123 456" required />
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <CreditCard className="mr-2" /> Detalles de Pago
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="tarjeta" className="form-label">
                        Número de Tarjeta
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="tarjeta"
                          className="form-input pl-12"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <CreditCard size={20} className="text-zinc-500" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="caducidad" className="form-label">
                          Fecha de Caducidad
                        </label>
                        <div className="relative">
                          <input type="text" id="caducidad" className="form-input pl-12" placeholder="MM/AA" required />
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Calendar size={20} className="text-zinc-500" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cvv" className="form-label">
                          CVV
                        </label>
                        <div className="relative">
                          <input type="text" id="cvv" className="form-input pl-12" placeholder="123" required />
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Lock size={20} className="text-zinc-500" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="nombre-tarjeta" className="form-label">
                        Nombre en la Tarjeta
                      </label>
                      <input
                        type="text"
                        id="nombre-tarjeta"
                        className="form-input"
                        placeholder="JUAN MARTINEZ"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
                  <h3 className="text-xl font-bold mb-6">Dirección de Facturación</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="direccion" className="form-label">
                        Dirección
                      </label>
                      <input
                        type="text"
                        id="direccion"
                        className="form-input"
                        placeholder="Calle Ejemplo 123"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="ciudad" className="form-label">
                          Ciudad
                        </label>
                        <input type="text" id="ciudad" className="form-input" placeholder="Madrid" required />
                      </div>
                      <div>
                        <label htmlFor="codigo-postal" className="form-label">
                          Código Postal
                        </label>
                        <input type="text" id="codigo-postal" className="form-input" placeholder="28001" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="pais" className="form-label">
                        País
                      </label>
                      <select id="pais" className="form-select" required>
                        <option value="">Seleccionar país</option>
                        <option value="ES">España</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CL">Chile</option>
                        <option value="PE">Perú</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
                  <h3 className="text-xl font-bold mb-6">Términos y Condiciones</h3>
                  <div className="space-y-4">
                    <label className="flex items-start">
                      <input type="checkbox" className="form-checkbox mt-1 mr-2" required />
                      <span className="text-sm">
                        Acepto los{" "}
                        <Link href="/terms" className="text-red-600 hover:underline">
                          Términos de Servicio
                        </Link>{" "}
                        y la{" "}
                        <Link href="/privacy" className="text-red-600 hover:underline">
                          Política de Privacidad
                        </Link>
                        .
                      </span>
                    </label>
                    <label className="flex items-start">
                      <input type="checkbox" className="form-checkbox mt-1 mr-2" required />
                      <span className="text-sm">
                        Entiendo que mi membresía se renovará automáticamente al final del período de suscripción, a
                        menos que cancele al menos 7 días antes de la fecha de renovación.
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link href="/join" className="text-red-600 hover:underline flex items-center">
                    ← Volver a Planes
                  </Link>
                  <button type="submit" className="btn-primary">
                    Completar Pago
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Resumen del Pedido</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Plan</span>
                    <span className="font-bold">Plan Premium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Duración</span>
                    <span>Mensual</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Precio</span>
                    <span>59€/mes</span>
                  </div>
                  <div className="border-t border-zinc-800 my-4"></div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Subtotal</span>
                    <span>59€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">IVA (21%)</span>
                    <span>12,39€</span>
                  </div>
                  <div className="border-t border-zinc-800 my-4"></div>
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>71,39€</span>
                  </div>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg mb-6">
                  <h4 className="font-bold mb-4">Incluye:</h4>
                  <ul className="space-y-2">
                    {[
                      "Acceso completo a instalaciones",
                      "Evaluación integral de fitness",
                      "Clases grupales ilimitadas",
                      "1 sesión de entrenamiento personal/mes",
                      "Consulta de nutrición",
                      "Acceso a funciones premium de la app",
                      "Acceso a vestuarios con servicio de toallas",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={16} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Lock size={16} className="text-red-600 mr-2" />
                    <span className="font-bold">Pago Seguro</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-4">
                    Tus datos de pago están protegidos con encriptación SSL de 256 bits.
                  </p>
                  <div className="flex space-x-2">
                    <div className="bg-white p-1 rounded">
                      <Image
                        src="/placeholder.svg?height=30&width=40"
                        alt="Visa"
                        width={40}
                        height={30}
                        className="h-6"
                      />
                    </div>
                    <div className="bg-white p-1 rounded">
                      <Image
                        src="/placeholder.svg?height=30&width=40"
                        alt="Mastercard"
                        width={40}
                        height={30}
                        className="h-6"
                      />
                    </div>
                    <div className="bg-white p-1 rounded">
                      <Image
                        src="/placeholder.svg?height=30&width=40"
                        alt="American Express"
                        width={40}
                        height={30}
                        className="h-6"
                      />
                    </div>
                    <div className="bg-white p-1 rounded">
                      <Image
                        src="/placeholder.svg?height=30&width=40"
                        alt="PayPal"
                        width={40}
                        height={30}
                        className="h-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Necesitas Ayuda?</h2>
            <p className="text-zinc-400 mb-8">
              Si tienes preguntas sobre nuestros planes de membresía o el proceso de pago, nuestro equipo de atención al
              cliente está aquí para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-secondary">
                Contactar Soporte
              </Link>
              <Link href="/faq" className="btn-secondary">
                Preguntas Frecuentes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
