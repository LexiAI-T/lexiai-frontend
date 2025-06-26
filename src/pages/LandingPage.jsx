"use client";

import { Check } from "lucide-react";
import AnimatedOnScroll from "@/components/layout/AnimatedOnScroll";

import HeroPhoneMockup from "./LandingPage/components/HeroPhoneMockup";
import FaqItem from "./LandingPage/components/FaqItem";
import { Button } from "@/components/ui/button";
import TestimonialCard from "./LandingPage/components/TestimonialCard";
import Header from "./LandingPage/components/Header";
import Hero from "./LandingPage/components/Hero";
import Features from "./LandingPage/components/Features";
import LegalHelpAccordion from "./LandingPage/components/LegalHelpAccordion";
export default function LandingPage() {
  const faqs = [
    {
      question: "What exactly is LexiAI?",
      answer:
        "LexiAI is an AI-powered legal assistant tailored for Nigeria. It helps users understand laws, generate legal drafts, and even report rights violations.",
    },
    {
      question: "Is LexiAI a replacement for a lawyer?",
      answer:
        "Not at all. LexiAI supports legal awareness and early action. For complex issues, it connects users with verified legal professionals.",
    },
    {
      question: "Is LexiAI free to use?",
      answer:
        "We offer a free tier for basic services. More advanced tools are available under affordable plans.",
    },
    {
      question: "Can I report legal issues through LexiAI?",
      answer:
        "Yes. LexiAI lets you log incidents like harassment or property disputes, and helps you generate necessary documentation.",
    },
    {
      question: "What type of laws does LexiAI cover?",
      answer:
        "From Marriage Acts to Tenancy Laws, Child Custody Rights, Police Stops, and more — all Nigerian context specific.",
    },
  ];
return (
    <div className="min-h-screen pt-8 bg-white pb-12">
      <AnimatedOnScroll>
        <div className="bg-white p-4 flex justify-center pt-8 pb-12">
          <div className="w-full rounded-3xl py-0 bg-gradient-to-b from-white to-purple-400 p-6 shadow-xl">
            <Header />
            <main>
              <Hero />
            </main>
          </div>
        </div>
      </AnimatedOnScroll>

      <AnimatedOnScroll delay={0.2}>
        <Features />
      </AnimatedOnScroll>

      <AnimatedOnScroll delay={0.4}>
        <HeroPhoneMockup />
      </AnimatedOnScroll>

      <AnimatedOnScroll delay={0.6}>
        <section className="bg-white flex justify-center items-center py-16 px-4">
          <div className="bg-purple-600 max-w-5xl w-full rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Customer satisfaction is hard.
                </h2>
                <p className="text-blue-100 text-lg">
                  Docs.ai makes it easier over time
                </p>
              </div>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Get a free trial
              </Button>
            </div>
          </div>
        </section>
      </AnimatedOnScroll>

      <AnimatedOnScroll delay={0.8}>
        <section className="container mx-auto px-20 py-8 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <div>
              <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Frequently
                <br /> asked
                <br /> questions
              </h2>
            </div>
            <div>
              <FaqItem faqs={faqs} />
            </div>
          </div>
        </section>
      </AnimatedOnScroll>

      <AnimatedOnScroll delay={0.5}>
        {/* <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-6xl font-bold text-gray-900">
            Our Customer
            <br />
            <span className="text-purple-500">Testimonials</span>
          </h2>
        </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <TestimonialCard
                name="Shopify"
                label="E-commerce Platform"
                color="bg-green-100"
                initial="S"
              />
              <TestimonialCard
                name="Stripe"
                label="Payment Processing"
                color="bg-purple-100"
                initial="S"
              />
              <TestimonialCard
                name="Walmart"
                label="Retail Corporation"
                color="bg-blue-100"
                initial="W"
              />
            </div>
          </div>
        </section> */}

        <TestimonialCard />
      </AnimatedOnScroll>
    </div>
  );
}
