// src/pages/LandingPage/components/Hero.jsx

import React from "react"

import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button"
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

const stats = [
  { number: "100K+", label: "Legal Questions Answered", icon: MessageSquare },
  { number: "25K+", label: "Documents Generated", icon: FileText },
  { number: "98%", label: "User Satisfaction", icon: Star },
  { number: "24/7", label: "AI Availability", icon: Clock },
]

export default function Hero() {
  return (
    <>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
            </div>
          </div>
        </div>
      </section>
</>
  )
}
