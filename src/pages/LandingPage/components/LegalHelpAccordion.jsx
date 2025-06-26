import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TrendingUp, BarChart3, Download } from "lucide-react"

export default function LegalHelpAccordion() {


  return (
    <div className="space-y-12">
      
 <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Invest with the
                <br />
                <span className="text-blue-600">Confidence</span>
                <br />
                Succeed with Ease
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Simplify your wealth building journey with Smart Investment tools. Access real-time market data, expert
                insights, and personalized portfolio management all in one powerful platform.
              </p>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download Our App
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Smart Analytics</p>
                  <p className="text-sm text-gray-600">Real-time insights</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Portfolio Tracking</p>
                  <p className="text-sm text-gray-600">Monitor performance</p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

    </div>
  )
}
