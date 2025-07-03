// src/components/Features.jsx
import FeatureCard from "../../../components/shared/FeatureCard"
import { Zap, FileText, ShieldAlert } from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "Instant Legal Answers",
      description:
        "Ask any legal question — from tenancy to traffic laws — and get court-verified, Nigerian law-based responses in seconds. No jargon. No delays.",
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      iconBg: "bg-purple-100",
    },
    {
      title: "Auto-Generate Legal Documents",
      description:
        "Need an affidavit, tenancy agreement, or spousal petition? LexiAI drafts legally sound documents instantly, ready to download or print. Just fill in a few details.",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "Report Corruption Anonymously",
      description:
        "Seen injustice or extortion? File a corruption or abuse report straight from your phone. LexiAI keeps you anonymous, connects you to legal support, and tracks your report.",
      icon: <ShieldAlert className="w-6 h-6 text-red-600" />,
      iconBg: "bg-red-100",
    },
  ]

  return (
    <>
  <div className="text-center mt-10  mb-12">
  <p className="text-purple-700 font-medium mb-2">
    AI-Powered Legal Assistance
  </p>
  <h2 className="text-3xl font-bold text-gray-900">
    Empowering Nigerians with access to justice
  </h2>
</div>


      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <FeatureCard
            key={idx}
            title={item.title}
            description={item.description}
            icon={item.icon}
            iconBg={item.iconBg}
          />
        ))}
      </div>
    </>
  )
}
