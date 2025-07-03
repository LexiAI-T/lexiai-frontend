// src/pages/LandingPage/components/Header.jsx
import { Button } from "@/components/ui/button";import {
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

import { useState } from "react"
export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
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
              <Link href="/auth">
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
  );
}
