import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function TrainersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Trainers Hero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expert Trainers</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Meet our team of certified fitness professionals dedicated to helping you achieve your fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Strength Coach",
                image: "/placeholder.svg?height=600&width=600",
                bio: "John is a certified strength and conditioning specialist with over 10 years of experience helping clients build muscle and increase strength.",
                specialties: ["Powerlifting", "Bodybuilding", "Sports Performance"],
                certifications: ["CSCS", "NASM-CPT", "USAW Level 1"],
              },
              {
                name: "Sarah Johnson",
                role: "Cardio Specialist",
                image: "/placeholder.svg?height=600&width=600",
                bio: "Sarah specializes in cardiovascular training and endurance building. She's helped hundreds of clients improve their cardio fitness and stamina.",
                specialties: ["HIIT", "Endurance Training", "Group Fitness"],
                certifications: ["ACE-CPT", "AFAA Group Fitness", "Spinning Instructor"],
              },
              {
                name: "Mike Williams",
                role: "Nutrition Expert",
                image: "/placeholder.svg?height=600&width=600",
                bio: "As our nutrition expert, Mike helps clients optimize their diet to support their fitness goals, whether it's weight loss, muscle gain, or performance.",
                specialties: ["Weight Management", "Sports Nutrition", "Meal Planning"],
                certifications: ["Precision Nutrition Level 2", "NASM-CNC", "ISSA-NS"],
              },
              {
                name: "Emily Davis",
                role: "Yoga Instructor",
                image: "/placeholder.svg?height=600&width=600",
                bio: "Emily brings a holistic approach to fitness through her expertise in yoga and mindfulness practices, helping clients improve flexibility and reduce stress.",
                specialties: ["Vinyasa Yoga", "Restorative Yoga", "Meditation"],
                certifications: ["RYT-500", "Yin Yoga Certified", "Mindfulness Coach"],
              },
              {
                name: "David Rodriguez",
                role: "Functional Training Specialist",
                image: "/placeholder.svg?height=600&width=600",
                bio: "David focuses on improving everyday movement patterns and building practical strength that translates to better quality of life.",
                specialties: ["Movement Assessment", "Corrective Exercise", "Core Training"],
                certifications: ["NASM-CES", "FMS Level 2", "TRX Suspension Training"],
              },
              {
                name: "Jennifer Lee",
                role: "Group Fitness Instructor",
                image: "/placeholder.svg?height=600&width=600",
                bio: "Jennifer brings energy and motivation to every class, specializing in high-energy group workouts that make fitness fun and engaging.",
                specialties: ["HIIT Classes", "Dance Fitness", "Boot Camp"],
                certifications: ["ACE Group Fitness", "Zumba Instructor", "Les Mills Certified"],
              },
              {
                name: "Robert Taylor",
                role: "Senior Fitness Specialist",
                image: "/placeholder.svg?height=600&width=600",
                bio: "Robert specializes in working with older adults, focusing on maintaining mobility, strength, and independence through appropriate exercise.",
                specialties: ["Balance Training", "Joint-Friendly Exercise", "Functional Movement"],
                certifications: ["ACE Senior Fitness Specialist", "Arthritis Foundation Certified", "Silver Sneakers"],
              },
              {
                name: "Lisa Chen",
                role: "Rehabilitation Specialist",
                image: "/placeholder.svg?height=600&width=600",
                bio: "With a background in physical therapy, Lisa helps clients recover from injuries and return to their regular fitness routines safely.",
                specialties: ["Injury Recovery", "Post-Rehab Exercise", "Pain Management"],
                certifications: ["NASM-CES", "ACE Medical Exercise Specialist", "Pain-Free Movement Specialist"],
              },
              {
                name: "Marcus Johnson",
                role: "Athletic Performance Coach",
                image: "/placeholder.svg?height=600&width=600",
                bio: "Marcus works with athletes of all levels to improve performance, speed, agility, and sport-specific conditioning.",
                specialties: ["Speed & Agility", "Plyometrics", "Sport-Specific Training"],
                certifications: ["CSCS", "USAW Level 2", "NASM-PES"],
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
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold">{trainer.name}</h3>
                    <p className="text-red-600">{trainer.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-zinc-300 mb-4">{trainer.bio}</p>

                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty, i) => (
                        <span key={i} className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, i) => (
                        <span key={i} className="bg-red-900/30 text-red-400 px-3 py-1 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Link href="#" className="text-zinc-400 hover:text-red-600 transition-colors">
                      <Facebook size={18} />
                    </Link>
                    <Link href="#" className="text-zinc-400 hover:text-red-600 transition-colors">
                      <Instagram size={18} />
                    </Link>
                    <Link href="#" className="text-zinc-400 hover:text-red-600 transition-colors">
                      <Twitter size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Qualifications */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h5 className="text-red-600 font-bold mb-4 uppercase tracking-wider">Our Standards</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trainer Qualifications</h2>
              <p className="text-zinc-400 mb-8">
                At FitnessElite, we maintain the highest standards for our training team. All of our trainers are:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Certified Professionals",
                    description:
                      "All trainers hold multiple nationally recognized certifications in their areas of expertise.",
                  },
                  {
                    title: "Experienced",
                    description:
                      "Our trainers have a minimum of 3 years of professional experience before joining our team.",
                  },
                  {
                    title: "Continuously Educated",
                    description:
                      "We require ongoing education and recertification to stay current with the latest fitness research and techniques.",
                  },
                  {
                    title: "CPR/AED Certified",
                    description: "Safety is our priority. All trainers maintain current CPR and AED certifications.",
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
                src="/placeholder.svg?height=1000&width=800"
                alt="Trainer Qualifications"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Become a Trainer */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-zinc-400 mb-8">
              Are you a passionate fitness professional looking to make a difference? We're always looking for talented
              trainers to join our team.
            </p>
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-4">What We Look For:</h3>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                  <span className="text-zinc-300">Nationally recognized certifications in your area of expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                  <span className="text-zinc-300">Minimum of 3 years of professional training experience</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                  <span className="text-zinc-300">Passion for helping clients achieve their fitness goals</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                  <span className="text-zinc-300">Excellent communication and interpersonal skills</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-2"></span>
                  <span className="text-zinc-300">Commitment to continuing education and professional development</span>
                </li>
              </ul>
              <Link href="/trainers/apply" className="btn-primary">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Our Expert Trainers?</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Take the first step towards achieving your fitness goals with guidance from our professional training team.
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
