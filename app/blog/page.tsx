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
            src="/placeholder.svg?height=800&width=1920"
            alt="Blog Hero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fitness Blog</h1>
            <p className="text-xl text-zinc-300 mb-8">
              Stay updated with the latest fitness tips, nutrition advice, and success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Article</h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
          </div>

          <div className="card group overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Featured Article"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-zinc-400 mb-4">
                  <div className="flex items-center mr-6">
                    <Calendar size={16} className="mr-2" />
                    <span>May 5, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>By Michael Roberts</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">The Science of Muscle Growth: Understanding Hypertrophy</h3>
                <p className="text-zinc-400 mb-6">
                  Muscle hypertrophy, or the growth of muscle cells, is a complex process that involves multiple factors
                  including mechanical tension, metabolic stress, and muscle damage. In this comprehensive guide, we
                  break down the science behind muscle growth and provide evidence-based strategies to optimize your
                  training for maximum results.
                </p>
                <p className="text-zinc-400 mb-6">
                  Whether you're a beginner looking to build your first pound of muscle or an experienced lifter trying
                  to break through a plateau, understanding these principles will help you design more effective
                  workouts and achieve your muscle-building goals faster.
                </p>
                <Link href="/blog/science-of-muscle-growth" className="btn-primary inline-flex items-center">
                  Read Full Article <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "10 Tips for Building Muscle Fast",
                image: "/placeholder.svg?height=400&width=600",
                date: "May 1, 2025",
                author: "John Smith",
                excerpt:
                  "Learn the secrets to building muscle efficiently with these expert-approved tips that focus on training, nutrition, and recovery.",
              },
              {
                title: "The Ultimate Guide to Fat Loss",
                image: "/placeholder.svg?height=400&width=600",
                date: "April 25, 2025",
                author: "Sarah Johnson",
                excerpt:
                  "Discover the most effective strategies for sustainable fat loss and body transformation that go beyond crash diets and extreme workouts.",
              },
              {
                title: "Nutrition Myths Debunked",
                image: "/placeholder.svg?height=400&width=600",
                date: "April 18, 2025",
                author: "Mike Williams",
                excerpt:
                  "Our nutrition experts separate fact from fiction about popular diet trends and beliefs that might be holding back your fitness progress.",
              },
              {
                title: "How to Design Your Perfect Workout Plan",
                image: "/placeholder.svg?height=400&width=600",
                date: "April 12, 2025",
                author: "Emily Davis",
                excerpt:
                  "Learn the principles of effective workout programming to create a personalized plan that aligns with your specific goals and preferences.",
              },
              {
                title: "The Importance of Recovery in Fitness",
                image: "/placeholder.svg?height=400&width=600",
                date: "April 5, 2025",
                author: "David Rodriguez",
                excerpt:
                  "Discover why recovery is just as important as your workouts and how to optimize your rest days for better performance and results.",
              },
              {
                title: "Strength Training for Beginners",
                image: "/placeholder.svg?height=400&width=600",
                date: "March 28, 2025",
                author: "Jennifer Lee",
                excerpt:
                  "A comprehensive guide to starting your strength training journey, including proper form, progression strategies, and common mistakes to avoid.",
              },
            ].map((article, index) => (
              <div key={index} className="card group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-zinc-500 text-sm mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-zinc-400 mb-4">{article.excerpt}</p>
                  <Link
                    href={`/blog/post/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center text-red-600 font-bold hover:text-red-500 transition-colors"
                  >
                    Read More <ArrowRight size={16} className="ml-2" />
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

      {/* Categories */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Categories</h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Strength Training",
                image: "/placeholder.svg?height=400&width=600",
                count: 24,
              },
              {
                title: "Nutrition",
                image: "/placeholder.svg?height=400&width=600",
                count: 18,
              },
              {
                title: "Weight Loss",
                image: "/placeholder.svg?height=400&width=600",
                count: 15,
              },
              {
                title: "Cardio",
                image: "/placeholder.svg?height=400&width=600",
                count: 12,
              },
              {
                title: "Recovery",
                image: "/placeholder.svg?height=400&width=600",
                count: 9,
              },
              {
                title: "Supplements",
                image: "/placeholder.svg?height=400&width=600",
                count: 8,
              },
              {
                title: "Success Stories",
                image: "/placeholder.svg?height=400&width=600",
                count: 7,
              },
              {
                title: "Workout Plans",
                image: "/placeholder.svg?height=400&width=600",
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

      {/* Newsletter */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-zinc-900 rounded-lg p-8 md:p-12 border border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-zinc-400 mb-6">
                  Stay updated with the latest fitness tips, nutrition advice, and exclusive content delivered directly
                  to your inbox.
                </p>
                <form className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <button type="submit" className="btn-primary whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-zinc-500 text-sm">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
                  </p>
                </form>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=800" alt="Newsletter" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
