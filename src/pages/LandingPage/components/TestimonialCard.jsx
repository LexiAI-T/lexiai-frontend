"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "This platform has been a game-changer for our business. The seamless integration and exceptional customer support have exceeded our expectations. The team's dedication to excellence is truly remarkable.",
    author: {
      name: "Henry Arthur",
      title: "CEO at Company",
      avatar: "/placeholder.svg?height=60&width=60",
      initials: "HA",
    },
  },
  {
    id: 2,
    rating: 5,
    text: "Outstanding service and incredible results! The user experience is intuitive and the features are exactly what we needed. I would highly recommend this to any business looking to scale efficiently.",
    author: {
      name: "Sophia Wilson",
      title: "CTO at Company",
      avatar: "/placeholder.svg?height=60&width=60",
      initials: "SW",
    },
  },
  {
    id: 3,
    rating: 5,
    text: "The level of professionalism and attention to detail is unmatched. Our productivity has increased significantly since implementing this solution. The support team is always responsive and helpful.",
    author: {
      name: "Michael Chen",
      title: "Product Manager",
      avatar: "/placeholder.svg?height=60&width=60",
      initials: "MC",
    },
  },
  {
    id: 4,
    rating: 5,
    text: "Exceptional quality and reliability. This platform has streamlined our operations and improved our overall efficiency. The ROI has been impressive and the team couldn't be happier.",
    author: {
      name: "Emma Rodriguez",
      title: "Operations Director",
      avatar: "/placeholder.svg?height=60&width=60",
      initials: "ER",
    },
  },
  {
    id: 5,
    rating: 5,
    text: "Amazing experience from start to finish. The platform is user-friendly and the results speak for themselves. Our team has never been more productive and satisfied with a solution.",
    author: {
      name: "David Kim",
      title: "Marketing Director",
      avatar: "/placeholder.svg?height=60&width=60",
      initials: "DK",
    },
  },
  {
    id: 6,
    rating: 5,
    text: "Incredible value and outstanding support. This solution has transformed how we work and collaborate. I can't imagine going back to our old processes.",
    author: {
      name: "Sarah Johnson",
      title: "VP of Sales",
      avatar: "/placeholder.svg?height=60&width=60",
      initials: "SJ",
    },
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / itemsPerView))
    }, 5000)

    return () => clearInterval(timer)
  }, [itemsPerView])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(testimonials.length / itemsPerView) - 1 : prevIndex - 1,
    )
  }

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * itemsPerView
    return testimonials.slice(startIndex, startIndex + itemsPerView)
  }

  return (
    <section className="py-20 px-4 lg:px-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-start mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-purple-600">Customer</span> Testimonials <br className="hidden md:block" />
            <span className="text-gray-900">That Inspire Trust</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Discover what our valued customers have to say about their experience with our platform. Real stories from
            real people who have transformed their business.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {getVisibleTestimonials().map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                <CardContent className="p-8">
                  {/* Rating Stars */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 line-clamp-4">"{testimonial.text}"</p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold text-lg">
                        {testimonial.author.initials}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{testimonial.author.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.author.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-12 h-12 border-purple-200 hover:bg-purple-50 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-12 h-12 border-purple-200 hover:bg-purple-50 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-purple-600" : "bg-purple-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
