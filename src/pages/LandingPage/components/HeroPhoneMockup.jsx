import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, MessageSquare, BarChart3, FileText, ArrowUpRight, Download } from "lucide-react"

export default function HeroPhoneMockup() {
  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="relative">
            <div className="flex justify-center items-center space-x-6">
                 <img
              src="/Iphone.png" 
              alt="Hero Visual"
              className="w-full h-[780px] object-cover"
            />
            </div>
          </div>
          {/* Left Content */}
          <div className="space-y-8">
          <div>
  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
    Understand the Law
    <br />
    <span className="text-purple-600">Take Smart Action</span>
    <br />
    With LexiAI
  </h1>

  <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
    Your AI-powered legal assistant built for Nigerians. Learn your rights, ask questions, report legal issues, and get simplified legal support — all in one trusted platform.
  </p>

  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
    <Download className="w-5 h-5 mr-2" />
    Try LexiAI Now
  </Button>
</div>


            {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-6 pt-8">
  {/* AI Legal Insights */}
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
      <TrendingUp className="w-5 h-5 text-purple-600" />
    </div>
    <div>
      <p className="font-semibold text-gray-900">AI Legal Insights</p>
      <p className="text-sm text-gray-600">Instant breakdowns of complex laws</p>
    </div>
  </div>

  {/* Case Tracking */}
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
      <BarChart3 className="w-5 h-5 text-blue-600" />
    </div>
    <div>
      <p className="font-semibold text-gray-900">Case Tracker</p>
      <p className="text-sm text-gray-600">Monitor legal reports and petitions</p>
    </div>
  </div>

  {/* Legal Chatbot */}
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
      <MessageSquare className="w-5 h-5 text-yellow-600" />
    </div>
    <div>
      <p className="font-semibold text-gray-900">Legal Chatbot</p>
      <p className="text-sm text-gray-600">Ask questions, get legal advice 24/7</p>
    </div>
  </div>

  {/* Report Generator */}
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
      <FileText className="w-5 h-5 text-red-600" />
    </div>
    <div>
      <p className="font-semibold text-gray-900">Petition Generator</p>
      <p className="text-sm text-gray-600">Draft affidavits, complaints & reports easily</p>
    </div>
  </div>
</div>

          </div>

          {/* Right Content - Mobile Mockups */}
         
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500K+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">$2.5B+</h3>
              <p className="text-gray-600">Assets Managed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">99.9%</h3>
              <p className="text-gray-600">Uptime</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
