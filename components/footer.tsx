import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-16 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              ElioFitness
            </h3>
            <p className="text-zinc-400 mb-4">
              Transforma tu cuerpo y mente con nuestros entrenadores expertos y programas de fitness premium.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-red-600 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-600 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-600 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-600 transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-zinc-400 hover:text-red-600 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/programas" className="text-zinc-400 hover:text-red-600 transition-colors">
                  Nuestros Programas
                </Link>
              </li>
              <li>
                <Link href="/entrenadores" className="text-zinc-400 hover:text-red-600 transition-colors">
                  Entrenadores
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-400 hover:text-red-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-zinc-400 hover:text-red-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Programas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programas/entrenamiento-de-fuerza" className="text-zinc-400 hover:text-red-600 transition-colors">
                  Entrenamiento de Fuerza
                </Link>
              </li>
              <li>
                <Link href="/programas/fitness-cardiovascular" className="text-zinc-400 hover:text-red-600 transition-colors">
                  Fitness Cardiovascular
                </Link>
              </li>
              <li>
                <Link href="/programas/entrenamientos-hiit" className="text-zinc-400 hover:text-red-600 transition-colors">
                  Entrenamientos HIIT
                </Link>
              </li>
              <li>
                <Link href="/programas/nutricion" className="text-zinc-400 hover:text-red-600 transition-colors">
                  Planes de Nutrición
                </Link>
              </li>
              <li>
                <Link href="/programas/entrenamiento-personal" className="text-zinc-400 hover:text-red-600 transition-colors">
                  Entrenamiento Personal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-red-600 flex-shrink-0 mt-1" size={18} />
                <span className="text-zinc-400">Calle ANACAONA 153, Ciudad Santo Domingo Este, CG 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-red-600 flex-shrink-0" size={18} />
                <span className="text-zinc-400">+1-809-555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-red-600 flex-shrink-0" size={18} />
                <span className="text-zinc-400">elio.fitness@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ElioFitness. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="/terminos" className="text-zinc-500 hover:text-red-600 text-sm transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/privacidad" className="text-zinc-500 hover:text-red-600 text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/politica-cookies" className="text-zinc-500 hover:text-red-600 text-sm transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
