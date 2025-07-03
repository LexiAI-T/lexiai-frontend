// src/components/FeatureCard.jsx
import { Card, CardContent } from "@/components/ui/card"

export default function FeatureCard({ title, description, icon, iconBg }) {
  return (
    <Card className="text-left h-auto p-6 border border-gray-100 rounded-2xl shadow-sm">
      <CardContent className="pt-6">
        <div
          className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center mb-12`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
