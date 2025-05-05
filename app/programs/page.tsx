import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Programs Hero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Fitness Programs</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Discover our comprehensive range of fitness programs designed to help you achieve your specific goals.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tailored Programs for Every Goal</h2>
            <p className="text-zinc-400">
              Whether you're looking to build muscle, lose weight, improve your cardiovascular health, or enhance your
              overall fitness, we have a program designed specifically for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strength Training",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Build muscle, increase strength, and improve your overall physique with our comprehensive strength training program.",
                features: [
                  "Progressive resistance training",
                  "Compound and isolation exercises",
                  "Periodized training plans",
                  "Form and technique coaching",
                ],
              },
              {
                title: "Cardio Fitness",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Improve your cardiovascular health, burn calories, and increase your endurance with our cardio fitness program.",
                features: [
                  "Interval training",
                  "Endurance building workouts",
                  "Heart rate zone training",
                  "Varied cardio modalities",
                ],
              },
              {
                title: "HIIT Workouts",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Maximize calorie burn and boost your metabolism with our high-intensity interval training workouts.",
                features: [
                  "Time-efficient workouts",
                  "Full-body exercises",
                  "Metabolic conditioning",
                  "Scalable intensity levels",
                ],
              },
              {
                title: "Weight Loss",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Achieve sustainable weight loss through a combination of effective workouts and nutritional guidance.",
                features: [
                  "Calorie-burning exercises",
                  "Nutritional counseling",
                  "Progress tracking",
                  "Sustainable lifestyle changes",
                ],
              },
              {
                title: "Functional Fitness",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Enhance your everyday movement patterns and improve your quality of life with functional fitness training.",
                features: [
                  "Movement pattern training",
                  "Core stability exercises",
                  "Balance and coordination drills",
                  "Injury prevention focus",
                ],
              },
              {
                title: "Personal Training",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Get personalized attention and customized workouts with our one-on-one personal training sessions.",
                features: [
                  "Individualized workout plans",
                  "Direct coaching and feedback",
                  "Goal-specific programming",
                  "Accountability and motivation",
                ],
              },
            ].map((program, index) => (
              <div key={index} className="card group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="text-zinc-400 mb-4">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-zinc-300">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/programs/${program.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center text-red-600 font-bold hover:text-red-500 transition-colors"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialized Programs</h2>
            <p className="text-zinc-400">
              Our specialized programs cater to specific demographics and fitness needs, ensuring everyone can find
              their perfect fitness fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Senior Fitness",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Designed specifically for older adults, our senior fitness program focuses on improving mobility, strength, and balance to enhance quality of life and independence.",
                features: [
                  "Low-impact exercises",
                  "Balance and stability training",
                  "Joint-friendly workouts",
                  "Social group activities",
                ],
              },
              {
                title: "Youth Athletics",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Help your child develop fundamental movement skills, build confidence, and foster a lifelong love of physical activity with our youth athletics program.",
                features: [
                  "Age-appropriate exercises",
                  "Fundamental movement skills",
                  "Team-building activities",
                  "Fun and engaging workouts",
                ],
              },
              {
                title: "Pre/Post-Natal",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Safe and effective workouts designed specifically for expectant and new mothers to maintain fitness during pregnancy and recover postpartum.",
                features: [
                  "Pregnancy-safe exercises",
                  "Pelvic floor strengthening",
                  "Postpartum recovery focus",
                  "Supportive community",
                ],
              },
              {
                title: "Rehabilitation",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Work with our specialized trainers to recover from injury, improve mobility, and safely return to your regular fitness routine.",
                features: [
                  "Injury-specific protocols",
                  "Gradual progression",
                  "Pain management strategies",
                  "Functional movement restoration",
                ],
              },
            ].map((program, index) => (
              <div key={index} className="card group">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                    <p className="text-zinc-400 mb-4">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-zinc-300">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/programs/${program.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center text-red-600 font-bold hover:text-red-500 transition-colors"
                    >
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Process */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Program Process</h2>
            <p className="text-zinc-400">
              We follow a systematic approach to ensure you get the most out of your fitness program and achieve your
              goals effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description:
                  "We start with a comprehensive assessment of your current fitness level, goals, and any limitations to create a baseline for your program.",
              },
              {
                step: "02",
                title: "Program Design",
                description:
                  "Based on your assessment, our experts design a personalized program tailored to your specific goals and needs.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "You'll work with our trainers to implement your program, learning proper techniques and building consistency.",
              },
              {
                step: "04",
                title: "Progress Tracking",
                description:
                  "We regularly monitor your progress, making adjustments to your program as needed to ensure continued results.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 relative">
                <div className="absolute -top-5 -left-5 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-6">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Program?</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Schedule a free consultation with one of our fitness experts to discuss your goals and find the program
            that's right for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/join" className="btn-primary bg-white text-red-600 hover:bg-zinc-100">
              Join Now
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-red-600">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
