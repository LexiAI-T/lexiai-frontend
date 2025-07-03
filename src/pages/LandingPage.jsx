"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BookOpen,
  MessageCircle,
  FileText,
  Shield,
  AlertTriangle,
  Star,
  CheckCircle,
  Play,
  Sparkles,
  Scale,
  Brain,
  Zap,
  Globe,
  Lock,
  Clock,
  MessageSquare,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Users,
} from "lucide-react"

import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Legal Analysis",
    description: "Get instant, accurate explanations of complex Nigerian laws in simple language.",
    gradient: "from-emerald-400 to-cyan-500",
  },
  {
    icon: MessageCircle,
    title: "24/7 Legal Chat Assistant",
    description: "Ask any legal question and get immediate, reliable answers from our AI.",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: FileText,
    title: "Smart Document Generator",
    description: "Create professional legal documents, petitions, and contracts in minutes.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Shield,
    title: "Rights Protection Guide",
    description: "Know your rights in every situation - from police stops to workplace issues.",
    gradient: "from-orange-400 to-red-500",
  },
  {
    icon: BookOpen,
    title: "Interactive Legal Learning",
    description: "Master Nigerian law through bite-sized lessons, quizzes, and real cases.",
    gradient: "from-teal-400 to-green-500",
  },
  {
    icon: AlertTriangle,
    title: "Injustice Reporting System",
    description: "Document and report legal violations with proper evidence and follow-up.",
    gradient: "from-yellow-400 to-orange-500",
  },
]

const stats = [
  { number: "100K+", label: "Legal Questions Answered", icon: MessageSquare },
  { number: "25K+", label: "Documents Generated", icon: FileText },
  { number: "98%", label: "User Satisfaction", icon: Star },
  { number: "24/7", label: "AI Availability", icon: Clock },
]

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Law Student, University of Ibadan",
    content: "LexiAI transformed how I study constitutional law. Complex concepts are now crystal clear!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Fatima Abdullahi",
    role: "Small Business Owner, Lagos",
    content: "When my landlord tried illegal eviction, LexiAI helped me understand my rights and take action.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Chinedu Okwu",
    role: "Human Rights Activist",
    content: "The document generator saved us weeks of work. We created proper legal petitions in minutes.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

const faqs = [
  {
    question: "Is LexiAI's advice legally binding?",
    answer:
      "LexiAI provides educational guidance and information. For binding legal advice, consult a qualified Nigerian lawyer.",
  },
  {
    question: "How current is the legal information?",
    answer: "Our AI is regularly updated with the latest Nigerian laws, court decisions, and legal precedents.",
  },
  {
    question: "Can I use generated documents in court?",
    answer: "Our documents are professionally formatted templates. We recommend legal review before court submission.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use bank-level encryption and strict privacy protocols. Your information is completely confidential.",
  },
  {
    question: "What's the cost?",
    answer: "We offer a free tier with basic features, plus premium plans starting from ₦3,000/month.",
  },
]

