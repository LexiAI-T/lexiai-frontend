// src/pages/LandingPage/components/Header.jsx
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-4 py-0">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">lexi.ai</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pricing
          </a>
        </div>

        <Button className="border border-gray-900 text-gray-900 hover:bg-gray-100 rounded-full px-6 py-2">
          Ask LexiAI
        </Button>
      </nav>
    </header>
  );
}
