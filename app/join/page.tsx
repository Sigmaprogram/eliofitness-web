import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function JoinPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Join Hero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join FitnessElite</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Take the first step towards a healthier, stronger you. Choose the membership plan that fits your goals and
              start your fitness journey today.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Membership Plan</h2>
            <p className="text-zinc-400">
              We offer a variety of membership options to fit your fitness goals, schedule, and budget. All plans
              include access to our state-of-the-art facilities and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Plan",
                price: "$29",
                period: "monthly",
                features: [
                  "Access to gym facilities",
                  "Basic fitness assessment",
                  "2 group classes per week",
                  "Locker room access",
                  "Online workout resources",
                ],
                popular: false,
              },
              {
                title: "Premium Plan",
                price: "$59",
                period: "monthly",
                features: [
                  "Full access to gym facilities",
                  "Comprehensive fitness assessment",
                  "Unlimited group classes",
                  "1 personal training session/month",
                  "Nutrition consultation",
                  "Access to premium app features",
                  "Locker room access with towel service",
                ],
                popular: true,
              },
              {
                title: "Elite Plan",
                price: "$99",
                period: "monthly",
                features: [
                  "24/7 access to all facilities",
                  "Advanced fitness assessment",
                  "Unlimited group classes",
                  "4 personal training sessions/month",
                  "Customized nutrition plan",
                  "Recovery services access",
                  "Premium app features",
                  "VIP locker with amenities",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <div key={index} className={`card relative ${plan.popular ? "border-red-600" : "border-zinc-800"}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-bold">
                    POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-zinc-400 ml-1">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#registration-form"
                    className={
                      plan.popular ? "btn-primary w-full text-center block" : "btn-secondary w-full text-center block"
                    }
                  >
                    Choose Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Now</h2>
              <p className="text-zinc-400 mb-8">
                Fill out the form below to start your membership. Our team will contact you to complete the registration
                process and schedule your first visit.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="membership" className="block text-sm font-medium mb-2">
                    Membership Plan
                  </label>
                  <select
                    id="membership"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Select a plan</option>
                    <option value="basic">Basic Plan - $29/month</option>
                    <option value="premium">Premium Plan - $59/month</option>
                    <option value="elite">Elite Plan - $99/month</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5 bg-zinc-800 border border-zinc-700 rounded focus:ring-2 focus:ring-red-600 text-red-600"
                    />
                    <span className="ml-2 text-zinc-300 text-sm">
                      I agree to the{" "}
                      <Link href="/terms" className="text-red-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-red-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn-primary">
                  Submit Registration
                </button>
              </form>
            </div>

            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=1200&width=800" alt="Registration" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Membership Benefits</h2>
            <p className="text-zinc-400">
              When you join FitnessElite, you're not just getting access to a gym—you're joining a community dedicated
              to helping you achieve your fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "State-of-the-Art Facilities",
                description: "Access to premium equipment, spacious workout areas, and clean, modern amenities.",
              },
              {
                title: "Expert Guidance",
                description:
                  "Work with certified trainers who are dedicated to helping you achieve your fitness goals.",
              },
              {
                title: "Diverse Class Offerings",
                description:
                  "Choose from a wide variety of group fitness classes to keep your workouts fresh and engaging.",
              },
              {
                title: "Supportive Community",
                description:
                  "Join a community of like-minded individuals who will motivate and inspire you on your fitness journey.",
              },
              {
                title: "Flexible Hours",
                description:
                  "With extended hours and 24/7 access for Elite members, you can work out on your schedule.",
              },
              {
                title: "Digital Resources",
                description: "Access workout plans, nutrition guides, and progress tracking through our mobile app.",
              },
              {
                title: "Recovery Services",
                description: "Take advantage of our recovery amenities to help your body repair and grow stronger.",
              },
              {
                title: "Special Events",
                description: "Participate in member-exclusive events, challenges, and workshops throughout the year.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Members Say</h2>
            <p className="text-zinc-400">
              Don't just take our word for it. Hear from our members who have transformed their lives with FitnessElite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Robert K.",
                image: "/placeholder.svg?height=200&width=200",
                quote:
                  "I've been a member for 6 months and have already lost 30 pounds. The trainers are amazing and the community is so supportive!",
                plan: "Premium Member",
              },
              {
                name: "Jennifer L.",
                image: "/placeholder.svg?height=200&width=200",
                quote:
                  "The personalized training program has helped me achieve fitness goals I never thought possible. Highly recommend!",
                plan: "Elite Member",
              },
              {
                name: "David M.",
                image: "/placeholder.svg?height=200&width=200",
                quote:
                  "The facilities are top-notch and the trainers really know their stuff. I've seen incredible results in just 3 months.",
                plan: "Basic Member",
              },
            ].map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-red-600">{testimonial.plan}</p>
                  </div>
                </div>
                <p className="text-zinc-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-zinc-400">
              Have questions about joining FitnessElite? Find answers to our most commonly asked questions below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Is there a joining fee?",
                answer:
                  "Yes, there is a one-time joining fee of $49 for all membership plans. However, we frequently run promotions that waive this fee, so be sure to ask about current offers.",
              },
              {
                question: "Can I cancel my membership at any time?",
                answer:
                  "Yes, you can cancel your membership at any time. However, please note that some membership plans may have a minimum commitment period or cancellation fees.",
              },
              {
                question: "Do you offer family memberships?",
                answer:
                  "Yes, we offer family membership packages that provide discounted rates for household members. Please contact our membership team for details.",
              },
              {
                question: "Is there a minimum age requirement?",
                answer:
                  "Members must be at least 16 years old. Members aged 16-17 must have a parent or guardian sign their membership agreement.",
              },
              {
                question: "Can I freeze my membership?",
                answer:
                  "Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel. A small monthly maintenance fee may apply.",
              },
              {
                question: "Do you offer corporate memberships?",
                answer:
                  "Yes, we offer special corporate rates for businesses. Contact our corporate wellness team for more information on setting up a corporate account.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-400 mb-4">Still have questions? We're here to help.</p>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Join FitnessElite today and take the first step towards a healthier, stronger you. Our expert trainers and
            supportive community are here to help you succeed.
          </p>
          <a href="#registration-form" className="btn-primary bg-white text-red-600 hover:bg-zinc-100">
            Join Now
          </a>
        </div>
      </section>
    </div>
  )
}
