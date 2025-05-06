import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight, Award, Clock, Users } from "lucide-react"

export default function TrainersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920"
            alt="Nuestros Entrenadores"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Entrenadores</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Conoce a nuestro equipo de entrenadores profesionales certificados, dedicados a ayudarte a alcanzar tus metas fitness.
            </p>
          </div>
        </div>
      </section>

      {/* Entrenadores Destacados */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Juan Martínez",
                specialty: "Entrenamiento de Fuerza",
                image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500",
                experience: "8 años de experiencia",
                rating: 5,
                certifications: ["NSCA-CSCS", "ACE-CPT"],
                schedule: "Lunes a Viernes",
                description:
                  "Especialista en entrenamiento de fuerza y desarrollo muscular. Enfocado en ayudarte a alcanzar tus objetivos de forma segura y efectiva.",
              },
              {
                name: "María García",
                specialty: "Fitness Funcional",
                image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=500",
                experience: "6 años de experiencia",
                rating: 5,
                certifications: ["NASM-CPT", "TRX Trainer"],
                schedule: "Lunes a Sábado",
                description:
                  "Experta en entrenamiento funcional y rehabilitación. Apasionada por ayudar a sus clientes a mejorar su calidad de vida.",
              },
              {
                name: "Carlos Ruiz",
                specialty: "HIIT y CrossFit",
                image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500",
                experience: "10 años de experiencia",
                rating: 5,
                certifications: ["CrossFit L3", "ACSM-CPT"],
                schedule: "Martes a Domingo",
                description:
                  "Especializado en entrenamientos de alta intensidad y CrossFit. Comprometido con llevar a sus clientes al siguiente nivel.",
              },
              {
                name: "Ana Torres",
                specialty: "Yoga y Pilates",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",
                experience: "7 años de experiencia",
                rating: 5,
                certifications: ["RYT-500", "Pilates Certified"],
                schedule: "Lunes a Viernes",
                description:
                  "Instructora certificada de yoga y pilates. Enfocada en el bienestar integral y la conexión mente-cuerpo.",
              },
              {
                name: "Diego Sánchez",
                specialty: "Nutrición Deportiva",
                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500",
                experience: "5 años de experiencia",
                rating: 5,
                certifications: ["ISSN-CISSN", "PN-L2"],
                schedule: "Lunes a Sábado",
                description:
                  "Especialista en nutrición deportiva y planificación de dietas. Ayuda a optimizar el rendimiento a través de la alimentación.",
              },
              {
                name: "Laura Méndez",
                specialty: "Pérdida de Peso",
                image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=500",
                experience: "9 años de experiencia",
                rating: 5,
                certifications: ["ACE-CPT", "NASM-WLS"],
                schedule: "Martes a Domingo",
                description:
                  "Especializada en transformación corporal y pérdida de peso. Comprometida con el éxito a largo plazo de sus clientes.",
              },
            ].map((trainer, index) => (
              <div key={index} className="card group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-red-600 mb-2">{trainer.specialty}</p>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: trainer.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-zinc-400 mb-4">{trainer.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-zinc-400">
                      <Award size={16} className="mr-2" />
                      <span>{trainer.experience}</span>
                    </div>
                    <div className="flex items-center text-zinc-400">
                      <Clock size={16} className="mr-2" />
                      <span>{trainer.schedule}</span>
                    </div>
                  </div>
                  <Link
                    href={`/trainers/${trainer.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center text-red-600 font-bold hover:text-red-500 transition-colors"
                  >
                    Ver Perfil <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Únete como Entrenador */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Eres un Entrenador Profesional?</h2>
            <p className="text-zinc-400 mb-8">
              Únete a nuestro equipo de entrenadores expertos y ayuda a más personas a alcanzar sus objetivos fitness.
              Ofrecemos excelentes condiciones y un ambiente de trabajo estimulante.
            </p>
              <Link href="/trainers/apply" className="btn-primary">
              Postúlate como Entrenador
              </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comienza Tu Transformación</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Reserva una sesión con uno de nuestros entrenadores expertos y da el primer paso hacia tus objetivos fitness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/join" className="btn-primary bg-white text-red-600 hover:bg-zinc-100">
              Reserva una Sesión
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-red-600">
              Consulta Gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
