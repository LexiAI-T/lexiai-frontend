 "use client"

import React from "react"

import { useState, useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  CheckCircle,
  Shield,
  Gavel,
  Sparkles,
  BookOpen,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { Link } from "react-router-dom";

// Custom hook for scroll animations
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target
            element.classList.add("animate")
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

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const features = [
    { icon: Gavel, text: "Understand Nigerian Laws", color: "from-purple-400 to-pink-400" },
    { icon: BookOpen, text: "5-Minute Legal Learning", color: "from-blue-400 to-cyan-400" },
    { icon: Sparkles, text: "AI Legal Assistant", color: "from-indigo-400 to-purple-400" },
    { icon: Shield, text: "Know Your Rights", color: "from-cyan-400 to-blue-400" },
  ]

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "500+", label: "Legal Templates" },
    { number: "24/7", label: "AI Support" },
    { number: "99%", label: "Success Rate" },
  ]

  // Initialize scroll animations
  useScrollAnimation()

  // Rotate features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

const handleInputChange = (e) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
};

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Animated Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-500/30 rounded-full blur-lg"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white">
          <div className="scroll-animate-slide-right">
            {/* Animated Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                >
                  <Gavel className="w-6 h-6 text-white" />
                </motion.div>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  LexiAI
                </h1>
              </div>
              <div className="flex items-center space-x-2 text-purple-200">
                <Gavel className="w-5 h-5" />
                <span className="text-lg">Smart Legal Assistant</span>
              </div>
            </motion.div>

            <p className="text-xl text-purple-100 mb-12 leading-relaxed scroll-animate">
              Empowering Nigerians with accessible legal knowledge, AI-powered assistance, and comprehensive legal
              document generation.
            </p>

            {/* Animated Features Carousel */}
            <div className="space-y-6 mb-12 scroll-animate">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${features[currentFeature].color} flex items-center justify-center shadow-lg`}
                  >
                    {(() => {
                      const IconComponent = features[currentFeature].icon
                      return <IconComponent className="w-6 h-6 text-white" />
                    })()}
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-white">{features[currentFeature].text}</p>
                    <div className="flex space-x-1 mt-2">
                      {features.map((_, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            scale: index === currentFeature ? 1.2 : 1,
                            opacity: index === currentFeature ? 1 : 0.5,
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentFeature ? "bg-white" : "bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 gap-6 scroll-animate">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 scroll-animate-zoom"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="text-2xl font-bold text-white mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-purple-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Animated Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="w-full max-w-md scroll-animate-slide-left">
          {/* Mobile Header with Animation */}
          <div className="lg:hidden text-center mb-8 scroll-animate">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center"
              >
                <Gavel className="w-5 h-5 text-white" />
              </motion.div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                LexiAI
              </h1>
            </div>
            <p className="text-gray-600">Your Smart Legal Assistant</p>
          </div>

          <motion.div
            layout
            className="bg-white rounded-3xl shadow-2xl p-8 border border-purple-100 scroll-animate-scale"
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Form Header */}
            <div className="text-center mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isSignUp ? "signup" : "signin"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{isSignUp ? "Join LexiAI" : "Welcome Back"}</h2>
                  <p className="text-gray-600">
                    {isSignUp ? "Create your account to get started" : "Sign in to continue your legal journey"}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Animated Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div layout className="space-y-5">
                {/* Name Field with Animation */}
                <AnimatePresence>
                  {isSignUp && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="scroll-animate-slide-right"
                    >
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                        Full Name
                      </Label>
                      <motion.div
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-500 transition-colors duration-300" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-12 h-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 transition-all duration-300 hover:border-gray-300"
                          required={isSignUp}
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Email Field with Animation */}
                <div className="scroll-animate-slide-right">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address
                  </Label>
                  <motion.div className="relative group" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-500 transition-colors duration-300" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-12 h-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 transition-all duration-300 hover:border-gray-300"
                      required
                    />
                  </motion.div>
                </div>

                {/* Password Field with Animation */}
                <div className="scroll-animate-slide-right">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2 block">
                    Password
                  </Label>
                  <motion.div className="relative group" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-500 transition-colors duration-300" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-12 pr-12 h-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 transition-all duration-300 hover:border-gray-300"
                      required
                    />
                    <motion.button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </motion.button>
                  </motion.div>
                </div>

                {/* Confirm Password Field with Animation */}
                <AnimatePresence>
                  {isSignUp && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="scroll-animate-slide-right"
                    >
                      <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                        Confirm Password
                      </Label>
                      <motion.div
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-500 transition-colors duration-300" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="pl-12 pr-12 h-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 transition-all duration-300 hover:border-gray-300"
                          required={isSignUp}
                        />
                        <motion.button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Remember Me / Forgot Password */}
              {!isSignUp && (
                <div className="flex items-center justify-between text-sm scroll-animate">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                    <span className="ml-2 text-gray-600">Remember me</span>
                  </label>
                  <motion.button
                    type="button"
                    className="text-purple-600 hover:text-purple-700 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Forgot password?
                  </motion.button>
                </div>
              )}

              {/* Animated Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="scroll-animate-zoom">
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span>{isSignUp ? "Create Account" : "Sign In"}</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>

              {/* Social Login Divider */}
              <div className="relative scroll-animate">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3 scroll-animate">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 bg-transparent"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="ml-2">Google</span>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 bg-transparent"
                  >
                    <Globe className="w-5 h-5" />
                    <span className="ml-2">LinkedIn</span>
                  </Button>
                </motion.div>
              </div>

              {/* Toggle Sign In/Up */}
              <div className="text-center scroll-animate">
                <motion.button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
                </motion.button>
              </div>
            </form>

            {/* Back to Home Link */}
            <div className="mt-6 text-center scroll-animate">
              <Link
                href="/"
                className="text-purple-600 hover:text-purple-700 font-medium text-sm inline-flex items-center group"
              >
                <motion.span className="group-hover:-translate-x-1 transition-transform duration-300">←</motion.span>
                <span className="ml-1">Back to Home</span>
              </Link>
            </div>
          </motion.div>

          {/* Animated Trust Indicators */}
          <div className="mt-8 text-center scroll-animate">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span>Secure & Encrypted</span>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                <Shield className="w-4 h-4 text-blue-500 mr-1" />
                <span>GDPR Compliant</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
