import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920"
            alt="Blog de Fitness"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog ElioFitness</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Mantente actualizado con los últimos consejos de fitness, nutrición y casos de éxito.
            </p>
          </div>
        </div>
      </section>

      {/* Artículo Destacado */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Artículo Destacado</h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
          </div>

          <div className="card group overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200"
                  alt="Artículo Destacado"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-zinc-400 mb-4">
                  <div className="flex items-center mr-6">
                    <Calendar size={16} className="mr-2" />
                    <span>5 de Mayo, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>Por Miguel Rodríguez</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">La Ciencia del Crecimiento Muscular: Entendiendo la Hipertrofia</h3>
                <p className="text-zinc-400 mb-6">
                  La hipertrofia muscular, o el crecimiento de las células musculares, es un proceso complejo que involucra
                  múltiples factores incluyendo tensión mecánica, estrés metabólico y daño muscular. En esta guía completa,
                  desglosamos la ciencia detrás del crecimiento muscular y proporcionamos estrategias basadas en evidencia
                  para optimizar tu entrenamiento y obtener máximos resultados.
                </p>
                <p className="text-zinc-400 mb-6">
                  Ya seas principiante buscando ganar tu primer kilo de músculo o un levantador experimentado tratando de
                  superar un estancamiento, entender estos principios te ayudará a diseñar entrenamientos más efectivos y
                  alcanzar tus objetivos de construcción muscular más rápido.
                </p>
                <Link href="/blog/ciencia-del-crecimiento-muscular" className="btn-primary inline-flex items-center">
                  Leer Artículo Completo <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Últimos Artículos */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Últimos Artículos</h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "10 Ejercicios Esenciales para Ganar Músculo",
                image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=800",
                date: "Mayo 15, 2024",
                author: "Carlos Ruiz",
                excerpt:
                  "Descubre los ejercicios fundamentales que no pueden faltar en tu rutina de hipertrofia muscular.",
                category: "Entrenamiento",
              },
              {
                title: "Guía Completa de Nutrición Pre y Post Entrenamiento",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
                date: "Mayo 12, 2024",
                author: "Ana Martínez",
                excerpt:
                  "Aprende qué comer antes y después de entrenar para maximizar tus resultados.",
                category: "Nutrición",
              },
              {
                title: "Los Beneficios del Entrenamiento HIIT",
                image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800",
                date: "Mayo 10, 2024",
                author: "Sara Rodríguez",
                excerpt:
                  "Descubre por qué el HIIT es uno de los métodos más efectivos para quemar grasa.",
                category: "Cardio",
              },
              {
                title: "Yoga para Principiantes: Guía Completa",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
                date: "Mayo 8, 2024",
                author: "Elena García",
                excerpt:
                  "Todo lo que necesitas saber para comenzar tu práctica de yoga.",
                category: "Yoga",
              },
              {
                title: "Mitos y Verdades sobre la Pérdida de Peso",
                image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800",
                date: "Mayo 5, 2024",
                author: "Laura Méndez",
                excerpt:
                  "Desmontamos los mitos más comunes sobre la pérdida de peso.",
                category: "Pérdida de Peso",
              },
              {
                title: "Ejercicios Funcionales para la Vida Diaria",
                image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800",
                date: "Mayo 3, 2024",
                author: "Juan Martínez",
                excerpt:
                  "Mejora tu calidad de vida con estos ejercicios funcionales.",
                category: "Funcional",
              },
            ].map((post, index) => (
              <div key={index} className="card group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-zinc-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <User size={16} className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-zinc-400 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center text-red-600 font-bold hover:text-red-500 transition-colors"
                  >
                    Leer Más <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-red-600 text-white font-bold"
              >
                1
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md border border-zinc-800 text-white hover:bg-zinc-800 transition-colors"
              >
                2
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md border border-zinc-800 text-white hover:bg-zinc-800 transition-colors"
              >
                3
              </Link>
              <span className="w-10 h-10 flex items-center justify-center text-zinc-500">...</span>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md border border-zinc-800 text-white hover:bg-zinc-800 transition-colors"
              >
                10
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Categorías</h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Entrenamiento de Fuerza",
                image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600",
                count: 24,
              },
              {
                title: "Nutrición",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
                count: 18,
              },
              {
                title: "Pérdida de Peso",
                image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600",
                count: 15,
              },
              {
                title: "Cardio",
                image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600",
                count: 12,
              },
              {
                title: "Recuperación",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600",
                count: 9,
              },
              {
                title: "Suplementación",
                image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600",
                count: 8,
              },
              {
                title: "Casos de Éxito",
                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600",
                count: 7,
              },
              {
                title: "Planes de Entrenamiento",
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
                count: 14,
              },
            ].map((category, index) => (
              <Link
                key={index}
                href={`/blog/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group"
              >
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <span className="text-zinc-300">{category.count} Articles</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Boletín Informativo */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-zinc-900 rounded-lg p-8 md:p-12 border border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Suscríbete a Nuestro Boletín</h2>
                <p className="text-zinc-400 mb-6">
                  Mantente actualizado con los últimos consejos de fitness, nutrición y contenido exclusivo
                  directamente en tu bandeja de entrada.
                </p>
                <form className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Ingresa tu email"
                      className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <button type="submit" className="btn-primary whitespace-nowrap">
                      Suscribirse
                    </button>
                  </div>
                  <p className="text-zinc-500 text-sm">
                    Al suscribirte, aceptas nuestra Política de Privacidad y das consentimiento para recibir actualizaciones.
                  </p>
                </form>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800" 
                  alt="Boletín" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
