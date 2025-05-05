import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Contact Hero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Have questions or need more information? We're here to help. Reach out to us using any of the methods
              below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <p className="text-zinc-400 mb-2">123 Fitness Street</p>
              <p className="text-zinc-400 mb-2">Gym City, GC 12345</p>
              <p className="text-zinc-400">United States</p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Phone Number</h3>
              <p className="text-zinc-400 mb-2">Main: +1 (555) 123-4567</p>
              <p className="text-zinc-400 mb-2">Support: +1 (555) 987-6543</p>
              <p className="text-zinc-400">Fax: +1 (555) 456-7890</p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email Address</h3>
              <p className="text-zinc-400 mb-2">info@fitnesselite.com</p>
              <p className="text-zinc-400 mb-2">support@fitnesselite.com</p>
              <p className="text-zinc-400">careers@fitnesselite.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Hours</h2>
              <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 mb-8">
                <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-zinc-400">Monday - Friday</span>
                    <span>5:00 AM - 11:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-zinc-400">Saturday</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-zinc-400">Sunday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6">FAQs</h2>
              <div className="space-y-6">
                {[
                  {
                    question: "How do I sign up for a membership?",
                    answer:
                      "You can sign up for a membership online through our website, or visit us in person at our facility. Our staff will be happy to assist you with the registration process.",
                  },
                  {
                    question: "Do you offer a free trial?",
                    answer:
                      "Yes, we offer a 7-day free trial for new members. This gives you the opportunity to experience our facilities and classes before committing to a membership.",
                  },
                  {
                    question: "Can I cancel my membership at any time?",
                    answer:
                      "Yes, you can cancel your membership at any time. However, please note that some membership plans may have a minimum commitment period or cancellation fees.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-zinc-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Find Us</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=800&width=1920" alt="Map" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 p-4 rounded-full">
                <MapPin size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Join FitnessElite today and take the first step towards a healthier, stronger you. Our expert trainers and
            supportive community are here to help you succeed.
          </p>
          <Link href="/join" className="btn-primary bg-white text-red-600 hover:bg-zinc-100">
            Join Now
          </Link>
        </div>
      </section>
    </div>
  )
}
