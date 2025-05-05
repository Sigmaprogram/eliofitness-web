import Image from "next/image"
import Link from "next/link"

export default function RegistroPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=800&width=1920" alt="Registro" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Crear una Cuenta</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Únete a la comunidad FitnessElite y comienza tu viaje hacia un estilo de vida más saludable y en forma.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Registro de Usuario</h2>
              <form className="space-y-6">
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
                  <input type="tel" id="telefono" className="form-input" placeholder="(+34) 600 123 456" />
                </div>

                <div>
                  <label htmlFor="fecha-nacimiento" className="form-label">
                    Fecha de Nacimiento
                  </label>
                  <input type="date" id="fecha-nacimiento" className="form-input" required />
                </div>

                <div>
                  <label htmlFor="genero" className="form-label">
                    Género
                  </label>
                  <select id="genero" className="form-select">
                    <option value="">Seleccionar</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                    <option value="prefiero-no-decir">Prefiero no decir</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input type="password" id="password" className="form-input" placeholder="********" required />
                  <p className="text-xs text-zinc-500 mt-1">
                    La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, un número y un
                    carácter especial.
                  </p>
                </div>

                <div>
                  <label htmlFor="confirm-password" className="form-label">
                    Confirmar Contraseña
                  </label>
                  <input type="password" id="confirm-password" className="form-input" placeholder="********" required />
                </div>

                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox mr-2" required />
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
                </div>

                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox mr-2" />
                    <span className="text-sm">
                      Me gustaría recibir correos electrónicos sobre ofertas especiales, nuevos programas y consejos de
                      fitness.
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Crear Cuenta
                </button>

                <p className="text-center text-zinc-400">
                  ¿Ya tienes una cuenta?{" "}
                  <Link href="/login" className="text-red-600 hover:underline">
                    Iniciar Sesión
                  </Link>
                </p>
              </form>
            </div>

            <div className="relative h-[600px] rounded-lg overflow-hidden hidden lg:block">
              <Image src="/placeholder.svg?height=1200&width=800" alt="Registro" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold mb-4">Beneficios de Unirse</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Acceso a tu perfil personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Seguimiento de tu progreso fitness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Reserva de clases online</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Acceso a contenido exclusivo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                    <span>Ofertas especiales solo para miembros</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Registration */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">O Regístrate Con</h2>
            <div className="space-y-4">
              <button className="w-full py-3 px-4 bg-[#3b5998] text-white rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                Continuar con Facebook
              </button>
              <button className="w-full py-3 px-4 bg-[#4285F4] text-white rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                Continuar con Google
              </button>
              <button className="w-full py-3 px-4 bg-[#000000] text-white rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2.426 14.741h-3.574v-.202l1.261-1.529c.134-.159.195-.333.195-.526v-5.304c0-.193-.061-.367-.195-.526l-1.261-1.529v-.202h3.574v7.561c0 .193.061.367.195.526l1.261 1.529v.202zm1.366-2.447h.904c.166 0 .301-.135.301-.301v-8.356c0-.166-.135-.301-.301-.301h-.904c-.166 0-.301.135-.301.301v8.356c0 .166.135.301.301.301zm5.06-7.561c0-.166-.135-.301-.301-.301h-.904c-.166 0-.301.135-.301.301v8.356c0 .166.135.301.301.301h.904c.166 0-.301-.135-.301-.301v-8.356z" />
                </svg>
                Continuar con Apple
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
