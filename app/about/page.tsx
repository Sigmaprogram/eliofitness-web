import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="About Us Hero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About FitnessElite</h1>
            <p className="text-xl text-zinc-300 mb-8">
              We're more than just a gym. We're a community dedicated to helping you transform your life through
              fitness.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Our Story" fill className="object-cover" />
            </div>

            <div>
              <h5 className="text-red-600 font-bold mb-4 uppercase tracking-wider">Our Story</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From Passion to Excellence</h2>
              <p className="text-zinc-400 mb-6">
                Founded in 2010, FitnessElite began with a simple mission: to create a fitness environment where
                everyone feels welcome and empowered to achieve their goals.
              </p>
              <p className="text-zinc-400 mb-6">
                What started as a small studio with just a handful of members has grown into a premier fitness
                destination with state-of-the-art facilities and a team of expert trainers dedicated to your success.
              </p>
              <p className="text-zinc-400 mb-6">
                Throughout our journey, our commitment to personalized fitness experiences and building a supportive
                community has remained unwavering. We believe that fitness is not just about physical
                transformation—it's about building confidence, resilience, and a healthier lifestyle.
              </p>
              <p className="text-zinc-400">
                Today, we're proud to have helped thousands of members transform their lives through our comprehensive
                fitness programs and supportive community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-red-600 font-bold mb-4 uppercase tracking-wider">Our Mission</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering You to Reach Your Full Potential</h2>
            <p className="text-zinc-400">
              At FitnessElite, our mission is to provide a supportive and inclusive environment where individuals of all
              fitness levels can achieve their personal health and wellness goals through expert guidance, innovative
              programs, and a strong community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Approach",
                description:
                  "We believe that every fitness journey is unique. That's why we take the time to understand your goals, preferences, and limitations to create a personalized fitness experience.",
              },
              {
                title: "Expert Guidance",
                description:
                  "Our team of certified trainers brings years of experience and expertise to help you navigate your fitness journey safely and effectively.",
              },
              {
                title: "Supportive Community",
                description:
                  "We foster a welcoming and motivating community where members support and inspire each other to push beyond their limits and achieve their goals.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h5 className="text-red-600 font-bold mb-4 uppercase tracking-wider">Our Values</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Principles That Guide Us</h2>
              <p className="text-zinc-400 mb-8">
                Our core values shape everything we do at FitnessElite, from how we design our programs to how we
                interact with our members.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Excellence",
                    description:
                      "We strive for excellence in everything we do, from our facilities and equipment to our training programs and customer service.",
                  },
                  {
                    title: "Integrity",
                    description:
                      "We operate with honesty, transparency, and ethical standards in all our interactions.",
                  },
                  {
                    title: "Inclusivity",
                    description:
                      "We create a welcoming environment where everyone feels valued, respected, and supported regardless of their fitness level or background.",
                  },
                  {
                    title: "Innovation",
                    description:
                      "We continuously seek new and better ways to help our members achieve their fitness goals through innovative programs and approaches.",
                  },
                ].map((value, index) => (
                  <div key={index} className="flex">
                    <Check size={24} className="text-red-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-zinc-400">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Our Values" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-red-600 font-bold mb-4 uppercase tracking-wider">Our Team</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Leadership Team</h2>
            <p className="text-zinc-400">
              Our leadership team brings together decades of experience in fitness, business, and customer service to
              create the ultimate fitness experience for our members.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Michael Roberts",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=500&width=500",
                bio: "Former professional athlete with a passion for helping others achieve their fitness goals.",
              },
              {
                name: "Jessica Chen",
                role: "Head of Training",
                image: "/placeholder.svg?height=500&width=500",
                bio: "Certified master trainer with over 15 years of experience in fitness program development.",
              },
              {
                name: "David Wilson",
                role: "Nutrition Director",
                image: "/placeholder.svg?height=500&width=500",
                bio: "Registered dietitian specializing in sports nutrition and weight management.",
              },
              {
                name: "Amanda Taylor",
                role: "Community Manager",
                image: "/placeholder.svg?height=500&width=500",
                bio: "Dedicated to creating a supportive and motivating environment for all members.",
              },
            ].map((member, index) => (
              <div key={index} className="card group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-red-600 mb-3">{member.role}</p>
                  <p className="text-zinc-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Take the first step towards a healthier, stronger you. Join FitnessElite today and experience the difference
            our personalized approach and supportive community can make.
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