// Custom hook for scroll animations
function useScrollAnimation() {
  const [animatedElements, setAnimatedElements] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target
            element.classList.add("animate")
            setAnimatedElements((prev) => new Set(prev).add(element))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe all elements with scroll animation classes
    const elements = document.querySelectorAll('[class*="scroll-animate"]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}


function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Initialize scroll animations
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 scroll-animate-slide-right">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                LexiAI
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 scroll-animate-slide-left">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">
                How it Works
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Reviews
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Pricing
              </a>
         <Link to="/auth">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 scroll-animate">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-indigo-600">
                Features
              </a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-indigo-600">
                How it Works
              </a>
              <a href="#testimonials" className="block text-gray-600 hover:text-indigo-600">
                Reviews
              </a>
              <a href="#pricing" className="block text-gray-600 hover:text-indigo-600">
                Pricing
              </a>
              <Link href="/auth">
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200 px-4 py-2 text-sm font-medium scroll-animate-zoom">
              <Sparkles className="w-4 h-4 mr-2" />
              Nigeria's First AI Legal Assistant
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight scroll-animate">
              Legal Help Made
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Simple & Smart
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto scroll-animate">
              Understand Nigerian laws, know your rights, and get legal documents in minutes. Your AI-powered legal
              companion for every situation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 scroll-animate">
              <Link href="/auth">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Hero Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center scroll-animate-zoom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need for
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Legal Clarity
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI tools designed specifically for Nigerian legal needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white hover:scale-105 scroll-animate-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How LexiAI Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get legal help in three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Ask Your Question",
                description: "Type your legal question in plain English or upload documents for analysis.",
                icon: MessageSquare,
                color: "from-blue-500 to-indigo-600",
              },
              {
                step: "02",
                title: "Get AI Analysis",
                description: "Our AI instantly analyzes Nigerian laws and provides clear, actionable explanations.",
                icon: Brain,
                color: "from-indigo-500 to-purple-600",
              },
              {
                step: "03",
                title: "Take Action",
                description: "Generate documents, understand your rights, or get step-by-step guidance.",
                icon: CheckCircle,
                color: "from-purple-500 to-pink-600",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center scroll-animate-bounce"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-6xl font-bold text-gray-200 mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Mobile App Preview
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Legal Help
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                In Your Pocket
              </span>
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Experience the power of LexiAI on mobile. Get instant legal advice, connect with top lawyers, and access
              legal resources anywhere, anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - App Features */}
            <div className="space-y-8 scroll-animate-slide-right">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Everything You Need</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: MessageSquare,
                      title: "AI Legal Assistant",
                      description: "Chat with Lexi anytime for instant legal guidance and explanations.",
                      color: "from-blue-400 to-cyan-400",
                    },
                    {
                      icon: FileText,
                      title: "Legal Document Library",
                      description: "Access official contracts, legal papers, and document templates.",
                      color: "from-purple-400 to-pink-400",
                    },
                    {
                      icon: Users,
                      title: "Top-Rated Lawyers",
                      description: "Connect with verified Nigerian lawyers specializing in your legal area.",
                      color: "from-green-400 to-emerald-400",
                    },
                    {
                      icon: BookOpen,
                      title: "Legal Resources Hub",
                      description: "Learn Nigerian law through articles, insights, and educational content.",
                      color: "from-orange-400 to-yellow-400",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 scroll-animate-slide-left"
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-indigo-200 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 scroll-animate">
                <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold flex items-center justify-center">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    alt="App Store"
    className="w-5 h-5 mr-2"
  />
  Download for iOS
</Button>
<Button className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold flex items-center justify-center">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
    alt="Google Play logo"
    className="w-5 h-5 mr-2"
  />
  Get on Android
</Button>

                </div>
              </div>
            </div>

            {/* Right Side - iPhone 16 Mockups */}
            <div className="relative scroll-animate-slide-left">
              {/* Background Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-pink-500/30 to-yellow-500/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl"></div>

              {/* iPhone 16 Mockups Container */}
              <div className="relative flex justify-center items-center space-x-8">
                {/* First iPhone 16 - Onboarding Screen */}
                <div className="relative transform rotate-6 hover:rotate-3 transition-transform duration-500">
                  {/* iPhone 16 Frame */}
                  <div className="relative w-72 h-[580px] bg-gradient-to-b from-gray-800 to-black rounded-[3.5rem] p-2 shadow-2xl">
                    {/* Dynamic Island */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-10"></div>

                    {/* Screen */}
                    <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative">
                      <img
                        src="/onboarding-screen.png"
                        alt="LexiAI Onboarding Screen"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Side Buttons */}
                    <div className="absolute left-0 top-32 w-1 h-12 bg-gray-700 rounded-r-full"></div>
                    <div className="absolute left-0 top-48 w-1 h-8 bg-gray-700 rounded-r-full"></div>
                    <div className="absolute left-0 top-60 w-1 h-8 bg-gray-700 rounded-r-full"></div>
                    <div className="absolute right-0 top-40 w-1 h-16 bg-gray-700 rounded-l-full"></div>
                  </div>

                  {/* iPhone Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-[3.5rem] pointer-events-none"></div>
                </div>

                {/* Second iPhone 16 - Home Screen */}
                <div className="relative transform -rotate-6 hover:-rotate-3 transition-transform duration-500 z-10">
                  {/* iPhone 16 Frame */}
                  <div className="relative w-72 h-[580px] bg-gradient-to-b from-gray-800 to-black rounded-[3.5rem] p-2 shadow-2xl">
                    {/* Dynamic Island */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-10"></div>

                    {/* Screen */}
                    <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative">
                      <img src="/home-screen.png" alt="LexiAI Home Screen" className="w-full h-full object-cover" />
                    </div>

                    {/* Side Buttons */}
                    <div className="absolute left-0 top-32 w-1 h-12 bg-gray-700 rounded-r-full"></div>
                    <div className="absolute left-0 top-48 w-1 h-8 bg-gray-700 rounded-r-full"></div>
                    <div className="absolute left-0 top-60 w-1 h-8 bg-gray-700 rounded-r-full"></div>
                    <div className="absolute right-0 top-40 w-1 h-16 bg-gray-700 rounded-l-full"></div>
                  </div>

                  {/* iPhone Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent rounded-[3.5rem] pointer-events-none"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* App Features Grid */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, label: "Secure & Private", desc: "End-to-end encryption" },
              { icon: Clock, label: "24/7 Available", desc: "Always ready to help" },
              { icon: Zap, label: "Instant Answers", desc: "Get help in seconds" },
              { icon: CheckCircle, label: "Verified Lawyers", desc: "Connect with experts" },
            ].map((feature, index) => (
              <div
                key={index}
                className="group scroll-animate-zoom"
                style={{ animationDelay: `${1000 + index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">{feature.label}</h4>
                <p className="text-sm text-indigo-200">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center scroll-animate">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience LexiAI?</h3>
              <p className="text-indigo-200 mb-6">
                Join thousands of Nigerians who trust LexiAI for their legal needs. Download now and get your first
                consultation free.
              </p>
              <Link href="/auth">
                <Button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:from-yellow-500 hover:to-orange-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                  Download Free App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Thousands
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Across Nigeria
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from Nigerians who found legal clarity with LexiAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4 border-2 border-gray-200"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about LexiAI</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="scroll-animate" style={{ animationDelay: `${index * 100}ms` }}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 scroll-animate-zoom">
            <Zap className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Legal Clarity?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of Nigerians who trust LexiAI for their legal needs. Start your free trial today and
              experience the future of legal assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div className="md:col-span-2 scroll-animate-slide-right">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">LexiAI</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Empowering every Nigerian with accessible, intelligent legal assistance. Making the law understandable
                for everyone.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <MessageCircle className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Product */}
            <div className="scroll-animate">
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="scroll-animate">
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center scroll-animate">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 LexiAI. All rights reserved. Built with ❤️ for Nigeria.</p>
            <div className="flex items-center space-x-4 text-gray-400">
              <Lock className="h-4 w-4" />
              <span className="text-sm">Your data is secure and encrypted</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
